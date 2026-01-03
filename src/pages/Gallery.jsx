import { useState } from 'react';
import FilterButton from '../components/FilterButton';
import '../assets/styles/gallery.css';
import { mainGallery } from '../data';
import { FaPhotoFilm } from "react-icons/fa6";
import { RowsPhotoAlbum } from "react-photo-album";
import { MdCancel } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import "react-photo-album/rows.css";

export default function Gallery() {

    const [galleryId, setGalleryId] = useState(0);
    const [activeAlbum, setActiveAlbum] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [activeFilter, setActiveFilter] = useState(false)

    function handleFilterClick(category) {
        setSelectedCategory(category);
        setActiveFilter(af => !af);
    }

    function handleSelect(selectedId) {
        setGalleryId(selectedId);
        setActiveAlbum(aa => !aa);
    }

    function handleActiveState() {
        setActiveAlbum(aa => !aa);
    }

    const selectedGallery = mainGallery.find((gallery) => (
        gallery.id === galleryId
    ));

    return (
        <article className="gallery__section">
            <div className="container gallery__container">
                
                <div className="gallery__filter">
                    <button className="gallery__filter-btn" onClick={()=> setActiveFilter(af => !af)}>
                        <span><FiFilter /></span>
                        <span>filter</span>
                    </button>

                    <div className={`gallery__filter-dropdown ${activeFilter ? "active-gallery__filter" : ''}`}>
                        <button type='button' onClick={() => handleFilterClick('All')}>All</button>
                        <button type='button' onClick={() => handleFilterClick('Prize Giving')}>Prize Giving</button>
                        <button type='button' onClick={() => handleFilterClick('Fruit Day')}>Fruit Day</button>
                        <button type='button' onClick={() => handleFilterClick("Childrens' Day")}>Childrens' Day</button>
                        <button type='button' onClick={() => handleFilterClick('Excursion')}>Excursion</button>
                        <button type='button' onClick={() => handleFilterClick('Craft')}>Craft</button>
                        <button type='button' onClick={() => handleFilterClick('PTA')}>PTA</button>
                    </div>
                </div>

                <div className="gallery__cards">
                    {mainGallery.map(({id, thumbnail, caption, category, images}) => (
                        <div key={id} className={`gallery__card ${category === selectedCategory || selectedCategory === 'All' ? "active-gallery__card" : ''}`} onClick={() => handleSelect(id)}>
                            <div className="gallery__image">
                                <img src={thumbnail} alt={caption} />
                            </div>

                            <p>{caption}</p>

                            <div className="gallery__number">
                                <i><FaPhotoFilm /></i>
                                <small>{images.length}</small>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`gallery__album ${!activeAlbum ? 'active-gallery__album' : ""}`}>
                    <small onClick={handleActiveState}><MdCancel /></small>
                    {selectedGallery && (
                        <>
                            <p>{selectedGallery.caption}</p>
                            <RowsPhotoAlbum 
                                photos={selectedGallery.images} 
                            />
                        </>
                    )}
                </div>
            </div>
        </article>
    )
}