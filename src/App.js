import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <h1>Tic-Tok Clone.....</h1>

      <div className="app__videos">
        <Video
          url="https://v16m.tiktokcdn.com/6b084dc1c54c8783fb6ec880deae7f87/60f34e32/video/tos/useast2a/tos-useast2a-ve-0068c003/b837d24f6f5a4c499f1051a6a574f52e/?a=1233&br=4884&bt=2442&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Qq8ZmES~_4ka&l=202107171539460102451731184C3B8F7E&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajdmamY6Znk4NjMzNzczM0ApZzVoPGZoPGU4NzczNzk2OWc0L2ZncjRvZG1gLS1kMTZzcy9jXjRgMTUuMTAuXmJhLzE6Yw%3D%3D&vl=&vr="
          channel="im.soni"
          description="hindi song"
          song="ek bar...."
          likes={123}
          messages={20}
          shares={10}
        />
      </div>
    </div>
  );
}

export default App;
