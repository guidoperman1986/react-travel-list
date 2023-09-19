import { useState } from "react";
import { Logo } from "./components/Logo";
import { Form } from "./components/Form";
import { PackingList } from "./components/PackingList";
import { Stats } from "./components/Stats";

/* eslint-disable react/prop-types */
function App() {
  const [items, setItems] = useState([])

  function handleAddItems(newItem) {
    setItems(items => [...items, newItem])
  }

  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id))
  }

  const handleToggleItem = (id) => {
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item))
  }

  return <div className='app'>
    <Logo></Logo>
    <Form onAddItems={handleAddItems}></Form>
    <PackingList 
      items={items} 
      onDeleteItem={handleDeleteItem} 
      onToggleItem={handleToggleItem}>
    </PackingList>
    <Stats items={items}></Stats>
  </div>
}

export default App