import { useState } from 'react';
import '../assets/styles/gallery.css';
import { mainGallery } from '../data';
import { FaPhotoFilm } from "react-icons/fa6";
import { RowsPhotoAlbum } from "react-photo-album";
import { MdCancel } from "react-icons/md";
import "react-photo-album/rows.css";

export default function Gallery() {

    const [galleryId, setGalleryId] = useState(0);
    const [activeAlbum, setActiveAlbum] = useState(true);

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
                <div className="gallery__cards">
                    {mainGallery.map(({id, thumbnail, caption, images}) => (
                        <div key={id} className="gallery__card" onClick={() => handleSelect(id)}>
                            <div className="gallery__image">
                                <img src={thumbnail} alt={caption} />
                            </div>

                            <h5>{caption}</h5>

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