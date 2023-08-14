import "./login.css"
const Login = () => {
    return ( 
      <>
      <body>
      <div class="container" id="container">
        <div class="form-container log-in-container">
          <form action="#">
            <h1>Login</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button><a href="/">Log In</a></button>
            
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <img src="" alt="image not available"></img>
            </div>
          </div>
        </div>
      </div>
    </body>
    </>
    
    
     );
}
 
export default Login;