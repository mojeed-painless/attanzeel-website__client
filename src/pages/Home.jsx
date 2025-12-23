import { useState } from 'react';
import  { Link } from 'react-router-dom';
import '../assets/styles/home.css';
import { testimonials } from '../data.js';
import heroImage1 from '../assets/images/hero-image1.png';
import mallam2 from '../assets/images/mallam5.png';
import { categories, activities }  from '../data';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Home() {

    const [currentTestimonial, setCurrentTestimonial] = useState(1);

    function increaseCount() {
        if (currentTestimonial === testimonials.length) {
            setCurrentTestimonial(1);
        } else {
            setCurrentTestimonial(currentTestimonial + 1);
        }
    }

    function decreaseCount() {
        if (currentTestimonial === 1) {
            setCurrentTestimonial(testimonials.length);
        } else {
            setCurrentTestimonial(currentTestimonial - 1);
        }
    }

    return (
        <>
        <article className='hero__section'>
            <div className="container hero__container">
                
                 <div className="hero__cover"></div>

                 <div className="hero__image">
                     <img src={heroImage1} />
                 </div>

                <div className="hero__message">
                    <h1>
                        Your Child is Entitled to a Quality Education that they Deserve
                    </h1>
                    <p>
                        We present a chance to enroll your Child(ren) in a Comprehensive Educational Program that combines Western and Islamic Teachings, ensuring Effectiveness and High Quality.
                    </p>
                    <Link to="/enquiry-form"><div className="btn">Get Started</div></Link>
                </div>
            </div>
        </article>

        <article className='category__section'>
            <div className="container category__container">
                <div className="category__heading">
                    <h1>Category</h1>
                    <p>This is an opportunity to enrol your Child(ren) for Effective, Sound & Qualitative Education on both Western & Islamic Platforms.</p>
                </div>

                <div className="category__links">
                    {categories.map((category) => (
                        <Link key={category.id} to={category.path}>
                            <i><category.icon /></i>
                            <div className="btn3">{category.title}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </article>    

        <article className="activity__section">
            <div className="container activity__container">
                <h1>Our Common Activities</h1>

                <div className="activity__card-container">
                    {activities.map((activity) => (
                        <div key={activity.id} className="activity__card">
                            <div className="activity__image">
                                <img src={activity.image} alt='activity image'/>
                            </div>

                            <div className="activity__message">
                                <h4>{activity.title}</h4>
                                <p>{activity.body}</p>
                            </div>

                            <Link to={activity.path}><div className="btn2">Read More</div></Link>
                        </div>
                    ))}
                </div>

               <Link to='/activity'><div className="btn btn1">View More</div></Link>
            </div>
        </article>

        <article className="testimonial__section">
            <div className="container testimonial__container">
                <h1>What Parents Say About Us</h1>
                
                <div className="testimonial__controls">
                    <button type="button" onClick={decreaseCount}><FaRegArrowAltCircleLeft /></button>

                    <div className="testimonial__cards">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className={"testimonial__card" + (testimonial.id === currentTestimonial ? " active-testimonial__card" : "")}>
                                <div className="testimonial__image">
                                    <img src={testimonial.image} alt="image" />
                                </div>

                                <p>"{testimonial.testimony}"</p>

                                <div className="testimonial__info">
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.profession}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <button type="button" onClick={increaseCount}><FaRegArrowAltCircleRight /></button>
                </div>

                <div className="testimonial__pagination">
                    {testimonials.map((testimonial) => (
                        <div 
                            key={testimonial.id} 
                            className={"pagination__dot" + (testimonial.id === currentTestimonial ? " active-pagination__dot" : "")}
                            onClick={() => setCurrentTestimonial(testimonial.id)}
                        ></div>
                    ))}
                </div>
            </div>
        </article>



        </>
    )
}