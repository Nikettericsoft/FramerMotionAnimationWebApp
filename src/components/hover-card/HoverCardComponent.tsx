import React from 'react';
import {motion} from 'framer-motion';
import "./HoverCard.scss"

interface HoverCardProps {
    children: React.ReactNode;
}

const HoverCard: React.FC<HoverCardProps> = ({children}) => {
    return (
        <motion.div
            className="hover-card"
            whileHover={{scale: 1.05}}
        >
            {children}
        </motion.div>
    );
};

export default HoverCard;
