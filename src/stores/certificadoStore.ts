import { defineStore } from 'pinia'
import api from '../utils/axios'
import { ICertificado } from '../interfaces/certificadoInterface'
// import { sanitizeFileName } from '@/utils/string.utils'
// import { IAlumno } from '@/interfaces/alumnoInterface'

export const useCertificadoStore = defineStore('certificadoStore', {
    state: () => ({
        certificados: [] as ICertificado[],
        certificado: null,
        loading: false,
        error: null as string | null
    }),
    actions: {
        async fetchCertificados() {
            this.loading = true
            this.error = null
            try {
                const response = await api.get('/certificado')
                this.certificados = response.data.data
            } catch (error) {
                console.error('Error fetching certificados: ', error)
            } finally {
                this.loading = false
            }
        },
        async getCertificadoById(id: number) {
            try {
                const response = await api.get(`/certificado/${id}`)
                const certificado = response.data.data
                // console.log('certificado response', certificado)
                const index = this.certificados.findIndex((c) => c.id === certificado.id)
                if (index !== -1) {
                    this.certificados[index] = certificado
                } else {
                    this.certificados.push(certificado)
                }
                return certificado
            } catch (error) {
                console.error(`Error al obtener el certificado: ${error}`)
                this.error = error instanceof Error ? error.message : 'Error desconocido'
            }
        },
        async getCertificadoByCodigo(codigo: string) {
            this.loading = true
            this.error = null
            try {
                const urlApi = `/certificado/codigo/${codigo}`
                const response = await api.get(urlApi)
                this.certificado = response.data.data
            } catch (error) {
                console.error('Error al obtener el certificado: ', error)
                this.error = 'Error al obtener el certificado'
            }
        },
        async downloadCertificado(idCertificado: number) {
            try {
                const certificado = await this.getCertificadoById(idCertificado)
                // console.log('download certificado', certificado)
                const urlApi = `/certificado/${idCertificado}/download`
                const response = await api.get(urlApi, {
                    responseType: 'blob'
                })
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `${certificado.fileName}`);
                document.body.appendChild(link);
                link.click();
                link.remove();
            } catch (error) {
                console.error('Error downloading certificado', error)
            }
        }
    }
})