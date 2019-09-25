import React, {Component,Fragment} from 'react'
import axios from 'axios'
import './menu.css'
import Menuitem from './Menuitem'
import Cartoon from './Cartoon'
import { CSSTransition,TransitionGroup } from 'react-transition-group'

class Menu extends Component{
    // 生命周期:在某一时刻可以自动执行的函数
    // 构造函数 ES6的基本语法 可以看成是React的Initialization阶段，定义属性（props）和状态(state)
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            list:[]
        }
    }
    // 加载完Dom之后执行
    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5d8b0f3a98fe8f6134b63cbe/ReactDemo01/menu')
        .then((res)=>{
            console.log('axios 获取数据成功'+JSON.stringify(res))
            this.setState({
                list:res.data.data
            })
        })
        .catch((error)=>{
            console.log('axios 获取信息失败：'+error)
        })
    }
    render(){
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
                    <TransitionGroup>
                        {
                            this.state.list.map((item,index)=>{
                                return (
                                    <CSSTransition
                                        timeout={2000}
                                        classNames='cartoon-text'
                                        unmountOnExit
                                        appear={true}
                                        key={index+item}
                                    >
                                    
                                        <Menuitem 
                                            key={index+item}
                                            content={item}
                                            index={index}
                                            // list={this.state.list}
                                            deleteItem={this.deleteItem.bind(this)}
                                        />
                                    </CSSTransition>

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
                    </TransitionGroup>
                </ul>
                <Cartoon/>
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


