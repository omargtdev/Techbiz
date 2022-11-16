import API from "../../API";
import { ProductEntity } from "../../entity";

function Product({ product } : { product : ProductEntity }){

    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Producto</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="card">
                    <img src={`${API.baseUrl}${product.ImageUrl}`} className="card-img-top" alt={product.Name} />
                    <div className="card-body">
                        <h5 className="card-title">{product.Name}</h5>
                        <p className="card-text">{product.Description}</p>
                        <p className="card-text fw-bold">Precio: {product.Price}</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>

    );
}

export default Product;