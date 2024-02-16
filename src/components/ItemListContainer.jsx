const ItemListContainer = ({ greetings, greetingsStyle, children }) => {
    return (
        <>
            <h1 style={greetingsStyle} >{greetings}</h1>
            {children}
        </>
    )

}

export default ItemListContainer