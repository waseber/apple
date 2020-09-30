import React from 'react';
import {Link} from 'react-router-dom';


const SignInUp = ({InUp}) => {
    let formTypeText = 'Sign-In';
    if(InUp == 'up'){
        formTypeText = 'Sign-Up'
        return(
            <>   
                <div id="SignInUp" className="display-flex flex-col justify-center align-center">
                    <form className="background-white padding-10 drop-shadow display-flex flex-col align-center ">
                        <h2>{formTypeText}</h2>
                        <label for="frm-name" className="">
                            Full Name
                            <input type="text" id="frm-name"  placeholder="John Doe"/>
                        </label>
        
                        <label for="frm-email" className="">
                            Email
                            <input type="email" id="frm-email" placeholder="user@email.com" />
                        </label>
        
                        <label for="frm-password" className="">
                            Password
                            <input type="password" id="frm-password" placeholder="*****************" />
                        </label>
        
                        <button type="submit">{formTypeText}</button>
                    </form>
                    <p className="pull-left">Already Registered? <Link to="/sign-in">Sign-In</Link></p>
                </div>
                
                
            </>
            );
    } else {
        return(
            <>   
                <div id="SignInUp" className="display-flex flex-col justify-center align-center">                    
                    <form className="background-white padding-10 drop-shadow display-flex flex-col align-center">
                    <h2>{formTypeText}</h2>
                        <label for="frm-email" className="">
                            Email
                            <input type="email" id="frm-email" placeholder="user@email.com" />
                        </label>
        
                        <label for="frm-password" className="">
                            Password
                            <input type="password" id="frm-password" placeholder="*****************" />
                        </label>
        
                        <button type="submit">{formTypeText}</button>
                    </form>
                    <p className="pull-right">Not Registered? <Link to="/sign-up">Sign-Up</Link></p>
                </div>
                
            </>
            );
    }
    
}

export default SignInUp;

