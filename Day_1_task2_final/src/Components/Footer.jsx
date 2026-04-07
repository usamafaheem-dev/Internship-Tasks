import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-100 '>
      <footer className='text-center p-3'>
       <ul className='flex justify-center gap-4 font-normal md:font-medium'>
        <li className='hover:text-blue-500'>Privacy</li>
        <li className='hover:text-blue-500'>Terms And Policy</li>
        <li className='hover:text-blue-500'>Blog</li>
       </ul>
      </footer>
    </div>
  )
}

export default Footer
