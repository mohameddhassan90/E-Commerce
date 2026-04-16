import React from 'react'
import { ClipLoader } from 'react-spinners'

export default function Loading() {
  return (
    <div className='absolute inset-0 bg-white z-50 flex items-center justify-center'>
      <ClipLoader color="#16A34A" size={35}/>
    </div>
  )
}
