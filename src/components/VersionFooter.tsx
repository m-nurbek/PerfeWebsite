



function VersionFooter(){

    const versionStyle = {
        color: 'gray',
        textAlign: 'left',
        marginRight: '20px',
        justifyContent: 'center',
    };

    return(
        <h6 style={versionStyle}>VERSION
            <h4 style={{color: 'white'}}>2023 Edition </h4>
        </h6>
    );
}

export default VersionFooter;