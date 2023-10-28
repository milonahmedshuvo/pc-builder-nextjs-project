import React, { useState } from 'react'

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };




  return (
    <div className="relative inline-block text-left">
    <div>
      <button
        onClick={toggleDropdown}
        type="button"
        className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
      >
        <span className="mr-1">Dropdown</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
    </div>

    {isOpen && (
      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
            Option 1
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
            Option 2
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem">
            Option 3
          </a>
        </div>
      </div>
    )}
  </div>
  )
}

export default Dropdown
