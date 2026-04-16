import React from 'react'
import CheckOut from '../CheckOut/CheckOut'

export default async function page({ params }: { params: Promise<{ cartid: string }> }) {
  const cartId =(await params).cartid
  
  return (
    <div>
      <CheckOut cartId={cartId}></CheckOut>
    </div>
  )
}
