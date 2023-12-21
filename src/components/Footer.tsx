import VersionFooter from "./VersionFooter.tsx";
import LocalTimeFooter from "./LocalTimeFooter.tsx";
import SocialFooter from "./SocialFooter.tsx";


function Footer(){

    const footerStyle = {
        display: 'flex',
        position: 'fixed',
        justifyContent: 'left'
    };

    return(
        <>
            <div className="container" style={footerStyle}>
                <VersionFooter/>
                <LocalTimeFooter/>
                <SocialFooter/>
            </div>
        </>
    );
}

export default Footer;