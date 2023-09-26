
// JS imperative
const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
console.log(h1)

//<h1 class="header">

const element = <h1 className="header1">This is JSX</h1>
console.log(element)
document.getElementById("header").append(h1)




// JSX declarative way
ReactDOM.render(
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>,
    document.getElementById("root")
  );  
ReactDOM.render(
    element,
    document.getElementById("header1")
  );  

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

ReactDOM.render(
    navBar,
    document.getElementById("navBar")

)
