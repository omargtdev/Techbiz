import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../API";
import { CategoryEntity, ProductEntity, Response, SuccessfulResponse } from "../../entity";
import Spinner from "../Spinner";

import './styles.css';


function TableProduct({ category } : { category : CategoryEntity }){

    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const splitProductsInGroups = (products: Array<ProductEntity>) => {
       let actualProduct = null;
       let productGroup = [];
       let groups: any = [] 
        let count = 0;

        while(actualProduct = products.shift()){
            productGroup.push(actualProduct);
            count++;

            if(count === 5 || products.length === 0){
                groups.push(productGroup);
                productGroup = []
                count = 0
            }
        }
        setProducts(groups);
        setIsLoaded(true);
    }

    useEffect(() => {
        setIsLoaded(false);
        fetch(`${API.baseUrlTechbiz}/products/categories/${category.CategoryID}`)
            .then(res => res.json())
            .then((res: Response)=> {
                if(!res.success){
                    throw new Error("Something was wrong!")
                }

                const successRes = (res as SuccessfulResponse);

                const products = successRes.data.products;
                if(products){
                    splitProductsInGroups(products);
                }
            })
            .catch(err => console.log(err));

    }, [category]);


    return (
        <div className="col-md-9" >
            {isLoaded 
            ? products.map((group: Array<ProductEntity>, index) => (
                <Link 
                    key={index} 
                    className="row row-cols-xl-5 row-cols-lg-5 row-cols-md-4 row-cols-sm-2 g-4 mb-4 mt-0 px-2 pb-4 pb group-container"
                    to={`?selectedIds=${group.map(group => group.ProductID).join()}`}>
                    {group.map((product: ProductEntity) => (
                        <div key={product.ProductID} className="col">
                            <div className="card h-100">
                            <img src={`${API.baseUrl}${product.ImageUrl}`} className="card-img-top" alt="image" />
                            <div className="card-body">
                                <h5 className="card-title">{product.Name}</h5>
                                <p className="card-text">S/ {product.Price}</p>
                            </div>
                            </div>
                        </div>
                    ))}
                </Link>
            ))
            :  <Spinner />}
        </div>
    );
}

export default TableProduct;