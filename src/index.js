/**
 * Created by jerry on 01/04/2017.
 */
import React from "react";
import ReactDom from "react-dom";

// Create a new component, This component should produce some html elements.
const App = function() {
    return <div>Hello World!</div>;
}


// Take this produced html to put it on page.
ReactDom.render(<App/>, document.querySelector('.container'));