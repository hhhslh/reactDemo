import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Menuitem extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }

    //组件第一次存在于DOM中，函数是不会被执行的
    //如果已经存在于DOM中，函数才会被执行
    // componentWillReceiveProps(){
    //     console.log('child---componentWillReceiveProps')
    // }
    // componentWillUnmount(){
    //     console.log('child---componentWillUnmount---组件删除时执行')
    // }

    // 优化性能
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
    }

    render() {
        console.log("child-render")
        return (
            <li onClick={this.handleClick}>
            {this.props.waiterName}为你上菜-{this.props.content}</li>
        );
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
        // this.props.list=[]不能改变
    }

}

// propTypes校验传递值
Menuitem.propTypes={
    // isRequired必须传递
    waiterName:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}
Menuitem.defaultProps={
    waiterName:"孙晓二"
}

export default Menuitem;


