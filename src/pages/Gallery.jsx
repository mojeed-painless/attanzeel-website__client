import { useState, useRef } from 'react';
import FilterButton from '../components/FilterButton';
import '../assets/styles/gallery.css';
import { mainGallery } from '../data';
import { FaPhotoFilm } from "react-icons/fa6";
import { RowsPhotoAlbum } from "react-photo-album";
import { MdCancel } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Gallery() {

    const [galleryId, setGalleryId] = useState(0);
    const [activeAlbum, setActiveAlbum] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [activeFilter, setActiveFilter] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const thumbnailsRef = useRef(null);

    function handleFilterClick(category) {
        setSelectedCategory(category);
        setActiveFilter(af => !af);
    }

    function handleSelect(selectedId) {
        setGalleryId(selectedId);
        // setActiveAlbum(aa => !aa);
        setLightboxOpen(true);
    }

    function handleActiveState() {
        setActiveAlbum(aa => !aa);
    }

    function handleLightboxOpen(index) {
        setLightboxIndex(index);
        setLightboxOpen(true);
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

                {/* <div className={`gallery__album ${!activeAlbum ? 'active-gallery__album' : ""}`}>
                    <small onClick={handleActiveState}><MdCancel /></small>
                    {selectedGallery && (
                        <>
                            <p>{selectedGallery.caption}</p>
                            <RowsPhotoAlbum 
                                photos={selectedGallery.images} 
                                onClick={({ index }) => handleLightboxOpen(index)}
                            />
                        </>
                    )}
                </div> */}
            </div>

            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={selectedGallery ? selectedGallery.images : []}
                index={lightboxIndex}
                plugins={[Counter, Thumbnails]}
                counter={{ container: { style: { top: "unset", bottom: 0 } } }}

                thumbnails={{ ref: thumbnailsRef }}
                on={{click: () => {
                    (thumbnailsRef.current?.visible ? thumbnailsRef.current?.hide : thumbnailsRef.current?.show)?.();
                }}}
            />
        </article>
    )
}