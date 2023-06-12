import React from 'react'
import BannerStyle from './Banner.style'
import InputShortener from '../Input/InputShortener'
import Background from '../BackgroundAnimate/Background'

const Banner:React.FC = () => {
  return (
    <>
       <BannerStyle>

    <InputShortener />
    <Background />
       </BannerStyle>
    </>
  )
}

export default Banner
