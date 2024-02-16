import cart from './cartLogo.svg'


const CartWidget = () => {
    return (
        <>
            <div style={{ display: 'inline-block', border: "1px solid #ccc" }}>
                <img src={cart} style={{ width: '20px', height: '20px' }} /> 0
            </div>
        </>
    )
}

export default CartWidget