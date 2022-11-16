import React from "react";
import "./Post.css";
import { Avatar } from '@mui/material'
import {
    MoreHoriz,
    ChatBubbleOutline,
    Repeat,
    FavoriteBorderOutlined,
    PublishOutlined,
} from '@mui/icons-material'


const Post = () => {
  return (
    <div className="Post">
        <Avatar className="post_avatar"/>
        <div className="post_content">
            <div className="post_header">
                <div className="post_title">
                    <h3>John Doe</h3>
                    <h4>@john_doe</h4>
                </div>
                <MoreHoriz className="post_options"/>
            </div>
            <div className="post_description">
                The best time to make money is the time that you can lorem ipsum
                lorem ipsum the best time to make money is the time lorem ipsum
                the best time is now.
            </div>
            <div className="post_media">
                <img src = "https://media.istockphoto.com/id/1327364098/photo/torn-paper-with-word-are-you-covered.jpg?s=1024x1024&w=is&k=20&c=k2459x0e95hg5wdAHBJWQaOY5kDgsEYmFHVD8dFSmvw="
                alt="post_image" className="post_image" />              
            </div>
            <div className="post_footers">
                <ChatBubbleOutline className="post_footer"/>
                <Repeat className="post_footer"/>
                <FavoriteBorderOutlined className="post_footer"/>
                <PublishOutlined className="post_footer"/>
            </div>
        </div>
    </div>
  );
};

export default Post;
