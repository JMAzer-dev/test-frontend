import { Route, Routes } from "react-router-dom";
import ChannelDetail from "./components/ChannelDetail";
import VideoStream from "./components/VideoStream";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Home />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
      <Route path="/video/:id" element={<VideoStream />} />
    </Routes>
  );
}

export default App;
