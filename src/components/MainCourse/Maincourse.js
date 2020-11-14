import React, { useState } from 'react';
import fakeData from '../fakeData';
import './MainCourse.css';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';



const MainCourse = () => {
    const first15 = fakeData.slice(0, 15);
    const [courses, setCourses] = useState(first15);
    const [cart, setCart] = useState([]);
    
    // const handleAddCourse = (course) => {
    //     console.log('added');
    // }
    
    const handleAddCourse = (course)=> {
        const newCart = [...cart, course];
        setCart(newCart);  
    }

    return (
        <div className="mainCourse">
            <div className="course-container">
                <ul>
                    {
                        
                        courses.map(allCourse => <Course  handleAddCourse={handleAddCourse}
                            course={allCourse}
                            ></Course>)
                    }
                </ul>
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default MainCourse;