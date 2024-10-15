import React from 'react'
import './style.css'

function Features() {
    const data1 = [
        {
            title:'MERN Full Stack',
            points:['Master building web applications using MongoDB, Express, React, and Node.js.', 'Hands-on experience with RESTful APIs, server-side programming, and frontend development with React.']
        },
        {
            title:'Java Full Stack',
            points:[
                'Backend development using Java, Spring Boot, and Hibernate.',
                'Frontend development with React, building dynamic user interfaces.'
            ]
        },
        {
            title:'Python Full Stack',
            points:['Learn Python with Django/Flask for backend, PostgreSQL for database management, and React for the frontend.']
        },
        {
            title:'Common Features',
            points:[
                'Profile Building Sessions: Guidance on crafting your professional online presence (LinkedIn, GitHub), personal branding, and preparing for the job market.',
                '5 Full-Stack Market Standard Projects: Build and deploy five real-world applications, solving business-level problems. These projects are designed to meet current industry standards and showcase your skills to employers.',
                'Weekly live coding sessions and interactive Q&A with industry experts.',
                'Personal mentorship and feedback to ensure project success.'
            ]
        }
    ]


    const data2 = [
        {
            title:'Real-World Projects',
            image:'https://cdn-icons-png.flaticon.com/128/16803/16803859.png',
            points:[
                'Hands-on projects for live clients or one of our 390+ partner companies',
                'Apply the full-stack skills from your chosen track to real-world problems, developing scalable and efficient solutions.'
            ]
        },
        {
            title:'Team Collaboration',
            points:[
                'Collaborate in teams, applying Agile methodologies, code reviews, and using version control systems like Git.'
            ],
            image:'https://cdn-icons-png.flaticon.com/128/17986/17986619.png'
        },
        {
            title:'Mentorship & Feedback',
            points:[
                'Regular one-on-one mentorship with industry professionals.',
                'Project reviews, feedback, and career guidance to refine your work.',
                'Build a professional portfolio of 5 full-stack projects, which can be showcased to potential employers during placement.'
            ],
            image:'https://cdn-icons-png.flaticon.com/128/9123/9123820.png'
        },
        {
            title:'Portfolio Building',
            points:[
                'Build a professional portfolio of 5 full-stack projects, which can be showcased to potential employers during placement.'
            ],
            image:'https://cdn-icons-png.flaticon.com/128/9249/9249511.png'
        }
    ]
  return (
    <section className='features'>
        <center className='p-2 p-md-5'>
        <div className="bar my-4"></div>
        <div className="icon">
        <i class="bi bi-1-circle-fill fs-1 text-main"></i>
        
        </div>
        <div className="bar my-4"></div>
        <h1 className="fs-3 fw-bold mb-5">Full Training Program <span className="text-main2">(3 months)</span></h1>
        </center>

        <section className="bg-main p-3 p-md-5 container-fluid">
            <div className="row">
                {
                    data1.map((item, index)=>(
                        <div className="col-md-6 mb-4">
                        <div className="card p-4 border-0 h-100 feature1-card rounded-4">
                            <h3 className="fs-4 fw-7 mb-4">{item.title}</h3>
                            <ul>
                                {
                                    item.points.map((subItem, subIndex)=>(
                                        <li className="fs-6">{subItem}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    ))
                }
            </div>
        </section>

        <center className='p-2 p-md-5'>
        <div className="bar my-4"></div>
        <div className="icon">
        <i class="bi bi-2-circle-fill fs-1 text-main"></i>
        
        </div>
        <div className="bar my-4"></div>
        <h1 className="fs-3 fw-bold mb-5">Internship Program <span className="text-main2">(3 months)</span></h1>
        </center>
        <section className="container-fluid p-3 p-md-5 feature2">
                <div className="row">
                    {
                        data2.map((item,  index)=>(
                            <div className="col-md-3 mb-4">
                                <div className="feature2-card p-3 h-100 pb-5">
                                    <img src={item.image} alt={item.title} className='w-25 m-ato  mb-3 d-block' />
                                    <h4 className="fs-5 fw-bold">{item.title}</h4>

                                    <ul>
                                        {
                                            item.points.map((item, index)=>(
                                                <li className="fs-6">{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>
        </section>
    </section>
  )
}

export default Features