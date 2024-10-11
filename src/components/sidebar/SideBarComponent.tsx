import React from 'react';
import {motion} from 'framer-motion';
import './SideBarComponent.scss';

interface SidebarProps {
    links: { name: string; path: string }[];
    isSideBarOpen?: boolean;
    setIsSideBarOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({links, isSideBarOpen, setIsSideBarOpen}) => {


    const toggleSidebar = () => {
        setIsSideBarOpen(!isSideBarOpen);
    };

    return (
        <motion.div
            className={`sidebar ${isSideBarOpen ? 'open' : ''}`}
            animate={isSideBarOpen ? {x: 0} : {x: '-100%'}}
            transition={{duration: 0.5}}
        >
            <button className="toggle-btn" onClick={toggleSidebar}>
                {isSideBarOpen ? 'Close' : 'Open'} Sidebar
            </button>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.path}>{link.name}</a>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default Sidebar;
