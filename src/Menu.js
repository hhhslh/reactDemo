import React, {Component,Fragment} from 'react'

class Menu extends Component{
    constructor(props){
        super(props)
        this.state={
            inputValue:'',
            list:['锅包肉','溜肉段']
        }
    }
    render(){
        return(
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.addList.bind(this)}>加菜</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return <li key={index+item}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    inputChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    // 增加列表
    addList(){
        this.setState({
            // 扩展...
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
            // list:['东北菜','川菜',this.state.inputValue]
        })
    }


}

export default Menu