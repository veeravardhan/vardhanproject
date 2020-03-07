import React from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";


class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value})
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const usname = {
          name : this.state.value
        }
        axios.post('http://localhost:3001/user/add',usname)
        .then((res) => {
        console.log(res)
        this.props.history.push("/User")
        })
        .catch(err => console.log(err))
      }

    render(){
    return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        </form>
        </div>
    )
    }
}

export default Form;