import React from 'react'
import 'ldrs/dotStream' 

const Loading = () => {
  return (
    <div class="flex items-center justify-center h-screen">
    <l-dot-stream
  size="200"
  speed="2.5"
  color="black" ></l-dot-stream>
    </div>
    
  )
}

export default Loading
