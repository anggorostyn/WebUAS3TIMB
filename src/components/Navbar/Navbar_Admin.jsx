import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModeToggle } from "../AppearanceModes/mode-toggle";

function NavbarAdmin({ user, handleLogout }) { 
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogoutAndRedirect = () => {
    // Clear any stored data
    localStorage.clear();
    sessionStorage.clear();
    
    // Call handleLogout prop if provided
    if (handleLogout) {
      handleLogout();
    }
    
    // Navigate to login page
    navigate('/Login', { replace: true });
  };

  // Handle clicking outside to close dropdown
  const handleClickOutside = (e) => {
    if (!e.target.closest('.profile-button') && !e.target.closest('.profile-dropdown')) {
      setDropdownOpen(false);
    }
  };

  // Add event listener for clicking outside
  useState(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 py-4 z-50">
      <div className="flex items-center px-4 w-full">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/images/resikel.png" 
            alt="logo" 
            className="w-auto h-8"
          />
        </div>

        {/* Search Bar */}
        <div className="flex items-center ml-16 gap-6">
          <div className="flex items-center border border-gray-300 rounded-md bg-gray-100 dark:bg-gray-700 dark:border-gray-600">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-gray-700 dark:text-white text-base placeholder-gray-500 dark:placeholder-gray-400 px-4 py-2 rounded-l-md w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2 text-gray-600 dark:text-gray-300 font-medium rounded-r-md flex items-center justify-center transition-colors">
              <i className="uil uil-search"></i>
            </button>
          </div>
        </div>

        {/* User Menu */}
        <div className="flex items-center gap-4 ml-auto relative">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors profile-button"
            onClick={toggleDropdown}
            aria-label="User menu"
          >
            <i className="uil uil-user"></i>
          </button>

          <span className="text-gray-700 dark:text-white font-medium">
            {user?.nama || 'user'}
          </span>

          <ModeToggle />

          {dropdownOpen && (
            <div className="profile-dropdown absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg">
              <ul className="text-gray-900 dark:text-white">
                <li>
                  <button
                    onClick={handleLogoutAndRedirect}
                    className="w-full block justify-center px-4 py-2 text-sm bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-700 rounded-md transition-colors"
                  >
                    LogOut
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavbarAdmin;