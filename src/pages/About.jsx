import { useState } from 'react';
import '../assets/styles/about.css';
import { staff } from '../data';
import { IoArrowDownCircleSharp, IoArrowUpCircleSharp } from "react-icons/io5";
import { FaWhatsappSquare, FaGooglePlusSquare } from "react-icons/fa";
import aboutImage from '../assets/images/about.png';
import missionImage from '../assets/images/mission.png';
import visionImage from '../assets/images/vision.png';
import mottoImage from '../assets/images/motto.png';
import directorImage from '../assets/images/mallam4.png';

export default function About() {

    const [isCollapsed, setIsCollapsed] = useState(true);

    function handleClick() {
        setIsCollapsed(ic => !ic)
    }

    return (
        <>
            <article className="about__section">
                <div className="container about__container special">
                    <div className="about__image">
                        <img src={aboutImage} alt='about image'/>
                    </div>

                    <div className="about__texts">
                        <h1>About Us</h1>
                        <div>
                            <p>
                                Welcome to AT-TANZEEL SCHOOLS IBADAN, a harmonious blend of Western and Islamic education. Our modern methods transform students into active learners through hands-on experiences and real-life examples, enhancing classroom learning.
                            </p>
                            <p>
                                AT-TANZEEL School, where we nurture, build, care, and listen. Our pupils thrive in a dynamic mix of academics and extracurriculars, fostering holistic mental and physical growth.
                            </p>
                            <p>
                                As a co-educational school, AT-TANZEEL embraces the 21st-century approach to education, dedicated to cultivating the complete child.
                            </p>
                            <p>
                                We cater to pre-basic classes, primary 1-5, JSS 1-3, and SS 1-3, instilling Islamic morals and academic excellence. Our commitment lies in unlocking inherent potentials, nurturing skills, and unleashing young minds' brilliance.
                            </p>
                            <p>
                                Engaging in sports, debates, Quran competitions, and coding, our students flourish in diverse extracurricular activities, ensuring a well-rounded education at AT-TANZEEL SCHOOLS IBADAN.
                            </p>
                        </div>
                    </div>
                </div>
            </article>

            <article className="about__section">
                <div className="container about__container">
                    <div className="about__image">
                        <img src={missionImage} alt='mission image'/>
                    </div>

                    <div className="about__texts">
                        <h1>Our Mission</h1>
                        <div>
                            <p>Our mission is to cultivate resilient individuals who can independently carve their path to success, equipped with Knowledge, Skills, and Confidence. To instill a deep sense of God-fearing devotion through Islamic teachings, fostering Moral Values that guide harmonious interactions with others in society.</p>
                        </div>
                    </div>
                </div>
            </article>

            <article className="about__section">
                <div className="container about__container">
                    <div className="about__image">
                        <img src={visionImage} alt='vision image'/>
                    </div>

                    <div className="about__texts">
                        <h1>Our Vision</h1>
                        <div>
                            <p>Our vision at AT-TANZEEL SCHOOLS IBADAN is to be a transformative center of learning, where students are empowered with the Knowledge and Values to navigate the complexities of the modern world. We aspire to produce Confident, Compassionate, and Competent individuals who contribute positively to society while upholding strong Islamic principles.</p>
                        </div>
                    </div>
                </div>
            </article>

            <article className="about__section">
                <div className="container about__container">
                    <div className="about__image">
                        <img src={mottoImage} alt='vision image'/>
                    </div>

                    <div className="about__texts motto__texts">
                        <h1>Our Motto</h1>
                        <div>
                            <p>KNOWLEDGE, VIRTUES AND EXCELLENCE</p>

                            <p>
                                <span>Knowledge:</span> Empowering minds with a diverse and enriching education, equipping students to explore, question, and innovate in a rapidly evolving world.
                            </p>
                            <p>
                                <span>Virtues:</span> Nurturing character through Islamic teachings, fostering empathy, integrity, and a strong sense of ethics.
                            </p>
                            <p>
                                <span>Excellence:</span> Striving for the highest standards in all endeavors, fostering a commitment to continuous improvement and exceptional achievements.
                            </p>                        
                        </div>
                    </div>
                </div>
            </article>

            <article className="team__section">
                <div className="container team__container">
                    <h1>Meet Our Team</h1>

                    <div className="team__layout">
                        <div className="team__director">
                            <div>
                                <div className="team__director-image">
                                    <img src={directorImage} />
                                </div>

                                <div className="team__director-details">
                                    <h3>Ustadh AbdulKabir Fasasi</h3>
                                    <h4>Director, At-Tanzeel Islamic Center</h4>
                                    <p>B.Sc Arabic and Islamic Studies</p>
                                </div>

                                <button className='team__director-citation' onClick={handleClick}>
                                    <span>{ isCollapsed ? 'Read citation' : 'Collapse'} </span>
                                    <i>{ isCollapsed ? <IoArrowDownCircleSharp /> : <IoArrowUpCircleSharp />}</i> 
                                </button>
                            </div>

                            <div className={!isCollapsed ? "citation" : ""}>
                                <p>
                                    ABDUL-KABIR FASASI BALOGUN, hailing from Ibadan, is a distinguished figure in the educational landscape. A graduate of the University of Ilorin with a Bachelor of Science degree in Arabic and Islamic Studies, his academic foundation is robust.
                                </p>
                                <p> 
                                    His leadership prowess shone during his tenure at the Muslim Students Society of Nigeria, University of Ilorin branch, where he led as Amir for two consecutive regimes. His impact on countless students, both academically and morally, remains indelible.
                                </p>
                                <p>
                                    Driven by an innate passion for teaching, he holds numerous teaching professional course certificates. His expertise led him to head multiple startup schools in both Ilorin and Ibadan, capitalizing on his vision and competence.
                                </p>
                                <p> 
                                    His unwavering commitment is embodied in the establishment of AT-TANZEEL SCHOOLS IBADAN, a testament to his determination to create an environment where his expertise flourishes unhindered.
                                </p>
                                <p> 
                                    His generosity and integrity extend to his interactions with staff, fostering a culture of respect and unity. His journey is a testament to his dedication to education and the betterment of young minds.
                                </p>
                            </div>
                        </div>
                        
                        <div className="team__staffs">
                            {staff.map((item) => (
                                <div key={item.id} className="team__staff">
                                    <div>  
                                        <div className="team__staff-image">
                                            <img src={item.image} />
                                        </div>

                                        <div className="team__staff-details">
                                            <h4>{item.name}</h4>
                                            <h5>{item.qualification}</h5>
                                            <p>{item.portfolio}</p>
                                        </div>
                                    </div>

                                    <div className="team__staff-socials">
                                        <a href={item.whatsapp}><FaWhatsappSquare /></a>
                                        <a href={item.gmail}><FaGooglePlusSquare /></a>
                                    </div>
                                </div>  
                            ))}
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}