import React from 'react'
import './Categories.css'

const Categories = ({categories, filteredItems}) => {
  return (
    <div className='btn-container'>
        {
          categories.map((category, index) => {
             return (
               <button type='button' className='filter-btn' key={index} onClick={() => filteredItems(category)}>
                {category}
               </button>
             )
          })
        }
    </div>
  )
}

export default Categories;