import React from 'react'

const ImageContainer = ({ images }) => {

  // console.log(images)
  const imgEl = images.map((image,  index) => {
    return (
      <img
          key={index}
          src={image.url}
          alt='generated-image'
      />
    )
  })

  return (
    <div className='image-container'>
      {imgEl}
    </div>
  )
}

export default ImageContainer