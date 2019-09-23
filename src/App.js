import React, { Component } from 'react'
// import React from 'react'
// const Component = React.Component

class App extends Component {
    render() {
        return ( 
            // JSX
            <ul className="myList">
                <li>{false?'React':'REACT'}</li>
                <li>slh</li>
            </ul>
        )
        // var child1 = React.createElement('li',null,'React')
        // var child2 = React.createElement('li',null,'slh')
        // var root = React.createElement('ul',{className:'myList'},child2,child1)
    }
}

export default App