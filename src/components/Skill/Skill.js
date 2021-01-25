import React from "react";
import './Skill.css';
import ProgressBar from "../ProgressBar/ProgressBar";
import photoShaoxing from '../../image/shaoxing.jpg';
import { motion } from "framer-motion";

const pageVariants = {
    pageInitial: {
        opacity: 0,
        x: '-100%'
    },
    pageAnimate: {
        opacity: 1,
        x: 0
    },
    pageOut: {
        opacity: 0,
        x: '100%'
    }
}

const hoverPhoto = {
    rest: { opacity: 1 },
    hover: {
        opacity: 0,
        transition: {
            duration: .4,
            type: 'tween',
            ease: 'easeIn'
        }
    }
}

const hoverContent = {
    rest: { opacity: 0 },
    hover: {
        opacity: 1,
        transition: {
            duration: .4,
            type: 'tween',
            ease: 'easeInOut'
        }
    }
}

const hoverTopBorder = {
    rest: {
        width: 0,
        position: 'absolute',
        transition: {
            duration: .3,
        }
    },
    hover: {
        width: '100%',
        position: 'absolute',
        transition: {
            duration: .3,
        }
    }
}

const hoverRightBorder = {
    rest: {
        height: 0,
        position: 'absolute',
        transition: {
            duration: .3,
        }
    },
    hover: {
        height: '100%',
        position: 'absolute',
        transition: {
            duration: .3,
            delay: .3
        }
    }
}

const hoverBottomBorder = {
    rest: {
        width: 0,
        position: 'absolute',
        transition: {
            duration: .3,
        }
    },
    hover: {
        width: '100%',
        position: 'absolute',
        transition: {
            duration: .3,
            delay: .6
        }
    }
}


const hoverLeftBorder = {
    rest: {
        height: 0,
        position: 'absolute',
        transition: {
            duration: .3,
        }
    },
    hover: {
        height: '100%',
        position: 'absolute',
        transition: {
            duration: 1,
            delay: .9
        }
    }
}

export default class Skill extends React.Component {

    render() {
        return (
            <motion.div
                className='skill_page'
                initial='pageInitial'
                animate='pageAnimate'
                exit='pageOut'
                variants={pageVariants}
                transition={{ duration: .6, type: 'tween', ease: 'anticipate' }}
            >
                <section className='skill_panel'>
                    <motion.div className='skill_photo_container' initial='rest' whileHover='hover' animate='rest'>
                        <div className='borders'>
                            <motion.span
                                className='top'
                                variants={hoverTopBorder}></motion.span>
                            <motion.span
                                className='right'
                                variants={hoverRightBorder}></motion.span>
                            <motion.span
                                className='bottom'
                                variants={hoverBottomBorder}></motion.span>
                            <motion.span
                                className='left'
                                variants={hoverLeftBorder}></motion.span>
                        </div>

                        <motion.img
                            className='photo_front'
                            src={photoShaoxing}
                            alt=''
                            width='100%'
                            variants={hoverPhoto}
                        ></motion.img>
                        <motion.div className='photo_back' variants={hoverContent}>
                            <h5 className='photo_back_begin'>Studying</h5>
                            <h1 className='photo_back_middle'>NEVER</h1>
                            <h5 className='photo_back_end'>Stop</h5>
                        </motion.div>


                    </motion.div>
                    <div className='skill_content'>
                        <h2 className='skill_title'>My capacity</h2>
                        <p className='skill_description'>hhhhhhhhhhhh</p>
                        <ProgressBar percentage={60} title='WEB DESIGN'></ProgressBar>
                        <ProgressBar percentage={75} title='Angular'></ProgressBar>
                        <ProgressBar percentage={60} title='React'></ProgressBar>
                    </div>
                </section>
            </motion.div>
        );
    }
}