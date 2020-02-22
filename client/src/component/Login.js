import React, { Component } from 'react';
import './MyCss.css';

const axios = require('axios');

class Login extends Component {
  constructor(props){
    super();
    this.state={fields:{} }
    this.handleChange = this.handleChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }
  handleChange(e) {
    let fields = this.state.fields;
    //console.log(fields[e.target.name]);
    fields[e.target.name] = e.target.value;
    this.setState({fields});
  }
  submitLogin=(e)=>{
    e.preventDefault();
    const userData = this.state.fields;
    //console.log(this.state.fields);
    axios.post(`http://localhost:5000/login`,userData)
    .then((res) => {
      console.log(res);
      console.log(res.data.info);
      console.log(res.data.success);
      if(res.data.success===false){
        localStorage.setItem('Login_Status',0);
        localStorage.setItem('Login_Data',"");
        alert("Wrong Id/Password!!!!");
      }
      else if(res.data.success===true){
        console.log("success");
        localStorage.setItem('Login_Status',1);
        localStorage.setItem('Login_Data',JSON.stringify(res.data.info.results));
        //window.location.assign('/dashboard');
      }
      else{
        alert("error!!!")
      }
    })
    .catch((err)=> {console.log(err); alert("Error login") })
  }
    render() {
    return (
      <div className="login">
        <form className="px-4 py-3" encType="multipart/form-data" onSubmit= {this.submitLogin} >
          <div className="form-group">
           <label htmlFor="email">Email</label>
            <input type="email" className="form-control" name="email" placeholder="email@example.com" value={this.state.fields.email || ''} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
           <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.fields.password || ''} onChange={this.handleChange} autoComplete="off"/>
          </div>
            <button type="submit" className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect">Login</button>
            <p>Not a member?<a href="register">Register</a></p>
        </form>
        </div>
    );
  }
}

export default Login;
