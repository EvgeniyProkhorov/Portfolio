import React from "react";
import css from './Main.module.scss';
import {motion} from 'framer-motion';
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {duration: custom}
    })
}
const photoAnimation = {
    hidden: {
        x: 100,
        // scale: 0,
        opacity: 0,
    },
    visible: custom => ({
        // scale: 1,
        x: 0,
        opacity: 1,
        transition: {duration: custom}
    })
}


const Main = () => {
    const particlesInit = async (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div className={css.mainBlock}>
            <Particles id="tsparticles"
                       init={particlesInit}
                       loaded={particlesLoaded}
                       options={{
                           style: {
                               // position: "absolute",
                               // width: "100%",
                               // height: "2160px",
                               // opacity: 0.3,
                           },
                           fpsLimit: 60,
                           particles: {
                               number: {
                                   value: 600,
                                   density: {
                                       enable: true,
                                       area: 800
                                   }
                               },
                               color: {
                                   value: ["#987750", "#fff"]
                               },
                               shape: {
                                   type: "circle"
                               },
                               opacity: {
                                   value: 0.8
                               },
                               size: {
                                   value: 6,
                                   random: {
                                       enable: true,
                                       minimumValue: 4
                                   }
                               },
                               move: {
                                   size: true,
                                   enable: true,
                                   speed: 0.15,
                                   direction: "none",
                                   random: false,
                                   straight: false,
                                   outModes: {
                                       default: "out"
                                   },
                                   attract: {
                                       enable: false,
                                       rotateX: 600,
                                       rotateY: 1200
                                   },
                                   trail: {
                                       enable: true,
                                       length: 25,
                                       // fillColor: "#1d1b19"
                                   },
                                   warp: true
                               }
                           },
                           interactivity: {
                               detectsOn: "canvas",
                               events: {
                                   onclick: {
                                       enable: true,
                                       mode: "push"
                                   },
                                   resize: true
                               },
                               modes: {
                                   push: {
                                       quantity: 5
                                   }
                               }
                           },
                           detectRetina: true,
                           absorbers: {
                               orbits: true,
                               destroy: true,
                               opacity: 1,
                               color: "#000",
                               size: {
                                   value: 0,
                                   limit: 10,
                                   random: false,
                                   density: 50
                               },
                               position: {
                                   x: 1,
                                   y: 1
                               }
                           },
                           background: {
                               color: "#181715"
                           }
                       }}
            />
            <div className={css.container}>
                <motion.div className={css.text}
                            initial='hidden'
                            whileInView='visible'
                            custom={0.9}
                            variants={textAnimation}
                            viewport={{amount: 0.1, once: true}}>
                    <span>Hi There</span>
                    <h1>I am Evgeniy Prokhorov</h1>
                    <p>Frontend Developer</p>
                </motion.div>
                <motion.div className={css.photo}
                            initial='hidden'
                            whileInView='visible'
                            custom={1.3}
                            variants={photoAnimation}
                            viewport={{amount: 0.1, once: true}}
                ></motion.div>
            </div>
        </div>
    )
}

export default Main;