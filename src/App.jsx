import NavBar from "./components/NavBar/NavBar"
import CartWidget from "./components/NavBar/CartWidget/CartWidget"
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount"

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
                <div>
                    <ItemCount stockAmount={10} image='./public/PlaceHolder.jpg' price={5000} />
                    <ItemCount stockAmount={30} image='./public/PlaceHolder.jpg' price={400} />
                    <ItemCount stockAmount={5} image='./public/PlaceHolder.jpg' price={20} />
                    <ItemCount stockAmount={10} image='./public/PlaceHolder.jpg' price={1000} />
                    <ItemCount stockAmount={10} image='./public/PlaceHolder.jpg' price={320} />
                </div>
            </div>

        </>
    )
}
export default App
