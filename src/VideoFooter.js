import React from "react";
import "./VideoFooter.css";

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

import Ticker from "react-ticker";

function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@user123</h3>
                <p>this is a description</p>
                <Ticker mode="smooth">
                    {

                    }
                </Ticker>
            </div>
            <img className="videoFooter__record" src="https://as1.ftcdn.net/jpg/02/18/30/78/500_F_218307885_qoGgm65BIz7DcXpKeK1MeeubSWarIULy.jpg" alt="" />
        </div>
    );
}

export default VideoFooter;
