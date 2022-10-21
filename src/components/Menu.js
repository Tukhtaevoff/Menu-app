import React from 'react'

const Menu = ({items}) => {
  return (
    <div className='section-container'>
        {items.map((item) => {
            const { id, title, img, desc, price } = item;
            return (
                <article className='menu-item' key={id}>
                    <img className='photo' src={img} alt={title} />
                    <div className='item-info'>
                        <header>
                            <h4>{title}</h4>
                            <h4>{price}</h4>
                            <p>{desc}</p>
                        </header>
                    </div>
                </article>
            )
        })}
    </div>
  )
}

export default Menu;