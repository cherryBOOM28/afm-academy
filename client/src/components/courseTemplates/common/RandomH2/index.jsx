import './style.scss'

function RandomH2({children, style, text}) {
    
    if (text) {
        return (
            <div className="random-h2"
                style={style}
            >
                {text}
            </div>
        )
    }
    
    return ( 
        <div className="random-h2"
            style={style}
        >
            {children}
        </div>
    );
}

export default RandomH2;