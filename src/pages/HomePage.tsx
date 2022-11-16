import { useEffect, useState } from "react";
import Slider from "../components/Slider";
import { ProviderEntity } from "../entity";

function HomePage(){

    const [providers, setProviders] = useState([]);

    useEffect(() => {
        fetch("https://servicios.campus.pe/proveedores.php")
            .then(res => res.json())
            .then((res)=> {
                setProviders(res);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <Slider />
            <div id="providers">
                <div className="container">
                    <h3 className="section-subtitle">NUESTROS PROVEEDORES</h3>
                    <h2 className="section-title">QUE TIPO DE PROVEEDORES TENEMOS</h2>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {providers.map((provider: ProviderEntity) => (
                        <div key={provider.idproveedor} className="col">
                            <div className="card">
                                <img src="/slider1.jpg" className="card-img-top" alt="Empresa proveedor" />
                                <div className="card-body">
                                    <h5 className="card-title">{ provider.nombreempresa }</h5>
                                    <p className="card-text">
                                        Contacto: { provider.nombrecontacto },
                                        Cargo: { provider.cargocontacto },
                                        Ciudad: { provider.ciudad },
                                        Pais: { provider.pais }
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}


export default HomePage;