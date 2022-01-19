import React from 'react';
import './Loading.css'

export const Loading: React.FC = () => {
  return  (
    <div className='loading-styling'>
      <h3>Searching your data...</h3>
      <img className='error-img' src="https://64.media.tumblr.com/tumblr_memhckVI2T1rnq3cto1_500.gifv"/>
    </div>
  )
}