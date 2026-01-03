import { useState } from 'react';
import  { Link } from 'react-router-dom';
import HeaderInformation from '../components/HeaderInformation.jsx';
import '../assets/styles/home.css';
import { testimonials } from '../data.js';
import heroImage1 from '../assets/images/hero-image1.png';
import maleAnonymous from '../assets/images/male-anonymous.jpg';
import femaleAnonymous from '../assets/images/female-anonymous.jpg';
import { statistics, categories, activities } from '../data';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import qoutationMark1 from "../assets/images/qoutation-mark.png";
import qoutationMark2 from "../assets/images/qoutation-mark2.png";

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
        <header>
            <HeaderInformation />
        </header>

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
                    <a href="https://wa.me/2348120168494" target="_blank" rel="noopener noreferrer"><div className="btn">Get Started</div></a>
                </div>
            </div>
        </article>

        <article className='statistics__section'>
            <div className="container statistics__container">
                <div className="statistics__cards">
                    {statistics.map(({ id, icon, title, description }) => (
                        <div key={id} className="statistics__card">
                            <div>
                                <img src={icon} alt="" />
                            </div>
                            
                            <span>
                                <img src={icon} alt="" />
                            </span>

                            <h1>{title}</h1>

                            <small>{description}</small>
                        </div>
                    ))}
                </div>
            </div>
        </article>

        <article className='category__section'>
            <div className="container category__container">
                <div className="category__heading">
                    <h1>Categories</h1>
                    <p>Explore a structured range of academic programs and activities tailored to support excellence and growth.</p>
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
                                <small>{activity.body}</small>
                            </div>

                            {/* <Link to={activity.path} className="btn2">Read More</Link> */}
                        </div>
                    ))}
                </div>

               <Link to=''><div className="btn btn1">View More</div></Link>
            </div>
        </article>

        <article className="testimonial__section">
            <div className="container testimonial__container">
                <h1>What Parents Say About Us</h1>
                
                <div className="testimonial__controls">
                    <button type="button" onClick={decreaseCount}><FaRegArrowAltCircleLeft /></button>

                    <div className="testimonial__cards">
                        {testimonials.map(({id, testimony, image, name, profession, gender}) => (
                            <div key={id} className={"testimonial__card" + (id === currentTestimonial ? " active-testimonial__card" : "")}>
                                <small>
                                    <span>
                                        <img src={qoutationMark1} alt="" />
                                    </span>

                                    {testimony}
                                
                                    <span>
                                        <img src={qoutationMark2} alt="" />
                                    </span>
                                </small>

                                <div className="testimonial__footer">
                                    <div className="testimonial__image">
                                        <img src={image ? image : gender === 'male' ? maleAnonymous : femaleAnonymous} alt="image" />
                                    </div>

                                    <div className="testimonial__info">
                                        <h4>{name}</h4>
                                        <p>{profession}</p>
                                    </div>
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