import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterCategories = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const filtered = items.filter((item) => item.category === category);
    setMenuItems(filtered);
  };

  return (
    <main>
      <section className="menu section">
        <h1 className="title">Menu</h1>
        <div className="underline"></div>
        <Categories
          filterCategories={filterCategories}
          categories={categories}
        />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
