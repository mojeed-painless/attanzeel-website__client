import { useState } from 'react';
import '../assets/styles/category-article.css';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { gallery } from '../data';

export default function CategoryArticle({ className, header, children, mainImage, category }) {
    
    const [open, setOpen] = useState(false);
    const [currentClass, setCurrentClass] = useState('');

    function handleClick(category) {
        setOpen(o => !o);
        setCurrentClass(category);
    }

    const selectedGallery = gallery.find(item => item.title === currentClass);

    return (
        <>
        <article className="class__section">
            <div className="class__container">
                <div className="class__content">
                    <div className={`class__left ${className}`}>
                        
                    </div>

                    <div className="class__right">
                        <h3>{header}</h3>
                        {children}
                        <div className="class__gallery">
                            <img src={mainImage} alt="" />
                        </div>
                        <button type="button" className='btn2' onClick={() => handleClick(category)}>Class Gallery</button>
                    </div>
                </div>

                

                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={selectedGallery ? selectedGallery.images : []}
                />
            </div>
        </article>

        
        </>
    )
}