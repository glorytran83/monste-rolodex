import React from 'react';
import './searchBox.styles.css';

const SearchBox = ({placeholder, handleChange}) => {
    return (
        
             <input className='search'
              type='search' 
              placeholder= {placeholder} 
              onChange= {handleChange}>

          </input>
        
    );
};

export default SearchBox;