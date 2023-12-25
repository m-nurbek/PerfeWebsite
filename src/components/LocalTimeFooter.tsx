import {CSSProperties} from "react";


function LocalTimeFooter(){
    const versionStyle: CSSProperties = {
        color: 'gray',
        textAlign: 'left',
    };

    return(
        <h6 style={versionStyle}>LOCAL TIME
            <h4 style={{color: 'white'}}>09:55:25 </h4>
        </h6>
    );

}

export default LocalTimeFooter;