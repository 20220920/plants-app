import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarlist">
          <li className="sidebarListItem">
            <Link to="/" className="sidebarListItemText">Home</Link>
          </li>
          <li className="sidebarListItem">
            <Link to="/post" className="sidebarListItemText">Product</Link>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarListItemText">blog</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
         <img src="/assets/person/2.jpeg" alt="" className="sidebarFriendImg"></img>
      </div>
    </div>
  )
}
