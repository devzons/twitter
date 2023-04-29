import { SparklesIcon } from '@heroicons/react/24/outline'
import InputFeed from './InputFeed'

export default function Feed() {
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
      <InputFeed />
      {/* Feed */}
    </div>
  )
}
