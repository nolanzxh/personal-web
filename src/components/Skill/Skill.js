import React from "react";
import './Skill.css';
import ProgressBar from "../ProgressBar/ProgressBar";
import photoMe from '../../image/me.png';
import { motion } from "framer-motion";
import {
    pageVariants, hoverSkillPhoto, hoverSkillContent, hoverTopBorder,
    hoverRightBorder, hoverBottomBorder, hoverLeftBorder
} from "../../variants";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

export class Skill extends React.Component {

    render() {
        return (
            <motion.div
                className={`skill_page ${this.props.isSmallScreen ? 'smallscreen_page' : null}`}
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
                            src={photoMe}
                            alt=''
                            width='100%'
                            variants={hoverSkillPhoto}
                        ></motion.img>
                        <motion.div className='photo_back' variants={hoverSkillContent}>
                            <h5 className='photo_back_begin'>Studying</h5>
                            <h1 className='photo_back_middle'>NEVER</h1>
                            <h5 className='photo_back_end'>Stop</h5>
                        </motion.div>
                    </motion.div>
                    <div className='skill_content'>
                        <h2 className='skill_title'>
                            <FormattedMessage id="capacity" />
                        </h2>
                        <p className='skill_description'><FormattedMessage id='capacity_description' /></p>
                        <ProgressBar percentage={70} title='Linux'></ProgressBar>
                        <ProgressBar percentage={80} title='Git'></ProgressBar>
                        <ProgressBar percentage={60} title='jQuery'></ProgressBar>
                        <ProgressBar percentage={75} title='Angular'></ProgressBar>
                        <ProgressBar percentage={70} title='React'></ProgressBar>
                        <ProgressBar percentage={90} title='SQL'></ProgressBar>
                        <ProgressBar percentage={70} title='Python'></ProgressBar>
                    </div>
                </section>
            </motion.div>
        );
    }
}

const mapStateToProps = (state) => ({
    isSmallScreen: state.isSmallScreen,
});

export default connect(mapStateToProps)(Skill);