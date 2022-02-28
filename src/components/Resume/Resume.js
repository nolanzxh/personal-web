import React from "react";
import './Resume.css'
import '../../icon/iconfont.css';
import photoUtc from "../../image/utc.jpg";
import photoCfm from "../../image/cfm.png";
import photoScorf from "../../image/scorf.png";
import { motion } from "framer-motion";
import { pageVariants, hoverResumePhoto } from "../../variants";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";

const educationInfos = {
    en: [
        { pseudo: 'UTC', title: 'University of Technology of Compiègne', period: '2019 - 2022', desc: 'Degree in computer engineering' },
        { pseudo: 'SHU', title: 'Shanghai University', period: '2016 - 2019', desc: "Bachelor's Degree in Computer Engineering" }
    ],
    fr: [
        { pseudo: 'UTC', title: 'Université de Technologie de Compiègne', period: '2019 - 2022', desc: "Diplôme d'ingénieur en informatique" },
        { pseudo: 'SHU', title: 'Université de Shanghai', period: '2016 - 2019', desc: "Licence en Génie Informatique" }]
};

const experienceInfos = {
    en: [
        {
            pseudo: 'ScorfCDD', title: 'Web developer in Scorf.io',
            period: 'February 2022 - ', place: 'Scorf.io, Paris',
            desc: "Maintenance of application, implementation of administration system."
        },
        {
            pseudo: 'ScorfStage', title: 'Internship developement of web in Scorf.io',
            period: 'August 2021 - February 2022', place: 'Scorf.io, Paris',
            desc: "Implementation of new features of the app, performance improvement, writing E2E test code, implementation of REST APIs with NodeJs."
        },
        {
            pseudo: 'ProjetsUV', title: "School projects related to web application with security",
            period: 'February 2021 - June 2021', place: 'UTC, Compiègne',
            desc: "Realization of online chat rooms using JAVAEE and the WebSocket protocol, implementation of a security application allowing the simulation of bank transfers."
        },
        {
            pseudo: 'MEMORAE', title: 'Developement of the MEMORAe web platform',
            period: 'August 2020 - March 2021', place: 'UTC, Compiègne',
            desc: "Analysis, correction and addition of functionalities of the MEMORAe web platform, implement administration system, code clean."
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
        }
    ],
    fr: [
        {
            pseudo: 'ScorfCDD', title: "Développeur de l'application Business Intelligence",
            period: 'Février 2022 - ', place: 'Scorf.io, Paris',
            desc: "Maintenance de l'application, implémentation de système d'administration."
        },
        {
            pseudo: 'ScorfStage', title: "Stage Développement web chez Scorf.io",
            period: 'Août 2021 - Février 2022', place: 'Scorf.io, Paris',
            desc: "Implémentaion des nouvelles fonctionnalités de l'app, amélioration de la performance, rédaction du code de test E2E, implémentation des APIs REST avec NodeJs."
        },
        {
            pseudo: 'ProjetsUV', title: "Projets UV liés à l'application web en sécurité",
            period: 'Février 2021 - Juin 2021', place: 'UTC, Compiègne',
            desc: "Réalisation des salles de discussion en ligne à l'aide de JAVAEE et le protocole WebSocket, implémentation d'une application en sécurité permettant de faire de la simulation du virement bancaire."
        },
        {
            pseudo: 'MEMORAE', title: 'Développement web de la plateforme MEMORAe',
            period: 'Août 2020 - Mars 2021', place: 'UTC, Compiègne',
            desc: "Analyse, correction et amélioration des fonctionnalités de la plateforme MEMORAe, implémentation du système d'administration, nettoyage du code."
        },
        {
            pseudo: 'CFM', title: 'Stage Full-Stack chez Capital Fund Management',
            period: 'Février 2020 - Août 2020', place: 'CFM, Paris - équipe IT-Front Execution',
            desc: "Conception et réalisation de l'UI d'une application selon la demande de l'utilisateur (avec Angular), implémentation des APIs REST avec Flask, gestion de la base de données Oracle."
        },
        {
            pseudo: 'HIKVISION', title: 'Stage assistant ingénieur informatique chez HIKVISION',
            period: 'Juin 2019 - Août 2019', place: 'HIKVISION, Shanghai - team Fonctions-Support',
            desc: 'Maintenance de plateforme de webcam, offre service après vente.'
        },
        {
            pseudo: 'PERSON', title: 'Projets personnels concernant techniques du développement web',
            period: '2018 - 2019', place: 'Shanghai / Compiègne',
            desc: 'Apprentissage de HTML, JS, JQuery en créant des pages web simples.'
        }
    ]

};

export class Resume extends React.Component {

    render() {
        let language = this.props.intl.locale;
        let eduLength = educationInfos[language].length;
        let educations = educationInfos[language].map((edu, index) => {
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

        let expLength = experienceInfos[language].length;
        let experiences = experienceInfos[language].map((exp, index) => {
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
                className={`resume_page ${this.props.isSmallScreen ? 'smallscreen_page' : null}`}
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
                            width="100%"
                        />
                    </div>
                    <div className='education_description'>
                        <h3 className='resume_panel_title'>
                            <span className='iconfont panel_title_icon'>&#xe645;</span>
                            <FormattedMessage id="education" />
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
                            <FormattedMessage id="experience" />
                        </h3>
                        <div className='timeline'>
                            {experiences}
                        </div>
                    </div>
                    <div className='experience_photos'>
                        <div className='experience_photo'>
                            <motion.img
                                whileHover={hoverResumePhoto}
                                src={photoScorf}
                                alt=''
                                width="100%"
                            />
                        </div>
                        <div className='experience_photo'>
                            <motion.img
                                whileHover={hoverResumePhoto}
                                src={photoCfm}
                                alt=''
                                width="100%"
                            />
                        </div>
                    </div>
                </section>
            </motion.div>
        );
    }
}

const mapStateToProps = (state) => ({
    isSmallScreen: state.isSmallScreen,
});

export default injectIntl(connect(mapStateToProps)(Resume));