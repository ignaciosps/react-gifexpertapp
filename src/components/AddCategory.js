import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2 ){
            setInputValue('');
            setCategories( cats => [inputValue, ...cats ]);
        }
    }

    return(
        <form onSubmit={ handleSubmit }>
            <input 
                type="Text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;