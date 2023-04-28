import React from 'react'

export default function SidebarMenuItems({ text, Icon, active }) {
  return (
    <div className='hoverEffect flex justify-center xl:justify-start items-center text-gray-700 text-lg space-x-3'>
      <Icon className='h-6' />
      <span className={`${active && 'font-bold'} hidden xl:inline`}>
        {text}
      </span>
    </div>
  )
}
