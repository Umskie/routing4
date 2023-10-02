import { Link } from "react-router-dom"


const Body =()=>{
    return(
    
    <div>
      <h1>Login</h1>
        <form>
            Username<input type="text" name="UserName" id="usernam1" />
            Password<input type="password" name="Password" id="password1" />
            <button type="submit">Login</button>

        </form>

    
      <p>
        <Link to='/CreateAccount/'>Create Account</Link>
      </p>
      <p>
        <Link to="/ForgotPwd/">Forgot Password</Link>
      </p>
    </div>
    )
}
export default Body