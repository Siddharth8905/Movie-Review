import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Navbar() {
  const navigate = useNavigate()
  const [sidebar, setSidebar] = useState("no")   // "no", "opening", "closing"

  const handleOpen = () => setSidebar("opening")
  const handleClose = () => setSidebar("closing")

  return (
    <>
      {sidebar === "no" &&
        <div className='navbar'>
          <div className='contains'>
            <p>Find movies</p>
            <div className='menu' onClick={handleOpen}>
              <MenuIcon />
              <p>Menu</p>
            </div>
            <div className='search'>
              <input type="text" placeholder='Search movies ...' />
              <SearchIcon color="action" />
            </div>
            <p onClick={() => navigate("/signup")}>Signin</p>
            <p>watchlist</p>
          </div>
        </div>
      }

      {(sidebar === "opening" || sidebar === "closing") && (
        <div
          className={`sidebar ${sidebar === "opening" ? "slideDown" : "slideUp"}`}
          onAnimationEnd={() => {
            if (sidebar === "closing") setSidebar("no")
          }}
        >
          <li>Home</li>
          <li>Movies</li>
          <li>Shows</li>
          <li>Help</li>
          <p onClick={handleClose}>✖️</p>
        </div>
      )}
    </>
  )
}