import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    // const categories = ['One punch', 'Samurai X', 'Dragon Ball']

    const [categories, setCategories] = useState(['One punch']);

    // const handlerAdd = () => {
    //     // setCategories([...categories, 'HunterXHunter']);
    //     setCategories(cats => [...cats, 'HunterXHunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
        
            {/* <button onClick={ handlerAdd }>Agregar</button> */}
            <ol>
                {
                    categories.map(category => {
                        return <GifGrid 
                            category={ category } 
                            key={ category }
                        />
                    })
                }
            </ol>
        </>
    )
}
