import React from 'react';

const IconMenu = ({ color = 'currentColor' }) => {
    return (
        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="4" rx="2" fill={color} />
            <rect y="8" width="24" height="4" rx="2" fill={color} />
            <rect y="16" width="24" height="4" rx="2" fill={color} />
        </svg>
    );
};

export default IconMenu;
