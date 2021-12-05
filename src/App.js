import Header from './Components/Header.js';
import Hello from './Components/Hello.js';
import AboutMe from './Components/AboutMe.js';
import Why from './Components/Why';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hello/>
     <AboutMe/>
     <Why/>
     <div className = "gradientCircle1"></div>
     <div className = "gradientCircle2"></div>
     <div className = "gradientCircle3"></div>
    </div>
  );
}

export default App;
