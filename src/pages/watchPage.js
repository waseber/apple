import React, {useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import IconNav from '../components/IconNav';
import logo from '../apple_logo.svg';

const WatchPage = () => {
    const [color, setColor] = useState("black")
    useEffect(() =>{
        //alert(`checked: ${color.toString()}`)
        let whiteWatch = document.getElementById('white-watch');
        let blackWatch = document.getElementById('black-watch');
        if(color=="white"){
            whiteWatch.classList.remove('fade-out');
            blackWatch.classList.remove('fade-in');
            whiteWatch.classList.add('fade-in');
            blackWatch.classList.add('fade-out');
        } else {
            whiteWatch.classList.remove('fade-in');
            blackWatch.classList.remove('fade-out');
            whiteWatch.classList.add('fade-out');
            blackWatch.classList.add('fade-in');
        }
      })
      const changeColor = (color) =>{
        setColor(color)
      }
    return(
    <div className="page display-flex flex-col justify-center align-center">
        <NavBar landing="false"/>
        <div className="main-container display-flex">
            <main id="watch-page-content" className="page-content-left-margin display-flex">
                <section className="w-50">
                    <div id="watch-blurb" className="background-gradient-grey">
                        <img src={logo} height="200" width="200" className="abs-centered"  />
                        <h1 className="red">Apple Watch</h1>
                        <h2>Change starts within.</h2>
                        <p>Apple Watch Series 4. Fundamentally redesigned and re‑engineered to help you be even more active, healthy, and connected.</p>
                    </div>
                    <div>
                        <h4 className="muted">From $699</h4>
                        <a href="#" className="buy-now-red">Buy Now ></a>
                    </div>
                </section>
                <section className="w-50" >
                    <div className="image-container">
                        <img id="white-watch" className="watch-image" src={process.env.PUBLIC_URL + '/Images/White Watch-2.png'} />
                        <img id="black-watch" className="watch-image" src={process.env.PUBLIC_URL + '/Images/Black Watch-1.png'} />
                    </div>
                    
                    <form className="display-flex justify-center">
                        <label className="display-flex flex-col align-center" >
                            <input type="radio" name="radio-button" value="white"  />
                            <span 
                                className="circle" 
                                style={{background: 'white'}}
                                onClick={() => changeColor('white')}
                                ></span>
                            <span className="mt-10p">White</span>
                        </label>
                        <label className="display-flex flex-col align-center" >
                            <input type="radio" name="radio-button" value="black" checked/>
                            <span className="circle" onClick={() => changeColor('black')}></span>
                            <span className="mt-10p">Black</span>
                        </label>
                        
                    </form>
                </section>

            </main>
            <IconNav position="right"/>
        </div>
    </div>
);}

export default WatchPage;