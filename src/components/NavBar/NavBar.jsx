const NavBar = ({ label, listas, oListas }) => {
    return (
        <>
            <ul style={oListas}>
                <li style={listas}><a href="">Clothes </a></li>
                <li style={listas}><a href="">Technology </a></li>
                <li style={listas}><a href="">Sports </a></li>
                <li style={listas}><a href="">Music </a></li>
                <li style={listas}><a href="">Food </a></li>
            </ul>
        </>
    )
}

export default NavBar