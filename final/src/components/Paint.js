import React, { Component } from 'react'
import PaintActiveWindow from './PaintActiveWindow'
import PaintTumbnailGrid from './PaintThumbnailGrid'
import axios from 'axios'

export default class PaintGallery extends Component {
    
    state = {
        thumbnails: []
    }

    componentDidMount() {
        axios.get('')
        .then(res => {
            this.setState({ thumbnails: res.data.thumbnails })
        })
    }
    
    render() {
        console.log(this.state.thumbnails)
        return (
            <div style={ThumbnailGalleryStyles}>

        {/* Left Side */}
            <div style={{ flex: 1.5}}>
                <PaintActiveWindow />
                <PaintTumbnailGrid />           
            </div>
            
        {/* Right Side */}
            <div style={{ flex: 1, padding:'40px'}}>
                Some text about the image
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
