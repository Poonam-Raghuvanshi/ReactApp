import React,{Component} from 'react';
//only one tag can be returned from render method
class Second extends Component{
    constructor(){
        super()
        this.state={
            message:'Hello Visitor'
        }
    }
    changeMessage(){
        /* use set state method to change the state if we use state directly React will not re render the
        Component
        */
        this.setState({
            message:'You Clicked Button'
        },()=>{console.log('updated')})
    }
   render(){
       //const {name,value}=this.props  destructring of props
       return <div><h1>{this.props.name}   {this.state.message} </h1>
          <button onClick={()=>{this.changeMessage()}}>Subscribe</button>
       </div>
   }
}
export default Second