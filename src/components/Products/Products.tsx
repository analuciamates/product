import { getProductBySearchTerm } from 'api/product'
import { AxiosResponse } from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ApiResults, Product } from 'types'

import './Products.scss'

const Products = () => {
    const [product, setProduct] = useState<string>('')
    const [products, setProducts] = useState<Product[]>([])

    const onSubmitForm = () => {
        getProductBySearchTerm(product)
            .then((response: AxiosResponse<ApiResults>) => {
                setProducts(response.data.products)
            })
            .catch(() => {
                console.error('getProductBySearchTerm error')
            })
    }

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    onSubmitForm()
                }}
            >
                <div className="search__input">
                    <input
                        type="text"
                        value={product}
                        name="search"
                        id="search"
                        onChange={(e) => {
                            setProduct(e.currentTarget.value)
                        }}
                    />
                    <span>
                        <input type="submit" value="Envoyer" />
                    </span>
                </div>
            </form>

            {products.length > 0 && (
                <div id="list">
                    {products.map((product: Product) => {
                        return (
                            <li key={product.id} className="products__item">
                                <h4>{product.product_name}</h4>
                                <img
                                    src={product.image_front_small_url}
                                    alt="image produit"
                                    className="products__item__img"
                                />
                                <div className="products__item__link">
                                    <Link to={'/detail/' + product.id}>
                                        Détails produit
                                    </Link>
                                </div>
                            </li>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Products
