export interface ApiResults {
    products: Product[]
}

export interface ApiSingleResult {
    code: string
    product: Product
}

export interface Product {
    id: string
    image_front_small_url: string
    product_name: string
}