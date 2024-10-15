import React from 'react'
import './style.css'
import Header from '../header/Header'
import ApplyForm from '../form/ApplyForm'

function Hero() {
  return (
    <section className='hero bg-main'>
        <Header/>
       <div className="container-fluid p-3 p-md-5">
            <div className="row align-items-center">
                <div className="col-md-8">
                    <div className="hero-left">
                        <h1 className="display-4 fw-8 text-main">Jumpstart <span className="text-main2">Your</span> <br /> <span className="dark-stroke">Full-Stack</span> Development  Career with a <br /> <span className="text-main2">3-Month <span className="dark-stroke">Internship</span></span></h1>
                        <ul className="hero-points fs-6">
                            <li>Hands-on project experience in full-stack development.</li>
                            <li>Work with popular technologies like HTML, CSS, JavaScript, React, Node.js, MongoDB, etc.</li>
                            <li>Guided project-based learning with real-world application.</li>
                            <li>Mentorship from industry experts.</li>
                            <li>Access to all necessary tools and software for the internship.</li>
                            <li>Weekly code reviews and feedback sessions.</li>
                            <li>Internship completion certificate.</li>
                        </ul>
                        <button className="main-btn px-5 mt-2 p-2 rounded p-3 fs-5">Enroll Now</button>
                    </div>
                </div>
                <div className="col-md-4 mt-md-0 mt-3">
                    <div className="hero-right">
                        <ApplyForm/>
                    </div>
                </div>
            </div>
       </div>
    </section>
  )
}

export default Hero