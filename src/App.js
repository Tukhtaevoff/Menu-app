import './App.css';
import React, {useState} from 'react';
import Menu from './components/Menu';
import Categories from './components/Categories';
import items from './components/data';
const AllCategories = ["All", ...new Set(items.map((item) => item.category))];

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(AllCategories);

  const filteredItem = (category) => {
    if(category === 'All') {
      setMenuItems(items)
      return;
    }
    const newItems = items.filter(item => item.category === category);

    setMenuItems(newItems);
  }

  return (
    <main>
      <section className='menu section'>
        <div className="title">
          <h2 className='title'>Our menu</h2>
          <Categories categories={categories} filteredItems={filteredItem} />
        </div>
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
