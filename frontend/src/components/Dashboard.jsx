import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import "../styles/Dashboard.css"
export default function Dashboard() {
  const navigate=useNavigate();
  return (
    <div className='dash'>
      <div><Navbar /></div>
      <div className='dashtext'><p >Welcome to MovieVerse, your personalized hub for discovering,
        reviewing, and sharing thoughts on movies and shows from around the world. 
        Here, you can explore trending films, dive into detailed community reviews,
         and add your own voice to the conversation. Whether you’re searching for the next blockbuster to watch, 
         keeping track of your favorites in a watchlist, or uncovering hidden gems through personalized recommendations,
          this dashboard is designed to keep you connected with the pulse of the movie world. Start exploring, share your reviews,
           and see how your opinions shape the community’s take on cinema.</p></div>
        <div>
          <button onClick={()=>navigate("/review")}> write a review</button></div>
    </div>
  )
}
