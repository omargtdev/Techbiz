import { useEffect, useState } from "react";
import API from "../../API";
import { ProductEntity, Response, SuccessfulResponse } from "../../entity";
import Spinner from "../Spinner";

const ProductGroup = ({ ids }: { ids: string }) => {

    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(`${API.baseUrlTechbiz}/products?selectedIds=${ids}`)
            .then(res => res.json())
            .then((res : Response) => {
            if (!res.success) {
                throw new Error("Something was wrong!")
            }

            const successRes = (res as SuccessfulResponse);

            const products = successRes.data.products;
            if (products) {
                setProducts(products);
                setIsLoaded(true);
            }
        }).catch(err => console.log(err));
    }, []);
    
    return (
        <div className="container my-3 row row-cols-xl-5 row-cols-lg-5 row-cols-md-4 row-cols-sm-2 gap-3">
            {isLoaded ?
            products.map((product: ProductEntity) => (
                <div className="card">
                    <img className="card-img-top" src={`${API.baseUrl}${product.ImageUrl}`} alt={product.Name} />
                    <div className="card-body">
                        <h5 className="card-title">{product.Name}</h5>
                        <p className="card-text">{product.Description}</p>
                        <p className="card-text">Precio: <span className="fw-bold">{product.Price}</span></p>
                    </div>
                </div>
            )) : <Spinner />}
        </div>
    );
}

export default ProductGroup;