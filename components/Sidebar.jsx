import React from 'react'
import Image from 'next/image'
import { HomeIcon } from '@heroicons/react/20/solid'
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
  ClipboardIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline'
import SidebarMenuItems from './SidebarMenuItems'

export default function Sidebar() {
  return (
    <aside className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24'>
      <div className='hoverEffect p-0 hover:bg-blue-100 xl:px-1'>
        <Image width='50' height='50' src='/logo.png'></Image>
      </div>
      <div className='mt-4 mb-2.5 xl:items-start'>
        <SidebarMenuItems text='Home' Icon={HomeIcon} active />
        <SidebarMenuItems text='Explore' Icon={HashtagIcon} />
        <SidebarMenuItems text='Notifications' Icon={BellIcon} />
        <SidebarMenuItems text='Messages' Icon={InboxIcon} />
        <SidebarMenuItems text='Bookmarks' Icon={BookmarkIcon} />
        <SidebarMenuItems text='Lists' Icon={ClipboardIcon} />
        <SidebarMenuItems text='Profile' Icon={UserIcon} />
        <SidebarMenuItems text='More' Icon={EllipsisHorizontalCircleIcon} />
      </div>
      {/* button */}
      <button className='bg-blue-400 text-white rounded-full w-44 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'>
        Tweet
      </button>

      {/* Mini profile */}
      <div className='hoverEffect tect-gray-700 flex items-center justify-center xl:justify-start mt-auto'>
        <img
          src='/images/don2.jpg'
          alt='user-img'
          className='h-10 w-10 rounded-full xl:mr-2'
        />
        <div className='leading-5 hidden xl:inline'>
          <h4 className='font-bold'>Don Yu</h4>
          <p className='text-gray-500'>@devzons</p>
        </div>
      </div>
      <EllipsisHorizontalIcon className='h-5 xl:ml-8 hidden xl:inline' />
    </aside>
  )
}
