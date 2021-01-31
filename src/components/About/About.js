import React from "react";
import './About.css';
import photoTraveller from '../../image/traveller.png';
import photoDeveloper from '../../image/developer.png';
import photoStudent from "../../image/student.png";
import { motion } from "framer-motion";
import {
    pageVariants, hoverAboutPhoto, hoverAboutContent
} from "../../variants";

export default class About extends React.Component {

    render() {
        return (
            <motion.div
                className='about_page'
                initial='pageInitial'
                animate='pageAnimate'
                exit='pageOut'
                variants={pageVariants}
                transition={{ duration: .6, type: 'tween', ease: 'anticipate' }}
            >
                <h1 className='about_texts_title'>About Me</h1>
                <section className='about_panel'>
                    <div className='about_texts'>
                        <div className='descriptions_container'>
                            <p className='descriptions'>
                                Hello! My name is Xianhua ZHOU, a university student in UTC (University of Technology of Compiègne). I'm interested in web development, guitar and fitness.
                                </p>
                        </div>
                        <div className='info_list'>
                            <section className='info_item_column'>
                                <div className='info_item'>
                                    <h3 className='info_item_title'>First Name:</h3>
                                    <p className='info_item_content'>Xianhua</p>
                                </div>
                                <div className='info_item'>
                                    <h3 className='info_item_title'>Last Name:</h3>
                                    <p className='info_item_content'>ZHOU</p>
                                </div>
                            </section>
                            <section className='info_item_column'>
                                <div className='info_item'>
                                    <h3 className='info_item_title'>Age:</h3>
                                    <p className='info_item_content'>24</p>
                                </div>
                                <div className='info_item'>
                                    <h3 className='info_item_title'>Residence:</h3>
                                    <p className='info_item_content'>France</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
                <motion.span
                    className='separator'
                    initial={{ width: 0 }}
                    animate={{ width: '80%' }}
                    transition={{ duration: .3, delay: .4 }}
                ></motion.span>
                <section className='about_panel'>
                    <h2 className='about_photo_title'>Who I Am</h2>
                    <div className='about_photos'>
                        <section className='about_photo_content'>
                            <motion.div className='photo_container' initial='rest' whileHover='hover' animate='rest'>
                                <motion.img
                                    className='blur_photo'
                                    src={photoDeveloper}
                                    alt=''
                                    width='100%'
                                    height='300px'
                                    variants={hoverAboutPhoto}
                                ></motion.img>
                                <motion.div className='blur_photo_back' variants={hoverAboutContent}>
                                    <h5 className='blur_photo_back_title'>Developer</h5>
                                    of Full-Stack
                                </motion.div>
                            </motion.div>
                            <motion.div className='photo_container' initial='rest' whileHover='hover' animate='rest'>
                                <motion.img
                                    className='blur_photo'
                                    src={photoStudent}
                                    alt=''
                                    width='100%'
                                    height='300px'
                                    variants={hoverAboutPhoto}
                                ></motion.img>
                                <motion.div className='blur_photo_back' variants={hoverAboutContent}>
                                    <h5 className='blur_photo_back_title'>Student</h5>
                                    in UTC
                                </motion.div>
                            </motion.div>
                            <motion.div className='photo_container' initial='rest' whileHover='hover' animate='rest'>
                                <motion.img
                                    className='blur_photo'
                                    src={photoTraveller}
                                    alt=''
                                    width='100%'
                                    height='300px'
                                    variants={hoverAboutPhoto}
                                ></motion.img>
                                <motion.div className='blur_photo_back' variants={hoverAboutContent}>
                                    <h5 className='blur_photo_back_title'>Traveller</h5>
                                    follow heart
                                </motion.div>
                            </motion.div>
                        </section>
                    </div>
                </section>
            </motion.div>
        );
    }
}