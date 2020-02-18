import React from 'react';

class dashboard extends React.Component{
    render(){
        return(
            <div>
            <h1>WELCOME USER</h1>
           <h2> {localStorage.getItem('PsName') } </h2>
           <h3><a href="/">Logout</a></h3>
          
            </div> 
        )
    }
}
export default dashboard;