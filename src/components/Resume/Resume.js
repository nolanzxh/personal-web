import React from "react";
import './Resume.css'
import '../../icon/iconfont.css';
import photoUtc from "../../image/utc.jpg";
import photoCfm from "../../image/cfm.png";
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

const photoHoverVariants = {
    position: 'relative',
    zIndex: 1,
    scale: 1.3,
    transition: {
        duration: .3,
    }
}

class Resume extends React.Component {
    render() {
        return (
            <motion.div
                className='resume_page'
                initial='pageInitial'
                animate='pageAnimate'
                exit='pageOut'
                variants={pageVariants}
                transition={{ duration: .6, type: 'tween', ease: 'anticipate' }}
            >
                <section className='info_panel'>
                    <div className='education_photo' >
                        <motion.img
                            whileHover={photoHoverVariants}
                            src={photoUtc}
                            alt=''
                            width="100%"></motion.img>
                    </div>
                    <div className='education_description'>
                        <h3 className='resume_panel_title'>
                            <span className='iconfont panel_title_icon'>&#xe645;</span>
                        Education
                        </h3>
                        <div className='timeline'>
                            <article className='timeline_item'>
                                <h5 className='timeline_title'>Université de Technologie de Compiègne</h5>
                                <span className='timeline_period'>2007 - 2009</span>
                                <p className='timelin_description'>
                                    faknfjaknfkajfnljfnw'lenwevesg,dsf.
                            </p>
                            </article>
                            <article className='timeline_item' style={{ borderStyle: 'hidden' }}>
                                <h5 className='timeline_title'>Université de Shanghai</h5>
                                <span className='timeline_period'>2007 - 2009</span>
                                <p className='timeline_description'>
                                    faknfjaknfkajfnljfnw'lenwevesg,dsf.
                            </p>
                            </article>
                        </div>
                    </div>
                </section>

                <section className='info_panel'>
                    <div className='experience_description'>
                        <h3 className='resume_panel_title'>
                            <span className='iconfont panel_title_icon'>&#xe627;</span>
                        Experience
                        </h3>
                        <div className='timeline'>
                            <article className='timeline_item'>
                                <h5 className='timeline_title'>Université de Technologie de Compiègne</h5>
                                <span className='timeline_period'>2007 - 2009</span>
                                <p className='timelin_description'>
                                    faknfjaknfkajfnljfnw'lenwevesg,dsf.
                            </p>
                            </article>
                            <article className='timeline_item'>
                                <h5 className='timeline_title'>Université de Shanghai</h5>
                                <span className='timeline_period'>2007 - 2009</span>
                                <p className='timeline_description'>
                                    faknfjaknfkajfnljfnw'lenwevesg,dsf.
                            </p>
                            </article>
                            <article className='timeline_item'>
                                <h5 className='timeline_title'>Université de Shanghai</h5>
                                <span className='timeline_period'>2007 - 2009</span>
                                <p className='timeline_description'>
                                    faknfjaknfkajfnljfnw'lenwevesg,dsf.
                            </p>
                            </article>
                            <article className='timeline_item'>
                                <h5 className='timeline_title'>Université de Shanghai</h5>
                                <span className='timeline_period'>2007 - 2009</span>
                                <p className='timeline_description'>
                                    faknfjaknfkajfnljfnw'lenwevesg,dsf.
                            </p>
                            </article>
                            <article className='timeline_item' style={{ borderStyle: 'hidden' }}>
                                <h5 className='timeline_title'>Université de Shanghai</h5>
                                <span className='timeline_period'>2007 - 2009</span>
                                <p className='timeline_description'>
                                    faknfjaknfkajfnljfnw'lenwevesg,dsf.
                            </p>
                            </article>
                        </div>
                    </div>
                    <div className='experience_photo'>
                        <motion.img
                            whileHover={photoHoverVariants}
                            src={photoCfm}
                            alt=''
                            width="100%"></motion.img>
                    </div>
                </section>
            </motion.div>
        );
    }
}

export default Resume;