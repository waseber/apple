import React, {useState, useEffect} from 'react';
import {Link, Redirect } from 'react-router-dom';


const SignInUp = ({InUp}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");

    const SlideRight = ()=>{
        const section = document.getElementsByTagName('section')[0];
        section.classList.add('slide-in-right');
        section.classList.remove('slide-in-right');
    
    }

    const signUpSubmit = (event) => {
        event.preventDefault();
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);
        SlideRight();
        console.log('hi')
        window.location.href = '/sign-in';
    }
    
    const signInSubmit = (event) => {
        //alert('Sign In');
        event.preventDefault();
        if((sessionStorage.getItem("email") == email) && (sessionStorage.getItem("password") == password)){
            sessionStorage.setItem("isAuth", true);
            window.location.href = '/';
        } else {
            //Auth error
            alert('Username or password error');
        }
    }

    let formTypeText = 'Sign-In';
    if(InUp == 'up'){
        formTypeText = 'Sign-Up'
        return(
            <section className="slide-in-left page background-gradient display-flex flex-col justify-center align-center">   
                <div id="SignInUp" className="display-flex flex-col justify-center align-center">
                    <form 
                        className="background-white p-10 drop-shadow display-flex flex-col align-center "
                        onSubmit={signUpSubmit} >
                        <h2>{formTypeText}</h2>
                        <label for="frm-name" className="">
                            Full Name
                            <input 
                                type="text" 
                                id="frm-name"  
                                placeholder="John Doe"
                                value={name}
                                onChange={e => setName(e.target.value)}/>
                        </label>
        
                        <label for="frm-email" className="">
                            Email
                            <input 
                                type="email" 
                                id="frm-email" 
                                placeholder="user@email.com" 
                                value={email}
                                onChange={e => setEmail(e.target.value)} />
                        </label>
        
                        <label for="frm-password" className="">
                            Password
                            <input 
                                type="password" 
                                id="frm-password" 
                                placeholder="*****************" 
                                value={password}
                                onChange={e => setPass(e.target.value)}/>
                        </label>
        
                        <button type="submit">{formTypeText}</button>
                    </form>
                    <p className="pull-left">Already Registered? <Link to="/sign-in">Sign-In</Link></p>
                </div>
                
                
            </section>
            );
    } else {
        return(
            <section className="page background-gradient display-flex flex-col justify-center align-center">   
                <div id="SignInUp" className="display-flex flex-col justify-center align-center">                    
                    <form 
                        className="background-white p-10 drop-shadow display-flex flex-col align-center"
                        onSubmit={signInSubmit}>
                    <h2>{formTypeText}</h2>
                        <label for="frm-email" className="">
                            Email
                            <input 
                                type="email" 
                                id="frm-email" 
                                placeholder="user@email.com" 
                                value={email}
                                onChange={e => setEmail(e.target.value)} />
                        </label>
        
                        <label for="frm-password" className="">
                            Password
                            <input 
                                type="password" 
                                id="frm-password" 
                                placeholder="*****************" 
                                value={password}
                                onChange={e => setPass(e.target.value)} />
                        </label>
        
                        <button type="submit">{formTypeText}</button>
                    </form>
                    <p className="pull-right">Not Registered? <Link to="/sign-up">Sign-Up</Link></p>
                </div>
                
            </section>
            );
    }
    
}

export default SignInUp;

