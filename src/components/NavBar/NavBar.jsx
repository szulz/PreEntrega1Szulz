const NavBar = ({ label, listas, oListas }) => {
    return (
        <>
            <ul style={oListas}>
                <li style={listas}><a href="">Category </a></li>
                <li style={listas}><a href="">Category </a></li>
                <li style={listas}><a href="">Category </a></li>
                <li style={listas}><a href="">Category </a></li>
                <li style={listas}><a href="">Category </a></li>
            </ul>
        </>
    )
}

export default NavBar