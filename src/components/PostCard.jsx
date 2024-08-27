import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-sky-300 rounded-xl p-4 transition-transform transform hover:scale-105 hover:shadow-lg' >
        <div className='w-full flex justify-center mb-4'>
          <img 
            src={appwriteService.getFilePreview(featuredImage)} 
            alt={title}
            className='rounded-xl w-96 h-96  object-cover object-center transition-transform transform rotate-x hover:shadow-lg'
          />
        </div>
        <h2 className='text-xl font-bold text-center text-white'>
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;

