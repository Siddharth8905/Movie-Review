import React from 'react'
import "../styles/review.css"
export default function Review() {
    return (
        <div className='mainbox'>
            <h1>Review Page</h1>
            <div className='subbox'>
                <form action="">
                <div className='inp'>
                    <label htmlFor=""> Write a review</label>
                    <textarea name="" id="" rows={5}></textarea>
                    <label htmlFor="">Rating out of 10</label>
                    <input type="Numeber" step="any" />
                </div>
            </form>
            </div>
        </div>
    )
}
