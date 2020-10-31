import React, { Component } from 'react'

class AddTodo extends Component {
    state =  {
        content : '',
    }
    handleChange = (e)=>{
        e.preventDefault();
        this.setState({
            content : e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.AddTodo(this.state)
        // console.log('state',this.state)
        this.setState({
            content:''
        })
    }
    render(){
        
        return(
            <div className="Addtodo-item">
                <form onSubmit={this.handleSubmit} >
                    <label >Add new todo:</label>
                    <input type="text" onChange={this.handleChange}  value={this.state.content }/>
                </form>
            </div>
        )
    }
}
    

export default AddTodo
