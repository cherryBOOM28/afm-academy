import Sizebox from '../Sizebox';
import './style.scss'

function RandomParapraph({ children, color, fontSize }) {
    const defaultColor = '#3A3939';
    const defaultFontSize = '18px';

    if (typeof children === 'string' && children.indexOf('\n' !== -1)) {

        return (
            <div className="randomParagraph">
                {
                    children.split('\\n').map((child, index) => {
                        const last = index === children.split('\\n').length - 1;

                        return <>
                            <p
                                style={{
                                    color: color? color : defaultColor,
                                    fontSize: fontSize ? fontSize : defaultFontSize,
                                }}
                            >{child}</p>
                            {
                                !last 
                                    ? <Sizebox height={20} />
                                    : null
                            }
                        </>
                    })
                }
            </div>
        ) 

    }

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