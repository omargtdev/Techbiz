export interface Response {
    message: string,
    success: boolean
}

export interface SuccessfulResponse extends Response {
    data: any
}

export interface SliderEntity {
    SliderID: number,
    Image: string,
    Title: string,
    Description: string
}

export interface ProviderEntity {
    idproveedor: string,
    nombreempresa: string,
    nombrecontacto: string,
    cargocontacto: string,
    direccion: string,
    ciudad: string,
    region: string | null,
    codigopostal: string,
    pais: string,
    telefono: string,
    fax: string | null
}

export interface CategoryEntity {
    CategoryID: number,
    Name: string,
    Description: string
}

export interface ProductEntity {
    ProductID: number,
    Name: string,
    Description: string,
    ImageUrl: string,
    Price: number,
    CategoryID: number
}