import React from 'react';
import './course.css';


const Course = (props) => {
    //console.log(props);
    const { course_title, img,price, course_teacher } = props.course;
    return (

        <div className="course">
            {/* <div>
                <img src={img} alt="" />
            </div> */}
            <div className="course-name">
                <h2>{course_title}</h2>
                <p>Course Trainer:{course_teacher}</p>
                <p>Course Fee:{price}</p>
                <br />
                <button className="main-button"
                    onClick={() => props.handleAddCourse(props.course)}>
                    Enroll Now</button>

            </div>
        </div>


    );
}

export default Course;