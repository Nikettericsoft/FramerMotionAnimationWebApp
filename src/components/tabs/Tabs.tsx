// Tabs.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Tabs.scss';

interface Tab {
    label: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);


    return (
        <div className="tabs">
            <div className="tab-list">
                {tabs.map((tab, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`tab-item ${index === activeTab ? 'active' : ''}`}
                        whileHover={{ scale: 1.1 }}
                    >
                        {tab.label}
                    </motion.button>
                ))}
            </div>
            <motion.div
                key={activeTab}
                className="tab-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {tabs[activeTab].content}
            </motion.div>
        </div>
    );
};

export default Tabs;
