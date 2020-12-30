import React,{Component} from 'react'

const Child=(props)=>{
    return <button onClick={()=>props.passToChild('Poonam')}>Press It</button>
}
export default Child