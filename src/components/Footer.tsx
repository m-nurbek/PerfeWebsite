import '/src/assets/css/Footer.css'; // Import your CSS file


function Footer(){

    return(
        <div className="container">
            <div className="column">
                <img src="src/assets/img/LetsWorkTogetherFooter.png"/>
                <div className="row">
                    <button style={{marginRight: '100px'}} type="button" className="btn btn-outline-light custom-transparent-btn">perfe_agency@gmail.com</button>
                    <button type="button" className="btn btn-outline-rounded custom-transparent-btn">+77072458844</button>
                </div>


            </div>

            <div style={{textAlign: "center", marginLeft: '200px',marginTop: '200px'}}>
                <div className="column">
                    <h4 >Find us in social media</h4>
                    <div className="column">

                            <img src="src/assets/svg/InstIcon.png" style={{scale: '0.5'}}>
                            </img>


                            <img src="src/assets/svg/MailIcon.png" style={{scale: '0.5'}}></img>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;