import { useState } from "react"

const styles = {
    blocks: {
        border: "1px solid #ccc",
        padding: "20px",
        marginBottom: "10px",
        display: "block",
        width: "auto",
        float: "left",
    },
    imagen: {
        maxWidth: "100%",
        height: "auto",
        display: "block",
        marginBottom: "10px",
    }
}

const ItemCount = ({ stockAmount, image, price }) => {
    const [quantity, setQuantity] = useState(0)
    const [stock, setStock] = useState(stockAmount)
    function subtractOne(quantity, setQuantity, stock, setStock) {
        if (quantity == 0) {
            return
        }
        return setQuantity(quantity - 1)
    }

    function addOne(quantity, stockAmount) {
        if (quantity >= stock) {
            return alert('Not enough stock ');
        }
        return setQuantity(quantity + 1)
    }

    function addToCart(quantity, setQuantity, stock, setStock) {
        if (quantity == 0) {
            return console.log('Nothing added')
        }
        if (stock <= 0) {
            return alert('Not enough stock ');
        }
        setStock(stock - quantity)
        alert(`You have added x${quantity}`)
        setQuantity(0)
    }

    return (
        <>
            <div style={styles.blocks} >
                <img src={image} width={175} height={175} style={styles.imagen} />
                <p >Price: {price}$</p>
                <button onClick={() => addOne(quantity, setQuantity, stock, setStock)}>+</button>
                <button onClick={() => addToCart(quantity, setQuantity, stock, setStock)}>Add to cart: {quantity}</button>
                <button onClick={() => subtractOne(quantity, setQuantity, stock, setStock)}>-</button>
                <p style={{ margin: 0 }}>Stock: {stock}</p>
            </div >
        </>
    )
}

export default ItemCount