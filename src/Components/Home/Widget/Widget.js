import React from "react";
import "./Widget.css";
import { Search} from '@mui/icons-material'
import { Avatar } from '@mui/material'

const Widget = () => {
  return (
    <div className="widget">
      <div className="widget_searchbox">
        <Search className="widget_search-icon" />
        <input type="text" placeholder="search tweet" />
      </div>
      <div className="follow_suggestion_box">
        <div className="follow_suggestion_header">
          <h3>Who to follow</h3>
        </div>
        <div className="follow_suggestions">
          <Avatar className="follow_suggestion-avatar" />
          <div className="follow_suggestion">
            <div className="follow_suggestion-text">
              <h3>James Lee</h3>
              <h4>@Jameslee</h4>
            </div>
            <button className="follow_suggestion-btn">follow</button>
          </div>
        </div>
        <div className="follow_suggestions">
          <Avatar className="follow_suggestion-avatar" />
          <div className="follow_suggestion">
            <div className="follow_suggestion-text">
              <h3>John Mark</h3>
              <h4>@JohnMark</h4>
            </div>
            <button className="follow_suggestion-btn">follow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget