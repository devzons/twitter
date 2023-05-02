import Moment from 'react-moment'
import {
  EllipsisHorizontalIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  ShareIcon,
  ChartBarIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'

export default function Post({ post }) {
  return (
    <div className='flex p-3 cursor-pointer border-b border-gray-200'>
      <img
        className='h-11 w-11 rounded-full mr-4'
        src={post.data().userImg}
        alt='user image'
      />
      <div>
        <div className='flex justify-between items-center'>
          <div className='flex items-center space-x-1 whitespace-nowrap'>
            <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>
              {post.data().name}
            </h4>
            <span className='text-sm sm:text-[15px]'>
              @{post.data().username} -{' '}
            </span>
            <span className='text-sm sm:text-[15px] hover:underline'>
              <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
            </span>
          </div>
          <div>
            <EllipsisHorizontalIcon className='h-10 w-10 text-gray-700 hoverEffect hover:bg-sky-100 hover:text-sky-500 p-2' />
          </div>
        </div>
        <p className='text-gray-800 text-[15px] sm:text-[16px] mb-2'>
          {post.data().text}
        </p>

        <img className='rounded-xl mr-2' src={post.data().image} alt='image' />

        <div className='flex justify-between text-gray-500 p-2'>
          <ChatBubbleOvalLeftEllipsisIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100' />
          <TrashIcon className='h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100' />
          <HeartIcon className='h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100' />
          <ShareIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100' />
          <ChartBarIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100' />
        </div>
      </div>
    </div>
  )
}
