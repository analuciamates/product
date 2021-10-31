import React, { useState, useEffect } from 'react'
import { getProductByCode } from '../../api/product'
import { useParams } from 'react-router-dom'

import './Product.scss'
import { AxiosResponse } from 'axios'
import { ApiSingleResult, Product as TypeProduct } from 'types'

const Product = () => {
    const { id } = useParams();

    const [product, setProduct] = useState<TypeProduct>(null)
    
    useEffect(() => {
        getProductByCode(id)
        .then((response: AxiosResponse<ApiSingleResult>) => {
            setProduct(response.data.product);
        })
        .catch(() => {
            console.error('getProductByCode error');
        });
    }, [id])
    
        return (
            <div className="product__item">
                {
                    product !== null && <div>
                        <h2>{product.product_name}</h2>
                        <h4>Catégories : </h4>
                        <p>{product.categories}</p>
                        <img src={product.image_front_url} alt="image produit"/>
                        <h4>Allèrgenes : </h4>
                        {product.allergens_hierarchy.map((prd)=> {
                            return (
                            <p>{prd}</p>
                            )
                        })
                        }   
                        <h4>Ingrédients: </h4>
                        <p>{product.ingredients_text}</p>
                        <div>
                    </div>
                    </div>
                }
            </div>
        )
}

export default Product;