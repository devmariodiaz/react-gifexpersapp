import React, { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';
import { getGifs } from './helpers/getGif';
import { useFetchGif } from './hooks/useFetchGif';

export const GifGrid = ({ category }) => {

    // const [counter, setCounter] = useState(0);

    // const [images, setImages] = useState([]);

    const { data: images, loading } = useFetchGif(category);
    
    // useEffect(() => {
    //     getGifs();
    // }, []);

    // useEffect(() => {
    //     getGifs(category)
    //     .then(imgs => setImages(imgs));
    // }, []);

    // useEffect(() => {
    //     getGifs(category)
    //     .then( setImages );
    // }, [ category ]);

    return (
        <div>

            <h3>{ category }</h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p>}

            <ol>
                <div className="card-grid">

                {
                    images.map((img) => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img } />

                        // <li key={ id }>
                        //     { title}
                        // </li>
                    ))
                    // images.map(img => (
                    //     <li key={ img.id }>
                    //         { img.title}
                    //     </li>
                    // ))
                }
                </div>
                
            </ol>
            {/* <h3>{ counter }</h3>
            <button onClick={ () => setCounter(counter + 1) } ></button> */}
        </div>
    )
}
