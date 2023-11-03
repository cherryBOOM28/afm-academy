import './style.scss'

function RandomParapraph({ children, color, fontSize }) {
    const defaultColor = '#3A3939';
    const defaultFontSize = '18px';

    return ( 
        <div className="randomParagraph">
            <p
                style={{
                    color: color? color : defaultColor,
                    fontSize: fontSize ? fontSize : defaultFontSize,
                }}
            >{children}</p>
        </div>
    );
}

export default RandomParapraph;