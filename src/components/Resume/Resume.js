import React from "react";
import './Resume.css'
import '../../icon/iconfont.css';
import photoUtc from "../../image/utc.jpg";
import photoCfm from "../../image/cfm.png";
import { motion } from "framer-motion";
import { pageVariants, hoverResumePhoto } from "../../variants";

export default class Resume extends React.Component {

    render() {

        const educationInfos = [
            { pseudo: 'UTC', title: 'University of Technology of Compiègne', period: '2019 - 2022', desc: 'Degree in computer engineering' },
            { pseudo: 'SHU', title: 'Shanghai University', period: '2016 - 2019', desc: "Bachelor's Degree in Computer Engineering" }];

        const experienceInfos = [
            {
                pseudo: 'MEMORAE', title: 'Developement of the MEMORAe web platform',
                period: 'August 2020 - January 2021', place: 'UTC, Compiègne',
                desc: "Analysis, correction and addition of functionalities of the MEMORAe web platform."
            },
            {
                pseudo: 'CFM', title: 'Full-Stack intership in Capital Fund Management',
                period: 'February 2020 - August 2020', place: 'CFM, Paris - team IT Front Execution',
                desc: "Design and realization of UI of an application according to the user's request with Angular, implement REST APIs with Flask, manage Oracle database."
            },
            {
                pseudo: 'HIKVISION', title: 'Computer science internship in HIKVISION',
                period: 'June 2019 - August 2019', place: 'HIKVISION, Shanghai - team Fonctions-Support',
                desc: 'Maintenance of a Webcam platform. After-sales service offer.'
            },
            {
                pseudo: 'PERSON', title: 'Personal works concerning web development techniques',
                period: '2018 - 2019', place: 'Shanghai / Compiègne',
                desc: 'Practice HTML, JS, JQuery by creating some simple web pages.'
            }];

        let eduLength = educationInfos.length;
        let educations = educationInfos.map((edu, index) => {
            return (
                <article className='timeline_item' key={edu.pseudo} style={(index + 1) === eduLength ? { borderStyle: 'hidden' } : null}>
                    <h5 className='timeline_title'>{edu.title}</h5>
                    <span className='timeline_period'>{edu.period}</span>
                    <p className='timeline_description'>
                        {edu.desc}
                    </p>
                </article>
            );
        });

        let expLength = experienceInfos.length;
        let experiences = experienceInfos.map((exp, index) => {
            return (
                <article className='timeline_item' key={exp.pseudo} style={(index + 1) === expLength ? { borderStyle: 'hidden' } : null}>
                    <h5 className='timeline_title'>{exp.title}</h5>
                    <span className='timeline_period'>{exp.period}</span>
                    <p className='timeline_description'>
                        {exp.desc}
                    </p>
                </article>
            );
        });

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
                            whileHover={hoverResumePhoto}
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
                            {educations}
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
                            {experiences}
                        </div>
                    </div>
                    <div className='experience_photo'>
                        <motion.img
                            whileHover={hoverResumePhoto}
                            src={photoCfm}
                            alt=''
                            width="100%"></motion.img>
                    </div>
                </section>
            </motion.div>
        );
    }
}