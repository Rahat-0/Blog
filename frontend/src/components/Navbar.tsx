const Navbar = () => {
  return (
    <div className="leading-normal tracking-normal gradientStatic flex items-center fixed w-full z-50" >
      <div className="flex justify-center w-full items-center">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <a
              className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="##"
            >
              
            </a>


            BLOG
          </div>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent p-4 lg:p-0 z-20"
        id="nav-content"
      >
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
        <li className="mr-3 py-3">
          
            <input type="search" className="inline-block py-2 px-4 font-bold outline-none bg-yellow-300 bg-opacity-20 rounded-lg "  />
          </li>
          <li className="mr-3 py-3">
            <a
              className="inline-block py-2 px-4 font-bold no-underline"
              href="##"
            >
              Latest 
            </a>
          </li>
          <li className="mr-3 py-3">
            <a
              className="inline-block no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
              href="##"
            >
              Sports
            </a>
          </li>
          <li className="mr-3 py-3">
            <a
              className="inline-block no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
              href="##"
            >
              Religions
            </a>
          </li>
          <li className="mr-3 py-3">
            <a
              className="inline-block no-underline hover:text-gray-800 hover:text-underline font-bold gradient rounded-lg py-2 px-4"
              href="##"
            >
              JOIN
            </a>
          </li>
        </ul>
        
      </div>
    </div>
  );
};

export default Navbar;
