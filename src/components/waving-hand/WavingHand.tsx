import React from 'react';
import { motion } from 'framer-motion';
import './WavingHand.scss';

const WavingHand: React.FC = () => {
    return (
        <motion.div
            className="waving-hand"
            animate={{ rotate: [0, 20, -20, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
            👋
        </motion.div>
    );
};

export default WavingHand;
