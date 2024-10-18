import React from 'react'
import './style.css'
import Hero from '../../components/hero/Hero'
import Fullstack from '../../components/fullstack/Fullstack'
import Features from '../../components/features/Features'
import Faqs from '../../components/faqs/Faqs'
import Diffrence from '../../components/diffrence/Diffrence'

function Home() {
  return (
    <div className='overflow-hidden'>
        <Hero/>
        <section className="p-3 p-md-5 bonus bg-white">
            <center>
                <h1 className="fs-1 fw-bold my-3">Our Bonus <span className="text-main2">Featurs</span></h1>
            </center>
            <div className="row">
                <div className="col-md-6 mb-2">
                    <div className="card p-3 light-bg2 mb-3 border-0 h-100">
                        <p className="fs-5 fw-5">Access to exclusive full-stack development resources (tutorials, e-books, etc.).
                        </p>
                    </div>
                </div>

                <div className="col-md-6 mb-2">
                    <div className="card p-3 h-100 d-flex align-items-center justify-content-center light-bg1 border-0">
                        <p className="fs-5 fw-5">Career counseling sessions for resume building and interview preparation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <div className="scroller">
            <marquee behavior="scroll" direction="left"  scrollamount='10'>
                <div className="d-flex gap-3 align-items-center">
                    <span className='fs-1 white-stroke'>Full-Stack Development Training</span>
                    <span className="fs-3"><i class="bi bi-plus-lg text-main2"></i></span>
                    <span className='fs-1 text-main2'>Internship </span>
                    <span className="fs-3"><i class="bi bi-plus-lg text-main2"></i></span>
                    <span className='fs-1 white-stroke'>Unlimited Placement </span>

                    <span className="fs-3 "><i class="bi bi-star-fill text-warning"></i></span>

                    <span className='fs-1 text-main2'>Full-Stack Development Training</span>
                    <span className="fs-3"><i class="bi bi-plus-lg text-main2"></i></span>
                    <span className='fs-1 white-stroke'>Internship </span>
                    <span className="fs-3"><i class="bi bi-plus-lg text-main2"></i></span>
                    <span className='fs-1 text-main2'>Unlimited Placement </span>

                    <span className="fs-3 "><i class="bi bi-star-fill text-warning"></i></span>
                </div>
            </marquee>
        </div>
        <Diffrence/>

        <Fullstack/>

        <Features/>

        <Faqs/>
    </div>
  )
}

export default Home