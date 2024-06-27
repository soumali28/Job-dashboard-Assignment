import React from 'react'
import { PiDotOutlineFill } from 'react-icons/pi'

const Badge = (props) => {
  return (
    <div>
        <div className="flex items-center bg-green-50 border border-green-100 inline p-1 rounded-full">
          <PiDotOutlineFill className="font-bold text-green-200 w-[14px] h-[14px]"/>
          <span className="text-xs text-green-200 font-medium mr-1">{props.status}</span>
        </div>
    </div>
  )
}

export default Badge