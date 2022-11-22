import { useEffect, useState } from "react";
import API from "../../API";
import { Response, SliderEntity, SuccessfulResponse } from "../../entity";
import Spinner from "../Spinner";

import './styles.css'

function Slider(){

    const [sliders, setSliders] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(`${API.baseUrlTechbiz}/sliders`)
            .then(res => res.json())
            .then((res: Response)=> {
                if(!res.success){
                    throw new Error("Something was wrong!")
                }

                const successRes = (res as SuccessfulResponse);

                const sliders = successRes.data.sliders;
                if(sliders){
                    setSliders(sliders);
                    setIsLoaded(true);
                }
            })
            .catch(err => console.log(err));
    }, [])

    return isLoaded ? (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {sliders.map((slider: SliderEntity) => (
                    <div key={slider.SliderID} className="carousel-item active">
                        <img src={`${API.baseUrl}${slider.Image}`} className="d-block w-100" alt="some img" />
                        <div className="carousel-caption d-none d-md-block">
                            <p className="up_text">
                            {slider.Title}</p>
                            <h5>{slider.Description}</h5>
                            <div className="row_img">
                                <a href="#" className="col">Nosotros</a>
                                <a href="#" className="col">Lee mas</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    ) : <Spinner />;
}

export default Slider;