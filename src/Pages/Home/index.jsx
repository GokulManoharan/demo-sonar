const Home = () => {
    const description = "This is the home page of the application"

    return (
        <>
            <h3>{description}</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Info</a></li>
            </ul>
        </>
    )
}

export default Home