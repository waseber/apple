import React, {useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import IconNav from '../components/IconNav';
import logoGrey from '../apple-grey.svg';

const CreateImage = (color) => {
    //<img id="white-watch" className="watch-image" src={process.env.PUBLIC_URL + '/Images/White Watch-2.png'} />
    const parent = document.getElementsByClassName('image-container')[0];
    let src = '/Images/Black Watch-1.png';
    let id = 'black-watch';
    if(color == "white"){
        src = '/Images/White Watch-2.png';
        id = 'white-watch';
    }
    const img = document.createElement('img');
        img.setAttribute('id', id);
        img.setAttribute('src', src);
        img.classList.add('watch-image');
        img.classList.add('fade-in');

    parent.appendChild(img);
}

const RemoveImage = (color) => {
    //remove the previous image so we don't have too many images in the DOM
    const parent = document.getElementsByClassName('image-container')[0];
    let id = 'black-watch';
    if(color == "white"){
        id = 'white-watch';
    }
    parent.removeChild(document.getElementById(id));
}

const WatchPage = () => {
    const [color, setColor] = useState("black");
    /*useEffect(() =>{
        if(color=="white"){
            
            CreateImage("white");
            RemoveImage("black");
        } else {
            
            CreateImage("black");
            RemoveImage("white");
        }
      })*/
      const changeColor = (color) =>{
        if(color=="white"){
            
            CreateImage("white");
            RemoveImage("black");
        } else {
            
            CreateImage("black");
            RemoveImage("white");
        }
      }
    return(
    <div className="page fade-in ani-medium">
        <NavBar landing="false"/>
        <div className="main-container display-flex">
            <main id="watch-page-content" className="page-content-left-margin display-flex">
                <section className="w-50">
                    <div id="watch-blurb" className="background-gradient-grey slide-in-from-left ani-slow" style={{position: 'relative'}}>
                        <img src={logoGrey} height="200" width="200" style={{position: 'absolute', right: '0'}} />
                        <h1 className="red">Apple Watch</h1>
                        <h2>Change starts within.</h2>
                        <p>Apple Watch Series 4. Fundamentally redesigned and re‑engineered to help you be even more active, healthy, and connected.</p>
                    </div>
                    <div className="slide-up-from-bottom ani-slow">
                        <h3 className="muted">From $699</h3>
                        <a href="#" className="buy-now-red">Buy Now ></a>
                    </div>
                </section>
                <section className="w-50" >
                    <div className="image-container slide-in-from-left-more ani-slow">
                        <img id="black-watch" className=" watch-image slide-in-from-left" src={process.env.PUBLIC_URL + '/Images/Black Watch-1.png'} />
                        
                    </div>
                    
                    <form className="display-flex justify-center slide-up-from-bottom ani-slow">
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
                            <input type="radio" name="radio-button" value="black" defaultChecked/>
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