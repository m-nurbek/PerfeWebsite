

function SocialFooter(){
    const versionStyle = {
        color: 'gray',
        textAlign: 'left',
        marginLeft: '20px',
        display: 'flex',
        textAlign: 'left',
    };

    return(
        <h6 style={versionStyle}>SOCIALS
            <h4 style={{color: 'white'}}>Awards </h4>
            <h4 style={{color: 'white'}}>Instagram </h4>
            <h4 style={{color: 'white'}}>Twitter </h4>
            <h4 style={{color: 'white'}}>LinkedIn </h4>
        </h6>
    );
}

export default SocialFooter;