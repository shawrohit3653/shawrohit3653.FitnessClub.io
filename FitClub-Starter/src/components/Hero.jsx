import React from "react";
import Header from "./Header";
import './Hero.css';
import hero_image from ".././assets/hero_image.png";
import hero_image_back from ".././assets/hero_image_back.png";
import Heart from ".././assets/heart.png";
import Calories from ".././assets/calories.png"
import {motion} from 'framer-motion'
const Hero =() =>{
    const transition={type: 'spring', duration : 5}
    return(
        <div className="hero">
            <div className="left-h">
                <Header/>
{/*the best ad*/}
                <div className="the-best-ad">
                    <motion.div
                     initial= {{ left:'110px'}}
                     whileInView={{left:'4px'}}
                     transition={{...transition, type:'tween'}}
                    > </motion.div>
                    <span>Find Gym Near You</span>
                </div>
{/* Hero heading */}
                <div className="hero-text">
                <div>
                    <span className="stroke-text">Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div>
                    <span>
                    In here we will help you to shape and build your ideal body and live up your life to fullest 
                    </span>
                </div>
                </div>
                {/*figure*/}
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>member joined</span>
                        </div>
                    <div>
                        <span>+50</span>
                        <span>fitness programs</span>
                    </div>   
                </div>
                {/* <hero buttons } */}
                <div className="hero-buttons">
                    <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Learn More</buttons>
                </div>
                
            </div>
            <div className="right-h">
                <button className="btn"><a href="http://localhost/Gym%20site/index.php" >Join Now</a></button>
                <motion.div
                initial={{right: "-1rem"}} 
                    whileInView={{right:"4rem"}}
                    transition={transition}
                 className="heart-rate">
                    <img src={Heart} alt=""/>
                    <span>Heart Rate</span>
                    <span>116bpm</span>
                    </motion.div>
            
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img 
                initial={{right: "11rem"}} 
                whileInView={{right:"20rem"}}
                transition={transition}
                src={hero_image_back} alt="" className="hero-image-back" />
                {/* {Calories} */}
                <motion.div
                initial={{right: "37rem"}} 
                whileInView={{right:"28rem"}}
                transition={transition}
                 className="calories">
                    <img src={Calories} alt="" />
                    <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
export default Hero