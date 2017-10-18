import React from 'react'
import { Link } from 'react-router-dom'

// This is a stateless component
// It is much simpler than the class syntax because all you have to do is return JSX.
// Use these components when you don't need to manipulate state or use 
// lifecycle methods

const NavBar = () => {
  return (
    <div>
      <div>
        {/* Link is the React Router way of navigating to other parts of your app. */}
        {/* Use this instead of <a/> tags */}
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/login">LogIn</Link>
      </div>

      <div>
          <Link to="/field">Fields</Link>
      </div>
    </div>
  )
}

export default NavBar