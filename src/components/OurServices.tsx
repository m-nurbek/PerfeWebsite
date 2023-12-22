import '/src/assets/css/OurServices.css'; // Import your CSS file


function OurServices() {
    return (
        <>
            <h1 style={{fontFamily: "Montserrat", fontSize: "60px"}}>Our Services </h1>

            <div className="container">
              <div className="column">
                  <img src="/src/assets/img/Service2.png"/>
                  <div className="column">
                      <h4 style={{fontFamily: "Montserrat", fontSize: "20px", marginRight: "160px", marginLeft: "160px"}}>We create websites from the ground up.</h4>
                  </div>

                  <img style={{marginTop:"40px"}} src="/src/assets/img/Service2.png"/>
                  <div className="column">
                      <h4 style={{fontFamily: "Montserrat", fontSize: "20px", marginRight: "160px", marginLeft: "160px"}}>We deliver personalized website designs.</h4>
                  </div>
              </div>
                    <div className="column">
                        <img src="/src/assets/img/Service2.png" style={{marginTop: "200px", transform: 'rotate(-90deg)'}}/>
                          <div className="column">
                              <h4 style={{fontFamily: "Montserrat", fontSize: "20px", marginRight: "160px", marginLeft: "160px", marginTop: "100px"}}>We revise existing websites & recommend improvements.</h4>
                          </div>
                    </div>
            </div>

        </>
    );

}

export default OurServices;