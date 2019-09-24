import React, {Component,Fragment} from 'react'
import './menu.css'
import Menuitem from './Menuitem'

class Menu extends Component{
    // 生命周期:在某一时刻可以自动执行的函数
    // 构造函数 ES6的基本语法 可以看成是React的Initialization阶段，定义属性（props）和状态(state)
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            list:['锅包肉','溜肉段']
        }
    }

    componentWillMount(){
        console.log('componentWillMount---组件将要挂载到页面的时刻')
    }
    componentDidMount(){
        console.log('componentDidMount---组件挂载完成的时刻')
    }
    // 优化性能
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate---组件更新之前')
        return true
        // false下面的内容不执行
        // return false
    }
    componentWillUpdate(){
        console.log('componentWillUpdate---shouldComponentUpdate之后执行')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate---组件更新之后')
    }
    // componentWillReceiveProps(){
    //     console.log('componentWillReceiveProps')
    // }
    render(){
        console.log('render---组件挂载中')
        return(
            // flex
            <Fragment>
                {/*jsx注释*/}
                <div>
                    <label htmlFor="add">加菜：</label>
                    <input 
                        id="add" 
                        className="inputBox" 
                        value={this.state.inputValue} 
                        onChange={this.inputChange.bind(this)}
                        ref={input=>{this.input=input}}
                    />
                    <button onClick={this.addList.bind(this)}>加菜</button>
                </div>
                <ul ref={ul=>{this.ul=ul}}>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <Menuitem 
                                    key={index+item}
                                    content={item}
                                    index={index}
                                    // list={this.state.list}
                                    deleteItem={this.deleteItem.bind(this)}
                                />

                                // {/*
                                //     <li 
                                //         key={index+item}
                                //         onClick={this.deleteItem.bind(this,index)}
                                //         dangerouslySetInnerHTML={{__html:item}}
                                //     >
                                //     </li>

                                // */}
                                
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    inputChange(){
        this.setState({
            // inputValue:e.target.value
            inputValue:this.input.value
        })
    }
    // 增加列表
    addList(){
        // 异步
        this.setState({
            // 扩展...
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
            // list:['锅包肉','溜肉段',this.state.inputValue]
        },()=>{
            console.log(this.ul.querySelectorAll("li").length)
        })
        
    }
    // 删除列表项
    deleteItem(index){
        // this.state.list.splice(index,1)性能优化障碍，React是禁止直接操作state的
        let list=this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
    }


}

export default Menu
