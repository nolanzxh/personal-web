import React from "react";
import './About.css';
import photoTraveller from '../../image/traveller.png';
import photoDeveloper from '../../image/developer.png';
import photoStudent from "../../image/student.png";
import { motion } from "framer-motion";
import {
    pageVariants, hoverAboutPhoto, hoverAboutContent
} from "../../variants";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

export class About extends React.Component {

    render() {
        return (
            <motion.div
                className={`about_page ${this.props.isSmallScreen ? 'smallscreen_page' : null}`}
                initial='pageInitial'
                animate='pageAnimate'
                exit='pageOut'
                variants={pageVariants}
                transition={{ duration: .6, type: 'tween', ease: 'anticipate' }}
            >
                <h1 className='about_texts_title'><FormattedMessage id='about_title' /></h1>
                <section className='about_panel'>
                    <div className='about_texts'>
                        <div className='descriptions_container'>
                            <p className='descriptions'>
                                <FormattedMessage id='about_description' />
                            </p>
                        </div>
                        <div className='info_list'>
                            <section className='info_item_column'>
                                <div className='info_item'>
                                    <h3 className='info_item_title'><FormattedMessage id='first_name' />:</h3>
                                    <p className='info_item_content'>Xianhua</p>
                                </div>
                                <div className='info_item'>
                                    <h3 className='info_item_title'><FormattedMessage id='last_name' />:</h3>
                                    <p className='info_item_content'>ZHOU</p>
                                </div>
                            </section>
                            <section className='info_item_column'>
                                <div className='info_item'>
                                    <h3 className='info_item_title'><FormattedMessage id='age' />:</h3>
                                    <p className='info_item_content'>25</p>
                                </div>
                                <div className='info_item'>
                                    <h3 className='info_item_title'><FormattedMessage id='residence' />:</h3>
                                    <p className='info_item_content'>France</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
                <motion.div
                    className='separator'
                    initial={{ width: 0 }}
                    animate={{ width: '80%' }}
                    transition={{ duration: .3, delay: .4 }}
                ></motion.div>
                <section className='about_panel'>
                    <h2 className='about_photo_title'><FormattedMessage id='who_i_am' /></h2>
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
                                    <h5 className='blur_photo_back_title'><FormattedMessage id='developer' /></h5>
                                    <FormattedMessage id='fullstack' />
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
                                    <h5 className='blur_photo_back_title'><FormattedMessage id='student' /></h5>
                                    <FormattedMessage id='in_utc' />
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
                                    <h5 className='blur_photo_back_title'><FormattedMessage id='traveller' /></h5>
                                    <FormattedMessage id='follow_heart' />
                                </motion.div>
                            </motion.div>
                        </section>
                    </div>
                </section>
            </motion.div>
        );
    }
}

const mapStateToProps = (state) => ({
    isSmallScreen: state.isSmallScreen,
});

export default connect(mapStateToProps)(About);