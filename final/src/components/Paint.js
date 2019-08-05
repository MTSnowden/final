import React, { Component } from 'react'
// import ThumbnailGalleryStyles from ''
import PaintActiveWindow from './PaintActiveWindow'
import PaintTumbnailGrid from './PaintThumbnailGrid'


export default class PaintGallery extends Component {
    render() {
        return (
            <div style={ThumbnailGalleryStyles}>

        {/* Left Side */}
            <div style={{ flex: 1}}>
                <PaintActiveWindow />
                <PaintTumbnailGrid />           
            </div>
            
        {/* Right Side */}
            <div style={{ flex: 1}}>
                Right
            </div>
            
            </div>
        )
    }
}

const ThumbnailGalleryStyles = {
    background: '#ddd',
    height: '500px',
    width: '1024px',
    margin: '40px auto',
    display: 'flex'
}
