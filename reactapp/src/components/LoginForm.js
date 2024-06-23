import"./SignupFormStyles.css"

function loginForm(){
    return(
        <div className="form-container">
            <h1 className="signup">Login</h1>
            <form>
                <input placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <button>Login</button>
            </form>
        </div>
    )
}

export default loginForm;