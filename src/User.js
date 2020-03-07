import React from 'react';
import axios from 'axios';

class User  extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                uservalue : []
            }
            this.getusername = this.getusername.bind(this)
        }
        getusername(){
            axios.get('http://localhost:3001/user')
                .then( (res) => {
                        this.setState({
                            uservalue : res.data
                        })
                })
        }
     componentDidMount(){
          this.getusername()
        }
        render(){
            console.log(this.state.uservalue)
            return(
                <div>
                    {this.state.uservalue.map(home => <div>{home.name}</div>)}
                </div>
            )
        }

}

export default User;