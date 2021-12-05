import './AboutMe.css'
//returns the about me section which describes me a little bit more
function AboutMe() {
    return (
        <div className = "aboutMe">    
            <h2>me<span className = "purpleSpan">.</span><span className = "blueSpan">About</span><span className = "purpleSpan">()</span></h2>
            <p>
                I am currently a bootcamp student at HyperionDev nearing completion of their Fullstack Web Development and Software engineering course. I have been learning how to code
                since high school, which I graduated from in 2020. This was quite a challenging time, luckily I managed to adapt to my new circumstances and achieved
                matric results that I am proud of. I enjoyed my elective subjects, namely Mathematics, Physical science, Information Technology and EGD (Engineering Graphics and Design).
                I enjoyed them because they involved either problem solving or creativity, which I find engaging. I particularly enjoyed Information Technology, where 
                I learnt how to program in java and where we as a class were left to our own devices when it came to figuring out how to solve the problems we were given. I continued 
                learning and practicing my programming skills after I finished high school. In May 2021 I enrolled at HyperionDev to improve my skillset and gain a qualification.
                Now as I near the end of my bootcamp, I am looking to find employment so that I can start gaining experience.
                Some of my other general interests and hobbies include music, science and a couple of different sports. In high school I was fortunate enough to form a band with 
                some of my best friends. Some of my best memories involve the five of us inside a stuffy spare-bedroom jamming at an almost ear-ringing volume. Coordinating and 
                compromising between five relatively different and inexperienced musicians was no easy task though, but we made do and composed some orignal songs and played a dozen 
                or so gigs. 
            </p>
            <div className = "gradientBar2"></div>
        </div>
    );
  }
  
  export default AboutMe;