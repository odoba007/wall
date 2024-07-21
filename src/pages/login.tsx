import React from 'react'

type Login ={
  email: string;
  password: string;
};

function LoginPage() {

  const [Login, setLogin] = React.useState<Login>({
    email:"",
    password:""
  })

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLogin((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit (event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    
    if(Login.email == "YelenaB01" && Login.password == "YerryDuke$01"){
      
      window.location.href = "/dashboard"
    }else{
      
      document.getElementById("error-login")?.classList.remove("hide")
    }
    
  }

  return (
    <div>

<div id='error-login' className="notification is-danger hide">
  <p>Invalid Login Credential, Please try again!</p>
</div>

<div className="auth-container">
      <div className="auth-brand">
        <h1 style={{"fontFamily": "Audiowide;"}} >FreedoBank</h1>
      </div>
    
      <div className="auth-form-container">
        <div style={{"padding": "30px"}} className="heading">
          <h1 style={{"fontWeight": "bolder", "fontSize": "20px", "textAlign": "center"}}>
            Signin
          </h1>
        </div>
    
        <div className="already-have-account">
          <p style={{"color": "white"}}>Dont have a FreedoBank account?</p>
          <a style={{"textDecoration": "underline"}} href="">create an account</a>
        </div>
    
        <form onSubmit={handleSubmit} style={{"padding": "40px"}} action="" method="POST">
         
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
            <input onChange={handleInputChange} type="text" name='email' className="input is-medium" placeholder='Email'  required/>
            </div>
          </div>
    
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
                <input onChange={handleInputChange} type="password" name='password' className="input is-medium" placeholder='Password'  required/>
              
            </div>
          </div>
    
          <div className="field">
            <div className="control" style={{display:"flex"}}>
            <input type="checkbox" /> <span style={{marginLeft:5}}></span>
              <label className="checkbox">
                
                Remember Me
              </label>
            </div>
          </div>
          
          
    
          <div style={{"marginTop": "20px;"}} className="field is-grouped">
            <div style={{"width": "100%"}} className="control">
              <div className="gradient-button">
                <button type="submit" >Sign me in</button>
              </div>
            </div>
          </div>
         
        </form>
      </div>
    
      
    </div>
    </div>
  )
}

export default LoginPage