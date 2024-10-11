import React from 'react';
import {motion} from 'framer-motion';
import "./FadeInOutComponent.scss"

interface FadeInProps {
    children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({children}) => {
    return (
        <motion.div
            className="fade-in"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
