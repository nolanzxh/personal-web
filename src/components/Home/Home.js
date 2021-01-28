import React from "react";
import './Home.css'
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

export default class Home extends React.Component {

    render() {
        return (
            <motion.div
                className='home_page'
                initial='pageInitial'
                animate='pageAnimate'
                exit='pageOut'
                variants={pageVariants}
                transition={{ duration: .6, type: 'tween', ease: 'anticipate' }}
            >
                <motion.div
                    initial='authorIn'
                    animate='authorOut'
                    variants={{
                        authorIn: { scale: .7, opacity: 0 },
                        authorOut: { scale: 1, opacity: 1 }
                    }}
                    transition={{ delay: .5 }}
                    className='author'
                >
                    I am Xianhua ZHOU.</motion.div>
            </motion.div>
        );
    }
}