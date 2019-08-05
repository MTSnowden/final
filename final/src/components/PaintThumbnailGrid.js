import React from 'react'
// imr 
import PaintThumbnail from './PaintThumbnail'

const PaintThumbnailGrid = () => {
    return (
        <div style={ styles }>
         <PaintThumbnail />
         <PaintThumbnail />
         <PaintThumbnail />
         <PaintThumbnail />

         <PaintThumbnail />
         <PaintThumbnail />
         <PaintThumbnail />
         <PaintThumbnail />
        </div>
    )
}

const styles = {
    height: '35%',
    width: '100%',
    background: 'yellow',
    display: 'flex',
    flexWrap: 'wrap'
}

export default PaintThumbnailGrid