import React,{useState,useRef} from 'react';
// Import Styles
import './styles/_app.scss'

// Adding components
import Nav from './Components/Nav';
import Player from './Components/Player';
import Song from './Components/Song';
import Library from './Components/Library';
// Import Util. 
import data from './data'
import chillHop from './data';
function App() {
  // ref
const audioRef = useRef(null)
  // State.
const [songs,setSongs] = useState(data())
const [currentSong,setCurrentSong] = useState(songs[0])
const [isPlaying,setIsPlaying] = useState(false)
const [songInfo, setSongInfo] = useState({
  currentTime: 0,
  duration: 0
})
const [libraryStatus, setLibraryStatus] = useState(false)
const timeUpdateHandler = (e) => {
  const current = e.target.currentTime
  const duration = e.target.duration
  setSongInfo({...songInfo,currentTime: current,duration:duration})
}

  return (
    <div>
    <Nav setLibraryStatus ={setLibraryStatus} libraryStatus = {libraryStatus} />
    <Song currentSong ={currentSong} />
    <Player setSongs={setSongs} setCurrentSong={setCurrentSong} songs={songs} id={songs.id} audioRef={audioRef} currentSong ={currentSong} isPlaying = {isPlaying} setIsPlaying = {setIsPlaying} setSongInfo ={setSongInfo} songInfo ={songInfo} />
    <Library  libraryStatus = {libraryStatus} setSongs={setSongs} audioRef={audioRef} songs ={songs} setCurrentSong = {setCurrentSong} isPlaying = {isPlaying}/>
    <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
