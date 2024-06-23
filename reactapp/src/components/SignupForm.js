import"./SignupFormStyles.css"

function sighupForm(){
    return(
        <div className="form-container">
            <h1 className="signup">Sign up for Trippy!</h1>
            <p>Create a free account or <a href="/login">login</a></p>
            <form>
                <input placeholder="First Name"></input>
                <input placeholder="Last Name"></input>
                <input placeholder="Email"></input>
                <input type="tel" placeholder="Phone Number"></input>
                <input type="password" placeholder="Password"></input>
                <input type="password" placeholder="Confirm Password"></input>
                <button>Register</button>
            </form>
        </div>
    )
}

export default sighupForm;