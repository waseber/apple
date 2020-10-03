import React, {useState} from 'react';
import NavBar from '../components/NavBar';
import IconNav from '../components/IconNav';
import logoGrey from '../apple-grey.svg';


const IphonePage = () => {
    const [sliderVal, setSliderVal] = useState(0);
    const GetSliderVal = () =>{
        const slider = document.getElementById('thumb-slider');
        setSliderVal(slider.value);
        //console.log(slider.value)
        FadeThumbs();
        SlideImages();
    }
    const FadeThumbs = () =>{
        const front = document.getElementById('iphone-thumb-front');
        const back = document.getElementById('iphone-thumb-back');
        back.style.opacity = sliderVal/100 + 0.5;
        front.style.opacity = 1 - (sliderVal/100);
   }
   const SlideImages = () => {
        const front = document.getElementById('iphone-front');
        const back = document.getElementById('iphone-back');
        back.style.opacity = sliderVal/100 *2;
        back.style.marginLeft = 100 - (sliderVal *2) + "%";
        front.style.opacity = 1 - (sliderVal/100 *2);
        front.style.marginLeft = sliderVal *2 + "%";
   }
    return(
        <div className="page slide-up ">
            <NavBar landing="false"/>
            <div className="main-container display-flex">
                <main id="iphone-page-content" className="page-content-left-margin ">
                    <section id="iphone-blurb" className="background-gradient-grey">
                    <img src={logoGrey} height="200" width="200" className="abs-centered"  />
                    <h1 className="red">iPhone</h1>
                    <h2>The ultimate<br/>iPhone</h2>
                    <p>The future is here. Join the iPhone Upgrade<br/>Program to get the latest iPhone - NOW!</p>
                    </section>
                    <div className="pl-10" style={{gridArea: 'buy', paddingTop: '5vh'}}>
                        <h3 className="muted">From $699</h3>
                        <a href="#" className="buy-now-red">Buy Now ></a>
                    </div>

                    <div className="thumbs-container display-flex flex-col align-center">
                        <div>
                            <img id="iphone-thumb-front" className="iphone-thumbs" src={process.env.PUBLIC_URL + '/Images/apple-iphonexs-max-gold.png'} />
                            <img id="iphone-thumb-back" className="iphone-thumbs" src={process.env.PUBLIC_URL + '/Images/apple-iphonexs-max-gold-back-3.png'} style={{opacity: "0.5"}}/>
                        </div>
                            
                        <input 
                            type="range"
                            id="thumb-slider"
                            min="0" 
                            max="50"
                            defaultValue="0"
                            onInput={()=>GetSliderVal()}
                        />
                    </div>
                    <div className="image-container--iphone display-flex" >
                        <img id="iphone-front" className="abs-centered iphone-images" src={process.env.PUBLIC_URL + '/Images/apple-iphonexs-max-gold@2x.png'} />
                        <img id="iphone-back" className="abs-centered iphone-images" src={process.env.PUBLIC_URL + '/Images/apple-iphonexs-max-gold-back-3@2x.png'} style={{opacity: "0",marginLeft: "100%" }}/>
                    </div>

                   

                </main>
                <IconNav position="right"/>
            </div>
        </div>
);}

export default IphonePage;