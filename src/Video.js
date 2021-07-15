import React, { useRef, useState } from "react";
import "./Video.css";

import VideoFooter from "./VideoFooter";

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src="https://v16m.tiktokcdn.com/0056099599aa16f46f27c487607e890e/60ef3b94/video/tos/alisg/tos-alisg-pve-0037/f484250dc2b847248b5e985f16ea27a9/?a=1180&br=3216&bt=1608&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=202107141331220102451442002F2ACA6B&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anBweGo7ZXhsNjMzODgzNEApN2Q7OjQ8Zzs3N2U3OmRnNGdsY3BvcnI0bDJgLS1kLy1zcy9iYjAvNjA1NTBeM2IzMTU6Yw%3D%3D&vl=&vr="
      ></video>
      <VideoFooter channel="gun7pro" description="i love this song" song="name jalebi baee" />
      {/* Video Footer */}
      {/* Video Sidebar */}
    </div>
  );
}

export default Video;



// 1:45 hr:min
