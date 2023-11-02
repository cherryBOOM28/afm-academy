import './style.scss'

function RandomParapraph({ children, color }) {
    const defaultColor = '#3A3939';

    return ( 
        <div className="randomParagraph">
            <p
                style={{
                    color: color? color : defaultColor,
                }}
            >{children}</p>
        </div>
    );
}

export default RandomParapraph;