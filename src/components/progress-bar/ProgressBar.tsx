// ProgressBar.tsx
import React from 'react';
import { motion } from 'framer-motion';
import './ProgressBar.scss';

interface ProgressBarProps {
    progress: number; // value from 0 to 100
    color?: string; // optional color for the progress bar
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, color = '#3498db' }) => {
    return (
        <div className="progress-bar-container">
            <motion.div
                className="progress-bar"
                style={{ backgroundColor: color }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
            />
        </div>
    );
};

export default ProgressBar;
