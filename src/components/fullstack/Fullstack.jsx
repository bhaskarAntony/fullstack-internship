import React from 'react'
import './style.css'
import { usePopup } from '../../context/PopupContext';

function Fullstack() {
    const { openPopup } = usePopup();

  const handleClick = () => {
    openPopup(<div>This is your popup content!</div>); // Customize popup content here
  };
    const courses = [
        {
            title:'MERN Full Stack',
            techs:[ 'MongoDB', 'Express', 'React', 'Node.js', 'HTML', 'CSS', 'Bootstrap', 'Javascript']
        },
        {
            title:'Java Full Stack',
            techs:['Java','Spring Boot', 'Hibernate', 'React', 'HTML', 'CSS', 'Bootstrap', 'Javascript']
        },
        {
            title:'Python Full Stack',
            techs:['Python', 'Django/Flask', 'PostgreSQL', 'React', 'HTML', 'CSS', 'Bootstrap', 'Javascript']
        }
    ]
  return (
    <section className=''>
      <center className="my-3 p-3 p-md-5">
      <h1 className="fs-1 fw-bold">Full-Stack Development <br /> Training <span className="text-main2">+</span> Internship <span className="text-main2">+</span> Unlimited Placement  <span className="text-main2"> (₹20000/-)</span></h1>

      <button className="main-btn mt-3" onClick={handleClick}>Check Now</button>
    
      </center>

      <div className="choose p-3 p-md-5 container-fluid">
            <h1 className="fs-1 fw-bold text-white text-center">Choose from 3 Full-Stack <span className="text-main2">Development Tracks</span></h1>
            <p className="fs-6 fw-400 text-main2 text-center"> 6 months (3 months training + 3 months internship)      </p>
            <div className="row mt-3">
                {
                    courses.map((item, index)=>(
                       <div className="col-md-4 mb-3">
                         <div className="choose-card p-3 h-100 d-flex flex-column justify-content-between">
                            <div className="view"onClick={handleClick}>
                            <i class="bi bi-arrow-up-right fs-3"></i>
                            </div>
                            <h1 className="fs-2 fw-bold title">{item.title}</h1>
                            <div className="techs d-flex flex-wrap gap-2 mt-3">
                                {
                                    item.techs.map((tech, techIndex)=>(
                                        <button className="tech-btn"> {tech}</button>
                                    ))
                                }
                            </div>
                        </div>
                       </div>
                    ))
                }
            </div>
      </div>
    </section>
  )
}

export default Fullstack