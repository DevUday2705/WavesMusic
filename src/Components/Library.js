import React from 'react';
import LibrarySong from './LibrarySong';

function Library({songs, setSongs , setCurrentSong,audioRef,isPlaying,libraryStatus}) {
  return <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
          {songs.map(song => <LibrarySong setSongs = {setSongs} audioRef={audioRef} songs = {songs} isPlaying ={isPlaying} setCurrentSong = {setCurrentSong} song = {song} id={song.id} key={song.id} />)}
      </div>
  </div>;
}

export default Library;
