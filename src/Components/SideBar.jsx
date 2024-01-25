import React from 'react'

const SideBar = () => {
  return (
    <aside className="sidebar bg-black text-white w-[25%] fixed top-8 left-0 bottom-0 text-center mb-10">
      <h2 className="header font-bold text-2xl mb-10 uppercase">Your Projects</h2>
      <button className="py-2 px-4 bg-gray-500 text-gray-300 rounded-md mb-10">
        + Add Project
      </button>
      <ul className="category">
        <li className="text-xl hover:bg-gray-300 mb-10">Learning React</li>
        <li className="text-xl hover:bg-gray-300">Mastering React</li>
      </ul>
    </aside>
  );
}

export default SideBar