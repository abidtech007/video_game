import React from 'react'
// import Headerr from '../Components/Headerr'
import ProductCategory from '../Components/ProductCategory'
import CountdownTimer from '../Components/CountdownTimer'
import { FaTruck } from 'react-icons/Fa'
import { FaMoneyBill } from 'react-icons/Fa'
import { FaUndo } from 'react-icons/Fa'
import { FaClock } from 'react-icons/Fa'
function Home() {
  return (
    <>
      {/* <Headerr/>   */}
      <section className='main-banner'>
        <img src='./src/assets/images/back2.jpg'></img>
        <div className='banner-info'>
          <div className='container'>
            <marquee><span className='mechange'>Wellcome To Video Game Shop.Online Shopping Video Games Website.</span></marquee>
            <span className='mechange'><h2>Get up to 30% Off<br />New Year Discount</h2></span>
            <a href='./AllProduct' className='btn'>Shop Now</a>
          </div>
        </div>
      </section>
      <section className='blog-sec'>
        <div className='container'>
          <div className='row'>
            <div className='blog-head'>
              <h3>Latest Video Games</h3>
            </div>
            <div className='col-md-4'>
              <div className='blog-img'>
                <img src='./src/assets/images/blog11.png' className='w-100'></img>
                <div className='img-info'>
                  <h3>COLLECTION OF FIGHTING GAMES</h3>
                  <p>www.fightgamesarena.com</p>
                  <a>Read More</a>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='blog-img'>
                <img src='./src/assets/images/blog22.png' className='w-100'></img>
                <div className='img-info'>
                <h3>COLLECTION OF RACING GAMES</h3>
                  <p>www.fightgamesarena.com</p>
                  <a>Read More</a>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='blog-img'>
                <img src='./src/assets/images/blog33.png' className='w-100'></img>
                <div className='img-info'>
                <h3>COLLECTION OF ADVENTURE GAMES</h3>
                  <p>www.fightgamesarena.com</p>
                  <a>Read More</a>
                </div>
              </div>
            </div>
`

          </div>
        </div>
      </section>
    </>
  )
}

export default Home
