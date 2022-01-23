import React from 'react';
import {playAudio } from '../util';
function LibrarySong({song,setSongs,setCurrentSong,songs,id,audioRef,isPlaying}) {

    const songSelectHandler = () => {
        const selectedSong = songs.filter((state)=>state.id === id)
        setCurrentSong(selectedSong[0])
        // add active state
        const newSongs = songs.map((song)=>{
            if(song.id===id){
                return {
                    ...song,
                    active:true,
                }
            }else{
                return{
                    ...song,
                    active:false,
                }
            }
        })
        setSongs(newSongs)
        // Check if the song is playing. 
        playAudio(isPlaying,audioRef)
        };
    
    return <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''} `}>
    <img src={song.cover} alt="songBackground" />
    <div className="song-description">
    <h3>{song.name}</h3>
    <h4>{song.artist}</h4>
    </div>
    </div>
}

export default LibrarySong;

