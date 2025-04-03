import React from 'react';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';


const SidePanel = ({ handleRedirect }) => {
    return (
        <div className="w-80 bg-gray-200 p-4">
            <h2
                className="font-bold"
                style={{
                    fontFamily: 'Merriweather Sans, sans-serif',
                    fontSize: "24px",
                    color: '#00324E',
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    lineHeight: '1.25',
                    whiteSpace: 'normal',
                }}
            >
                Editor Management Portal
            </h2>
            <nav role="navigation">
                <ul style={{ marginTop: "20px" }}>
                    <li className="p-2 mb-2 rounded flex items-center gap-2 cursor-pointer" onClick={handleRedirect}>
                        <PanoramaFishEyeIcon fontSize="small" aria-hidden="true" />
                        Dashboard
                    </li>
                    <li className="p-2 mb-2 rounded flex items-center gap-2">
                        <PanoramaFishEyeIcon fontSize="small" aria-hidden="true" />
                        Tasks
                    </li>
                    <li aria-hidden="true">
                        <hr className="border-gray-400 my-2" />
                    </li>
                    <li className="p-2 mb-2 rounded flex items-center gap-2">
                        <PanoramaFishEyeIcon fontSize="small" aria-hidden="true" />
                        Articles
                    </li>
                    <li className="p-2 mb-2 rounded flex items-center gap-2">
                        <PanoramaFishEyeIcon fontSize="small" aria-hidden="true" />
                        Users
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SidePanel;
