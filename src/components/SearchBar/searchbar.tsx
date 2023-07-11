import React from 'react';
import TextField from "@mui/material/TextField";
import './searchbar.scss';

export default function SearchBar() {
    return (
        <div className='search-bar'>
            <TextField
                id="search-bar"
                className="search-input"
                onInput={(e) => {
                }}
                label="Search by Invoice Id"
                variant="outlined"
                placeholder="Search..."
            />
        </div>
    );
}