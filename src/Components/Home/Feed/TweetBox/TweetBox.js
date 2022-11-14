import React from "react";
import {Avatar} from '@mui/material'
import "./TweetBox.css";

import {
    ImageOutlined,
    GifBoxOutlined,
    PollOutlined,
    SentimentSatisfiedOutlined,
    CalendarTodayOutlined,
    LocationCityOutlined,
    LocationOnOutlined,
} from '@mui/icons-material'

const TweetBox = () => {
  return (
    <div className="tweetbox">
        <form className="tweetbox_form">
            <Avatar/>
            <div className="tweetbox_form-field">
                <div className="textbox_input">
                    <input type="text" placeholder="What's happening?"/>
                </div>
                <div className="textbox_input">
                    <div className="textbox_icons">
                        <ImageOutlined className="textbox_icon"/>
                        <GifBoxOutlined className="textbox_icon"/>
                        <PollOutlined className="textbox_icon"/>
                        <SentimentSatisfiedOutlined className="textbox_icon"/>
                        <CalendarTodayOutlined className="textbox_icon"/>
                        <LocationOnOutlined className="textbox_icon"/>
                    </div>
                    <button>Tweet</button>

                </div>

            </div>

        </form>
    </div>
  );
};

export default TweetBox;
