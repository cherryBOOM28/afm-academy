function Sizebox({ height, width }) {

    return ( 
        <div className="sizebox"
            
        >
            <div
                style={{
                    height: `${height || 100}px`,
                    width: `${width || 0}px`,
                }}
            ></div>
        </div>
    );
}

export default Sizebox;