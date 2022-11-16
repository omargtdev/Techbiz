import { useEffect, useState } from "react";
import API from "../../API";
import { CategoryEntity, ProductEntity, Response, SuccessfulResponse } from "../../entity";
import Product from "../Product";


const PRODUCTS_URLS: Array<string> = [
    `${API.baseUrlTechbiz}/products/hardware`,
    `${API.baseUrlTechbiz}/products/software`,
    `${API.baseUrlTechbiz}/products/bootcamps`,
]

function TableProduct({ category } : { category : CategoryEntity }){

    const [products, setProducts] = useState([]);
    const [productSelected, setProductSelected] = useState({});

    useEffect(() => {
        const url = PRODUCTS_URLS[category.CategoryID - 1];

        if(!url) return;

        fetch(url)
            .then(res => res.json())
            .then((res: Response)=> {
                if(!res.success){
                    throw new Error("Something was wrong!")
                }

                const successRes = (res as SuccessfulResponse);

                const products = successRes.data.products;
                if(products){
                    setProducts(products);
                }
            })
            .catch(err => console.log(err));

    }, [category]);


    return (
        <div className="col-md-9" >
            <div className="row row-cols-1 row-cols-md-5 g-5">
            {products.map((product: ProductEntity) => (
                <div key={product.ProductID} className="col"
                    onClick={() => setProductSelected(product)}
                    data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div className="card h-100">
                    <img src={`${API.baseUrl}${product.ImageUrl}`} className="card-img-top" alt="image" />
                    <div className="card-body">
                        <h5 className="card-title">{product.Name}</h5>
                        <p className="card-text">S/ {product.Price}</p>
                    </div>
                    </div>
                </div>
            ))}

            </div>
            <Product product={(productSelected as ProductEntity)}/>
        </div>
    );
}

export default TableProduct;