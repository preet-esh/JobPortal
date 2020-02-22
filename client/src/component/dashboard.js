import React from 'react';

class dashboard extends React.Component{
        constructor(props){
            super();
        this.state={
            info:[]
        }
    }
    componentDidMount(){
        this.setState({info:JSON.parse(localStorage.getItem('Login_Data'))});
        console.log(this.state.info.id);
    }
    render(){
        return(
            <div>
                <h1>WELCOME USER</h1>
                <h2> {this.state.info.email}</h2>
                <h3><a href="/logOut">Logout</a></h3>
            </div> 
        )
    }
}
export default dashboard;