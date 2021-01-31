export const pageVariants = {
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

export const hoverSkillPhoto = {
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

export const hoverSkillContent = {
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

export const hoverTopBorder = {
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

export const hoverRightBorder = {
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

export const hoverBottomBorder = {
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

export const hoverLeftBorder = {
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

export const hoverResumePhoto = {
    position: 'relative',
    scale: 1.2,
    zIndex: 100,
    transition: {
        duration: .3,
    }
}

export const hoverAboutPhoto = {
    rest: { opacity: 1 },
    hover: {
        scale: 1.05,
        transition: {
            duration: .4,
            type: 'tween',
            ease: 'easeIn'
        }
    }
}

export const hoverAboutContent = {
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