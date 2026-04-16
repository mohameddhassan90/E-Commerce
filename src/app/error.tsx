"use client"
import React from 'react'

export default function error({error}:{error:Error}) {
  return (
    <div className='absolute inset-0 bg-gray-500/10 z-50 flex items-center justify-center'>
      <h2>{error?.message}</h2>
    </div>
  )
}
