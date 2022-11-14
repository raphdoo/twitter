import React from "react";
import "./Sidebar.css";
import SidebarOptions from './SidebarOption/SidebarOption'
import {
  BookmarkBorder,
  Home,
  ListAlt,
  MailOutline,
  MoreHoriz,
  NotificationsNone,
  PermIdentity,
  Search,
  Twitter,
} from '@mui/icons-material'
import { Button } from '@mui/material'

const Sidebar = () => {
  return (
    <div className="Sidebar">            
      <Twitter className="Sidebar__twitter-icon"/>
      <SidebarOptions active Icon={Home} text='Home'/>
      <SidebarOptions Icon={Search} text='Explore'/>
      <SidebarOptions Icon={NotificationsNone} text='Notifications'/>
      <SidebarOptions Icon={MailOutline} text='Messages'/>
      <SidebarOptions Icon={BookmarkBorder} text='Bookmarks'/>
      <SidebarOptions Icon={ListAlt} text='Lists'/>
      <SidebarOptions Icon={PermIdentity} text='Profile'/>
      <SidebarOptions Icon={MoreHoriz} text='More'/>
      <button className="sidebar_tweet" variant="outlined">
        Tweet
      </button>
    </div>
  );
};

export default Sidebar