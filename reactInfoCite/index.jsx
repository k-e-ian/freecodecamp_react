import React from 'react'
import ReactDOM from 'react-dom'

const navBar = (
    <nav>
        <h1>Ian's Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

const page = (
    <div>
        <h1>My Awesome React Website</h1>
        <h3>Reasons why I love React</h3>
        <ol>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's a hireable skill</li>
            <li>It's actively maintained by skilled people</li>
        </ol>
    </div>
)

const funPage = (
    <div>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>It's maintaned by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

ReactDOM.render(
    navBar,
    document.getElementById("navBar")
)

ReactDOM.render(
    page,
    document.getElementById("root")
)

ReactDOM.render (
    funPage,
    document.getElementById("fun_page")
)
