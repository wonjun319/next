'use client'

import { Phone } from 'lucide-react'

export default function Sidebar() {

  return (

    <div className='flex fixed inset-0 justify-center items-start pt-15'> 
    
    <button
      >
        <Phone size={24} />
      </button>
    <h1>하수구 박사</h1>
    </div>
      
  )
}