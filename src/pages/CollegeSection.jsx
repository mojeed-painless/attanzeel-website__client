import CategoryArticle from '../components/CategoryArticle';
import prebasicImage6 from '../assets/images/welcome6.jpg';
import prebasicImage7 from '../assets/images/welcome7.jpg';

export default function CollegeSection() {
    return (
        <>
        <CategoryArticle
            category='jss'
            className='jss__left' 
            header="Enouraging the Growth of Unique Talents and Skills (Junior Secondary School 1 - 3)"
            mainImage={prebasicImage6}
        >
            <p>Within our junior secondary section, we are committed to fostering a supportive environment that allows students to develop their unique talents and skills, preparing them for a diverse range of future endeavors.</p>
        </CategoryArticle>

        <CategoryArticle
            category='ss'
            className='ss__left' 
            header="Nurturing Passions for Success Ahead (Senior Secondary School 1 - 3)"
            mainImage={prebasicImage7}
        >
            <p>We Empower our senior secondary students to cultivate their unique passions and aptitudes which equips them with the tools needed to navigate higher education and embrace the diverse possibilities that await them.</p>
        </CategoryArticle>
        </>
    )
}