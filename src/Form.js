import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import form from 'react-bootstrap/Form'
import "./Form.css"


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
        <div class="form-class">
     <form>
  <form.Group controlId="formBasicEmail">
    <form.Label>Email address</form.Label>
    <form.Control type="email" placeholder="Enter email" />
    <form.Text className="text-muted">
      We'll never share your email with anyone else.
    </form.Text>
  </form.Group>

  <form.Group controlId="formBasicPassword">
    <form.Label>Password</form.Label>
    <form.Control type="password" placeholder="Password" />
  </form.Group>
  <form.Group controlId="formBasicCheckbox">
    <form.Check type="checkbox" label="Check me out" />
  </form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</form>
        </div>
    )
    }
}

export default Form;