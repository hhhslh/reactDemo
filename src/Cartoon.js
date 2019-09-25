import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'

// transition
// CSSTransition
// TransitionGroup

class Cartoon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow:true
        }
        this.toToggle=this.toToggle.bind(this)
    }
    render() { 
        return ( 
            <div>
            <CSSTransition
                in={this.state.isShow}
                timeout={2000}
                classNames="cartoon-text"
                // 删除DOM元素
                unmountOnExit 
            >
                <div>React动画</div>
            </CSSTransition>
                {/*<div className={this.state.isShow?'show':'hide'}>React动画</div>*/}
                <div><button onClick={this.toToggle}>召唤动画</button></div>
            </div>
         );
    }

    toToggle(){
        this.setState({
            isShow:this.state.isShow?false:true
        })
    }
}
 
export default Cartoon;