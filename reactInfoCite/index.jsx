import React from 'react'
import ReactDOM from 'react-dom'

const reasonsToLearnReact = [
    "It's a popular and in-demand skill in the job market.",
    "It allows you to build interactive and dynamic web applications.",
    "It has a strong and supportive community for learning and problem-solving.",
    "It's backed by Facebook and used by many large companies.",
    "It's component-based, making it easier to manage and reuse code.",
  ];

const ReasonsList = ({reasons}) => (
    <ol>
        {reasons.map((reason, index) => (
            <li key={index}>
                {reason}
            </li>
        ))}
    </ol>
)

function Header() {
    return (
        <header>
                <nav>
                    <img class="react_img" src="./react.svg"></img>
                </nav>
        </header>
    )
}



function Page() {
    return (
        <>
            <Header />
            <div>
                
                <h1>Ian's Awesome React Website</h1>
                <h2>Reasons React is cool</h2>
                <ol>
                    <li>It's composable</li>
                    <li>It's declarative</li>
                    <li>It's a hireable skill</li>
                    <li>It's actively maintained by skilled people</li>
                </ol>
                <h2>Reasons I'm exited to write react code</h2>
                <ReasonsList reasons={reasonsToLearnReact}/>
            </div>
            <div>
                <h2>Fun facts about React</h2>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on Github</li>
                    <li>It's maintaned by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        </>
    )
}

function Footer() {
    return (
        <footer>
                <small>&copy; 2023 Kitembe developement. All rights reserved</small>
        </footer>
    )
}


ReactDOM.render (
    <Page/>,
    document.getElementById("fun_page")
)

ReactDOM.render (
    <Footer/>,
    document.getElementById("footer")
)

