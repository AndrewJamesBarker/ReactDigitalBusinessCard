import React from "react"
import ReactDOM from 'react-dom'
import Header from "./js-pages/header.js"
import Main from "./js-pages/main.js"
import Footer from "./js-pages/footer.js"

function App() {
    return(
        <div className="Container">
        <Header />
        <Main />
        <Footer />
        </div>
    )
}
export default App