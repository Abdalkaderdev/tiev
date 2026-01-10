import React from 'react';

export const ChristianCross = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}
        >
            {/* Vertical Beam */}
            <path d="M12 2v20" />
            {/* Horizontal Beam - positioned higher for Latin Cross proportions */}
            <path d="M7 8h10" />
        </svg>
    );
};
