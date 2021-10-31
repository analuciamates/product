import axios from "axios"
const link = `https://world.openfoodfacts.org`

export const getProductBySearchTerm = (searchTerm: string) => {
    return axios.get(link + `/cgi/search.pl?search_terms=${searchTerm}&search_simple=1&action=process&fields=id%2Cproduct_name%2Cimage_front_small_url&json=1&page=1&page_size=24`)
}

export const getProductByCode = (code) => {
    return axios.get(link + `/api/v0/product/${code}.json?fields=product_name%2Ccategories%2Cimage_front_url%2Callergens_hierarchy%2Cingredients_text`)
}