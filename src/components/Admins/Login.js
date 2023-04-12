import * as React from 'react';
import {Link} from "react-router-dom";

function Login({openLogin, setOpenLogin}) {

  return (
    <div className={`login-panel ${openLogin ? 'opened' : ''}`}>

      <button className="btn search-panel-close" type="button" onClick={() => setOpenLogin(false)}>
        <i className="icon icon-close"></i>
      </button>
      <div className="login">

        <div className="login-wrap">
          <form>
            <div className="login-title"><span>Login</span></div>
            <div className="login-element">
              <input type="text" placeholder="Enter your email"/>
            </div>
            <div className="login-element">
              <input type="password" placeholder="Enter your password"/>
            </div>
            <Link to={'admin'} className="btn btn-big btn-theme">
              <i className="icon icon-login-enter"></i>
              <span>Login</span>
            </Link>
          </form>
        </div>

      </div>

    </div>
  )
}

export default Login