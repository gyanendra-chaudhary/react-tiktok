import "./App.css";
import Video from "./Video";
import db from "./firebase";

import React, { useState, useEffect } from "react";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    //fires once when the component loads and whenever video change
    db.collection("videos").onSnapshot((snapshot) => {
      setVideos(snapshot.docs.map(doc => doc.data()));
    });
  }, []);
  return (
    <div className="app">
      <h1>Tic-Tok Clone.....</h1>

      <div className="app__videos">
        {
          videos.map(({url, song, description,channel, likes, messages, shares}) => (
            <Video 
            url={url}
              channel={channel}
              song={song}
              description={description}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
{/* <Video
              url={url}
              channel={channel}
              song={song}
              description={description}
              likes={likes}
              messages={messages}
              shares={shares}
            /> */}