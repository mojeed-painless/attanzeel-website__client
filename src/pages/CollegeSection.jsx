import CategoryArticle from '../components/CategoryArticle';
import prebasicImage from '../assets/images/welcome3.jpg';

export default function CollegeSection() {
    return (
        <>
        <CategoryArticle
            className='jss__left' 
            header="Enouraging the Growth of Unique Talents and Skills (J S S 1 - 3)"
            mainImage={prebasicImage}
        >
            <p>Within our junior secondary section, we are committed to fostering a supportive environment that allows students to develop their unique talents and skills, preparing them for a diverse range of future endeavors.</p>
        </CategoryArticle>

        <CategoryArticle
            className='ss__left' 
            header="Nurturing Passions for Success Ahead (S S 1 - 3)"
            mainImage={prebasicImage}
        >
            <p>We Empower our senior secondary students to cultivate their unique passions and aptitudes which equips them with the tools needed to navigate higher education and embrace the diverse possibilities that await them.</p>
        </CategoryArticle>
        </>
    )
}