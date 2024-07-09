

function Main() {



    const username = "John Doe"

    const userStyles = {
      backgroundColor: "blue",
      color: "white"
    }

    return (
        <div className = "main-content">
            <h1 style={userStyles}>Welcome, {username}</h1>
            <ol>
                <li>It's a popular library, so I'll be in the know</li>
                <li>I'm more likely to get a job as a developer if I know React</li>
            </ol>
        </div>
    )
}

export default Main