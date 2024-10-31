import { defineStore } from 'pinia'
import api from '../utils/axios'
import { ICertificado } from '../interfaces/certificadoInterface'

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
        async getCertificadoByCodigo(codigo: string) {
            this.loading = true
            this.error = null
            try {
                const urlApi = `/certificado/${codigo}`
                const response = await api.get(urlApi)
                // console.log('response getCertificadoByCodigo', response.data.data)
                this.certificado = response.data.data
            } catch (error) {
                // console.error('Error al obtener el certificado: ', error)
                this.error = 'Error al obtener el certificado'
            }
        },
        async downloadCertificado(idCertificado: number) {
            try {
                const urlApi = `/certificado/${idCertificado}/download`
                const response = await api.get(urlApi, {
                    responseType: 'blob'
                })
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `certificado_${idCertificado}.pdf`);
                document.body.appendChild(link);
                link.click();
                link.remove();
            } catch (error) {
                console.error('Error downloading certificado', error)
            }
        }
    }
})