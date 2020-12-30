import React,{Component} from 'react'

class EventBind extends Component{
   constructor(){
       super()
       this.state={
           message:'Initial'
       }
       this.clickMe=this.clickMe.bind(this)
   }
   clickMe(){
    this.setState({
        message:'New Value'
    })
   }
   render(){
       return <div>
         {/* <button onClick={this.clickMe.bind(this)}>Click Me</button>
           <button onClick={()=>this.clickMe()}>Click Me</button>*/}
            <button onClick={this.clickMe}>Click Me</button>
           <h1>{this.state.message}</h1>
       </div>
   }
}

export default EventBind