import React from 'react'

export default function Menu({menuItems}) {
  return (
    <section>
      {menuItems.map(({title, price, img, desc, id}) => 
        <div key={id}>
          <img src={img} alt={title} className="photo" />
          <h2 className="title">{title}</h2>
          <p>{desc}</p>
          <span>${price}</span>
        </div>
      )}
    </section>
  )
}