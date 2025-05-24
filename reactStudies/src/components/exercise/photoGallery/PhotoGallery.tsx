"use client"

import { photoList } from "@/data/photoList";
import { PhotoItem } from "./PhotoItem";
import { useState } from "react";
import { PhotoModal } from "./PhotoModal";

export const PhotoGallery = () => {

    const [showModal, setShowModal] = useState(false);
    const [imageOfModal, setImageOfModal] = useState('');

    function openModal(id: number) {
        const photo = photoList.find(photo => photo.id === id);

        if(photo) {
            setImageOfModal(photo.url);
            setShowModal(true);
        }
    }

    function closeModal() {
        setShowModal(false);
    }

    return(
        <>
            <div className="flex flex-col text-lg items-center p-5 bg-slate-900 rounded-md">
                <h1 className="text-2xl mb-5">Galeria de Fotos</h1>

                <section className="container max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {photoList.map(photo => (
                        <PhotoItem 
                            key={photo.id}
                            photo={photo}
                            onClick={() => openModal(photo.id)}
                        />
                    ))}
                </section>

                {showModal &&
                    <PhotoModal image={imageOfModal} closeModal={closeModal} />
                }
            </div>
        </>
    );
}