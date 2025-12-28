import CategoryArticle from '../components/CategoryArticle';
import prebasicImage1 from '../assets/images/welcome3.jpg';
import prebasicImage2 from '../assets/images/welcome4.jpg';
import prebasicImage3 from '../assets/images/welcome5.jpg';

export default function BasicSection() {
    return (
        <>
            <CategoryArticle
                category='prebasic'
                className='prebasic__left' 
                header="Begining the Journey from the Cradle (Play Group, Kindergarten 1 & 2)"
                mainImage={prebasicImage1}
            >
                <p>Cultivating a strong educational foundation right from the cradle, this section is dedicated to nurturing and inspiring the minds of our youngest learners through engaging and enriching experiences.</p>
            </CategoryArticle>



            <CategoryArticle
                category='nursery'
                className='nursery__left'
                header="Nurturing Cognitive Development (Nursery 1 & 2)"
                mainImage={prebasicImage2}
            >
                <p>Within our nursery section, we emphasize nurturing young minds by offering a stimulating environment that aids in developing essential cognitive skills crucial for their future learning journey.</p>
            </CategoryArticle>



            <CategoryArticle
                category='basic'
                className='primary__left'
                header="Cultivating the Curious Intellect (Primary 1 - 6)"
                mainImage={prebasicImage3}
            >
                <p>In our primary section, we are dedicated to nurturing the inquisitive minds of young learners, fostering a love for learning, and empowering them to explore knowledge with curiosity and enthusiasm.</p>
            </CategoryArticle>
        </>
    )
}