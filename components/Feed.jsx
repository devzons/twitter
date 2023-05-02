import { useState, useEffect } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { SparklesIcon } from '@heroicons/react/24/outline'
import { db } from '../firebase'
import Input from './Input'
import Post from './Post'

export default function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setPosts(snapshot.docs)
        }
      ),
    []
  )

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
