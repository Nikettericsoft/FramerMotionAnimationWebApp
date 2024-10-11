// Pagination.tsx
import React from 'react';
import { motion } from 'framer-motion';
import './Pagination.scss';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [...Array(totalPages).keys()].map((n) => n + 1);

    return (
        <div className="pagination">
            {pageNumbers.map((number) => (
                <motion.button
                    key={number}
                    className={`pagination-item ${currentPage === number ? 'active' : ''}`}
                    onClick={() => onPageChange(number)}
                    whileHover={{ scale: 1.1 }}
                >
                    {number}
                </motion.button>
            ))}
        </div>
    );
};

export default Pagination;
