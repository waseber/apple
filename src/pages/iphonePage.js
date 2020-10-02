import React, {useState} from 'react';
import NavBar from '../components/NavBar';
import IconNav from '../components/IconNav';
import logo from '../apple_logo.svg';


const IphonePage = () => {
    const [color, setColor] = useState("black");
    const GetSliderVal = () =>{
        const slider = document.getElementById('thumb-slider');
        //console.log(slider.value)
    }
    return(
        <div className="page display-flex flex-col justify-center align-center">
            <NavBar landing="false"/>
            <div className="main-container display-flex">
                <main id="iphone-page-content" className="page-content-left-margin ">
                    <section id="iphone-blurb" className="background-gradient-grey w-50">
                    <img src={logo} height="200" width="200" className="abs-centered"  />
                    <h1 className="red">iPhone</h1>
                    <h2>The ultimate<br/>iPhone</h2>
                    <p>The future is here. Join the iPhone Upgrade<br/>Program to get the latest iPhone - NOW!</p>
                    </section>
                    <div className="pl-10" style={{gridArea: 'buy', paddingTop: '5vh'}}>
                        <h4 className="muted">From $699</h4>
                        <a href="#" className="buy-now-red">Buy Now ></a>
                    </div>
                    <div className="display-flex flex-col align-center" style={{gridArea: 'thumbs', paddingTop: '5vh'}}>
                        <div>
                            <img id="iphone-thumb-front" className="iphone-thumbs" src={process.env.PUBLIC_URL + '/Images/apple-iphonexs-max-gold.png'} />
                            <img id="iphone-thumb-back" className="iphone-thumbs" src={process.env.PUBLIC_URL + '/Images/apple-iphonexs-max-gold-back-3.png'} />
                        </div>
                            
                        <input 
                            type="range"
                            id="thumb-slider"
                            min="0" 
                            max="100"
                            defaultValue="0"
                            onInput={()=>GetSliderVal()}
                        />
                    </div>

                   

                </main>
                <IconNav position="right"/>
            </div>
        </div>
);}

export default IphonePage;