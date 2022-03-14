import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ numQuestionsSaved, setNumQuestionsSaved }) {
  return (
    <header>
      <nav className='navbar'>
        <div className='nav-info'>
          <Link className='navbar-item' to='/'>
            Home
          </Link>
          <Link className='navbar-item' to='/about'>
            About
          </Link>
          <Link className='navbar-item' to='/categories'>
            Categories
          </Link>
        </div>
        <div className='nav-userQuiz'>
          <Link className='navbar-item my-quiz' to='/myquiz'>
            My Quiz
            <div className='num-saved-questions'>{numQuestionsSaved}</div>
          </Link>
          <Link className='navbar-item' to='/randomquiz'>
            Random Quiz
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
