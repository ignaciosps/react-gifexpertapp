import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch Man', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch Man']);
/*
    const handleAdd = () => {
        //setCategories( [...categories, 'Hunter x Hunter']);
        //setCategories( cats => [...cats, 'Hunter x Hunter']);
    }
*/
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories={ setCategories } />
            <ol>
                {
                    categories.map( category => ( 
                        <GifGrid 
                            key={category}
                            category={ category }
                        /> 
                    ))
                }
            </ol>

        </>

    );
}

export default GifExpertApp;