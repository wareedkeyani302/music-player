import React from 'react'
import './App.css'
import AudioPlayer from './component/AudioPlayer';

const App = () => {
  const audioData = {
    url: `${process.env.PUBLIC_URL}/Audio-Files/Awaara.mp3`,
    // url: `${process.env.PUBLIC_URL}/Audio-Files/Hips.mp3`,
    // url: `${process.env.PUBLIC_URL}/Audio-Files/waka.mp3`,
    cover: 'https://placekitten.com/80/80', 
    title: 'Awaara',
    author: 'Saim Bhat',
  };
  return (
    <div className='audio'>
      <h1 className='top-heading'>Audio Player In React Js</h1>
      <AudioPlayer audioData={audioData} />
    </div>
  )
}

export default App;