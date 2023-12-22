import './style.scss'

function RandomH2({children, style}) {
    return ( 
        <div className="random-h2"
            style={style}
        >
            {children}
        </div>
    );
}

export default RandomH2;