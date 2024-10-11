import React, {useState} from 'react';
import {motion} from 'framer-motion';
import './SearchBarComponent.scss';

interface SearchBarProps {
    placeholder: string;
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({placeholder, onSearch}) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <motion.div
            className="search-bar"
            initial={{width: 0}}
            animate={{width: '300px'}}
            transition={{duration: 0.5}}
        >
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
        </motion.div>
    );
};

export default SearchBar;
