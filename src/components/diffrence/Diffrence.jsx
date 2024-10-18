import React from 'react'
import './style.css'

function Diffrence() {
   
  return (
  <section>
    <center className='p-2 p-md-5  p-3 p-md-5'>
        <div className="bar my-4"></div>
        <div className="icon">
        <i class="bi bi-2-circle-fill fs-1 text-main"></i>
        
        </div>
        <div className="bar my-4"></div>
        <h1 className="fs-3 fw-bold mb-5"> Program Comparison<span className="text-main2"> Table  </span></h1>
        </center>

        <section className="diffrence p-3 p-md-5">
            <div className="row">
                <div className="col-md-6 h-100 mb-3">
                <div className="diffrence1 p-3 h-100">
                    <h1 className="fs-3 fw-bold">Fullstack internship</h1>
                    <hr />
                    <br />
                   <table>
                    <tr>
                        <th>Feature</th>
                        <td>Internship Program (₹5000)</td>
                    </tr>
                    <tr>
                        <th>Duration</th>
                        <td>3 months</td>
                    </tr>
                    <tr>
                        <th>Stack Options</th>
                        <td>React Full Stack (MERN)</td>
                    </tr>
                    <tr>
                        <th>Real-World Projects</th>
                        <td>2 Projects</td>
                    </tr>
                    <tr>
                        <th>Profile Building Sessions</th>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <th>Mentorship</th>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <th>Placement Support</th>
                        <td>No</td>
                    </tr>
                    <tr>
                        <th>Certificates</th>
                        <td>Yes</td>
                    </tr>
                   </table>
                    </div>
                </div>
                <div className="col-md-6 h-100 mb-3">
                <div className="diffrence2 p-3 h-100">
                <h1 className="fs-3 fw-bold">Fullstack Course</h1>
                <hr />
                <br />
                <table>
                    <tr>
                        <th>Feature</th>
                        <td>Training + Internship + Placement (₹20000)</td>
                    </tr>
                    <tr>
                        <th>Duration</th>
                        <td>6 months</td>
                    </tr>
                    <tr>
                        <th>Stack Options</th>
                        <td>MERN, Java, Python Full Stack</td>
                    </tr>
                    <tr>
                        <th>5 Market Standard Projects</th>
                        <td>2 Projects</td>
                    </tr>
                    <tr>
                        <th>Profile Building Sessions</th>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <th>Mentorship</th>
                        <td>Weekly + One-on-One Mentorship</td>
                    </tr>
                    <tr>
                        <th>Placement Support</th>
                        <td>Unlimited Placement Opportunities</td>
                    </tr>
                    <tr>
                        <th>Certificates</th>
                        <td>Yes (For Training & Internship)</td>
                    </tr>
                   </table>
                    </div>
                </div>
            </div>
        </section>


  </section>
  )
}

export default Diffrence