import './styles.css'

function Header(){
    return (
        <div className="header">
            <div className="top_header">
                <div className="container">
                    <div className="top">
                        <p> <span>Now Hiring:</span> Are you a driven and motivated 1st Line IT Support Engineer?</p>
                        <p>Office Hours: 08:00am-6:00pm</p>
                    </div>
                </div>
            </div>
            <div className="middle_header">
                <div className="container">
                    <div className="middle">
                        <div className="item">
                            <img className="logo" src="https://themeforest.vecuro.com/wordpress/techbiz/wp-content/uploads/2022/09/logo5.svg" alt=""  />
                        </div>
                        <div className="item">
                            <p>Call Anytime 24/7</p>
                            <a href="#">(+269) 21562148</a>
                        </div>
                        <div className="item">
                            <p>Mail Us Support</p>
                            <a href="#">info@TechBiz.com</a>
                        </div>
                        <div className="item">
                            <p>Office Address</p>
                            <a href="#">259 HGS, Hotland, USA</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;