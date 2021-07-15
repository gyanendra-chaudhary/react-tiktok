import React from "react";
import "./VideoFooter.css";

// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
// import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import MusicNote from "@material-ui/icons/MusicNote";

import Ticker from "react-ticker";

function VideoFooter({channel, description, song}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter__ticker">
                <MusicNote className="videoFooter__icon" />
                <Ticker className="ticker" mode="smooth">
                    {
                        ({ index }) => (
                            <>
                                <p>{song }</p>
                            </>
                        )
                    }
                </Ticker>
                </div>
                
            </div>
            <img className="videoFooter__record" src="https://as1.ftcdn.net/jpg/02/18/30/78/500_F_218307885_qoGgm65BIz7DcXpKeK1MeeubSWarIULy.jpg" alt="" />
        </div >
    );
}

export default VideoFooter;
