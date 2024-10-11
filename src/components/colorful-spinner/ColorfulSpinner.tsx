import React from 'react';
import { motion } from 'framer-motion';
import './ColorfulSpinner.scss';

const ColorfulSpinner: React.FC = () => {
    return (
        <motion.div
            className="colorful-spinner"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        />
    );
};

export default ColorfulSpinner;
