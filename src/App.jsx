import NavBar from "./components/NavBar/NavBar"
import CartWidget from "./components/NavBar/CartWidget/CartWidget"
import ItemListContainer from "./components/ItemListContainer"

const estilos = {
    lista: {
        display: "inline-block",
        margin: "0px 10px",
    },
    oLista: {
        textAlign: "center",
    },
    titulo: {
        width: "500px",
        margin: "0 auto",
        textAlign: "center",
    },
}

function App() {
    return (
        <>
            <div>
                <h1 style={estilos.titulo}>Korean Store</h1>
                <CartWidget />
            </div>

            <div>
                <NavBar listas={estilos.lista} oListas={estilos.oLista} />
            </div>
            <div>
                <ItemListContainer greetings='Welcome to Korean Store' greetingsStyle={estilos.titulo} />
            </div>
        </>
    )
}
export default App
