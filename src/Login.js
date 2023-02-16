import React,{useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import "./Login.css"
import { auth } from './firebase'



function Login() {
    const history=useNavigate();
    const [email,setEmail] =useState("");
    const [password, setPassword] =useState(""); 

    const signin = e => {
        e.preventDefault();
        ////some firebase work

        auth.signInWithEmailAndPassword(email,password)
            .then((auth) =>{
                history("/");
            })
            .catch(err => alert(err.message)) 
    }
    
    const register = e =>{
        e.preventDefault();
        ///firebase work
        auth.createUserWithEmailAndPassword(email,password)
            .then((auth) =>{
                console.log(auth);
                if(auth){
                    history("/");

                }
            })
            .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
    <Link to="/">
    <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'  alt='pho'/>
     </Link>
     <div className='login_container'>
        <h1>Sign-in</h1>
        <form>
            <h5>Email</h5>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            <h5>Password</h5>
            <input type="password" value={password} onChange={e =>setPassword(e.target.value)} />
            <button type="submit" onClick={signin} className='login_signinButton'>Sign In</button>
        </form>
        <p>
            By signing-in you agree to the AMAZON FAKE CLONE conditions of use & sale.Please see our Privacy Notice,our Cookies Notice and our Interest-Based Ads notice. 
        </p>
        <button  onClick={register} className='login_registerButton'>Create your Amazon Account</button>
     </div>
    </div>
  )
}

export default Login