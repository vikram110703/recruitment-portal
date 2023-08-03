import React from 'react'
import { Link } from 'react-router-dom';

import img1 from '../assets/img1.png';
import '../styles/Home.scss';

export const Home = () => {
  return (
    <>
      <div className='home' id="home">
        <main>
          <div>
            <h1>Coursify</h1>
            <p>
              Recruiting, Evolved
              Combine the power of collaborative hiring with AI automation to find, screen, and hire the best candidates. Talentdrop works for...
            </p>
            <div className='formContainer'>
              <form>
                <input type='email' required="true"
                  placeholder='Email'
                />
                <input type='password' required="true"
                  placeholder='Password'
                />
                <div className='buttonContainer'>
                  <button type='submit' >Login</button>
                  <Link to='/'> Or / Sign Up</Link>
                </div>
              </form>
            </div>
          </div>
          <img src={img1} alt={"img1"} />
        </main>
      </div>
    </>
  )
};
