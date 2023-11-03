
function Centered({ children }) {
    return ( 
        <div
            style={{
                padding: '0px 160px',
                textAlign: 'center'
            }}
        >
            {children}
        </div>
    );
}

export default Centered;