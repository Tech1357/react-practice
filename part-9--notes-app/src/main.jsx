import './style.css'
import React from 'react'  // importing react library for using jsx syntax because jsx is not understood by the browser so we need to import react library to convert jsx into javascript.
import ReactDOM from 'react-dom/client' // connect react application to the browser
import App from "./App.jsx"

ReactDOM.createRoot(document.querySelector('#app')).render(<App />)
