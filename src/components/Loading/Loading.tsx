import React from 'react';
import './Loading.css'

export const Loading: React.FC = () => {
  return  (
    <div className='loading-styling'>
      <h5>Searching your data...</h5>
      <img className='error-img' src="https://64.media.tumblr.com/tumblr_memhckVI2T1rnq3cto1_500.gifv"/>
    </div>
  )
}