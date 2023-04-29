import { SparklesIcon } from '@heroicons/react/24/outline'
import Input from './Input'
import Post from './Post'

export default function Feed() {
  const posts = [
    {
      id: 1,
      name: 'Don Yu',
      username: 'devzons',
      userImg: '/images/don2.jpg',
      img: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
      text: 'Awesom view!',
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      name: 'Don Yu',
      username: 'devzons',
      userImg: '/images/don2.jpg',
      img: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      text: 'Tweet Tweet!',
      timestamp: '2 days ago',
    },
  ]

  return (
    <div className='xl:ml-[370px] border-l border-r xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl'>
      {/* Header */}
      <div className='flex justify-between items-center p-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
        <h2 className='text-lg sm:text-xl font-bold cursor-pointer '>Home</h2>
        <div className='flex items-center p-3 hover:bg-gray-200 rounded-full cursor-pointer'>
          <SparklesIcon className='h-5' />
        </div>
      </div>
      {/* Input */}
      <Input />
      {/* Posts */}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
