import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='contains'>
                <p>Find movies</p>
                <div className='menu'>
                    <MenuIcon />
                    <p>Menu</p>
                </div>
                <div className='search'>
                    <input type="text" placeholder='Search movies ...'/>
                    <SearchIcon color="action"></SearchIcon>
                </div>
                <p>Signin</p>
                <p>watchlist</p>
            </div>
        </div>
    )
}
