import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Navbar() {
  const navigate = useNavigate()
  const [sidebar, setSidebar] = useState("no")   
  const [rightsidebar, setrightSidebar] = useState("no")   

  const handleOpen = () => setSidebar("opening")
  const handleClose = () => setSidebar("closing")

  return (
    <>
      <div className='navbar'>
        <div className='contains'>
          <h2>Movieverse</h2>
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

      {(sidebar === "opening" || sidebar === "closing") && (
        <div className='sidebarstyle'> <div
          className={`sidebar ${sidebar === "opening" ? "slideDown" : "slideUp"}`}
          onAnimationEnd={() => {
            if (sidebar === "closing") setSidebar("no")
          }}
        >
          <div id="sidebarhead">
            <h1>Movieverse</h1>
            <p onClick={handleClose}>✖️</p>
          </div>
          <div className='list'>
            <p>Home</p>
            <p>Movies</p>
            <p>Shows</p>
            <p>Help</p>
          </div>
        </div>
          <div className={`blurbackground ${sidebar === "opening" ? "sliderightin" : "sliderightout"}`}
            onAnimationEnd={() => {
              if (sidebar === "closing") setSidebar("no")
            }}> <img src="sidebarimg.jpg" alt="" /></div></div>
      )}
    </>
  )
}