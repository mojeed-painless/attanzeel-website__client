import { useState } from 'react';
import '../assets/styles/gallery.css';
import { mainGallery } from '../data';
import { FaPhotoFilm } from "react-icons/fa6";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

export default function Gallery() {

    const [galleryId, setGalleryId] = useState('');

    function handleSelect(selectedId) {
        setGalleryId(selectedId)
    }

    const selectedGallery = mainGallery.find(gallery => gallery.id === galleryId || mainGallery[0] );

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

                {/* <div className="gallery__album">
                    <h1>this is a heading</h1>
                    <RowsPhotoAlbum 
                        photos={selectedGallery.images} 
                    />
                </div> */}
            </div>
        </article>
    )
}