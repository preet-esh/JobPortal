import React from 'react';

const logOut=()=>{
      return(  
          <div>
              { localStorage.setItem("Login_Status",0) }
                  {localStorage.setItem("Login_Data","")}
                  {window.location.assign('/')}
          </div>
      )
}
export default logOut;
