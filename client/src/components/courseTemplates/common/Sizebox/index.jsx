function Sizebox({ height, width }) {
    return ( 
        <div className="sizebox"
            style={{
                height: `${height || 0}px`,
                width: `${width || 0}px`,
            }}
        ></div>
    );
}

export default Sizebox;