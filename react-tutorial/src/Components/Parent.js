import React,{Component} from 'react'
import Child from './Child';

class Parent extends Component{
    constructor(){
        super()
        this.state={
            name:'Parent Component'
        }
        this.passToChild=this.passToChild.bind(this)
    }
    passToChild(args){
        alert(`Hello ${this.state.name} from ${args}`)
    }
    render(){
       return <Child passToChild={this.passToChild}/>
    }
}

export default Parent