import React from 'react'
import { UserIcon, AcademicCapIcon, BookOpenIcon } from '@heroicons/react/24/outline';
// or use outline version:
// import { AcademicCapIcon, BookOpenIcon } from '@heroicons/react/24/outline';

function Navbar() {
  return (
    <div className="bg-black h-[50px] px-7 w-full text-white flex items-center justify-between">
       <div className="italic font-semibold">Leaderboard </div>
       <div className="flex gap-2 italic font-semibold">
        <AcademicCapIcon className="h-6 w-6 text-white" />
        learning
        <BookOpenIcon className="h-6 w-6 text-white" />


       </div>
       <div className="italic font-semibold flex gap-2">
       <UserIcon className="h-6 w-6 text-white" />
        Alien Joy</div>
       
    </div>
  )
}

export default Navbar
