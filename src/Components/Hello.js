import squareProfile from './images/self-portrait1.jpg';
import './Hello.css'

//returns the hello component which containts a headshot of me and a hello message
function Hello() {
    return (
      <div className = "hello">
            <div className = "imageContainer">
                <img src = {squareProfile} alt = "headshot"/>
            </div>
            <div className = "introContainer">
                <div className = "introItems" >
                  <h1 className = "introItems">Hi, I'm Matthew</h1>
                  <p className = "introItems" id = "headParagraph">An Aspiring Software Engineer</p>
                  <div className = "gradientBar1"></div>
                </div>
                
          </div>
      </div>
    );
  }
  
  export default Hello;