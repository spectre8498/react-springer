import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchInputComponent = ({ onSearch }) => {

    const [query, setQuery] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSearch(query);
        }
    };

    const handleSearchClick = () => {
        onSearch(query);
    };

    return (
        <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            background: 'var(--colors-base, #FFFFFF)',
            border: '1px solid var(--colors-neutral-400, #94A3B8)',
            borderRadius: '16px',
            padding: '8px',
            width: '250px',
            height: "32px"
            }}>
            <input 
                aria-label="Search for tasks"
                type="text" 
                placeholder="Search..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    background: 'transparent',
                    paddingRight: '32px',
                    paddingLeft: '8px'
                }}
            />
            <SearchIcon aria-hidden="true" onClick={handleSearchClick} style={{ position: 'absolute', right: '8px', color: '#94A3B8', cursor: "pointer" }} />
        </div>
    );
};

export default SearchInputComponent;
