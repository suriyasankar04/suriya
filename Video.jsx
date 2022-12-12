import React from 'react'
import './vid.css'
import videobg from './sd-hero-video.mp4'
export default function Video() {
  return (
    <div>
        <div>
      <video src={videobg} autoPlay loop muted class="vid"></video>
        </div>
    </div>
  )
}
