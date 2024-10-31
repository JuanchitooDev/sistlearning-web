import { ITipoEvento } from "./tipoEventoInterface"

export interface IEvento {
    id?: number
    id_parent?: number
    id_tipoevento?: number
    id_trabajador?: number
    titulo?: string
    titulo_url?: string
    descripcion?: string
    temario?: string
    plantilla_certificado?: string
    fecha?: Date
    modalidad?: string
    precio?: number
    user_crea?: string
    user_actualiza?: string
    user_elimina?: string
    estado?: boolean
    tipoEvento?: ITipoEvento
}