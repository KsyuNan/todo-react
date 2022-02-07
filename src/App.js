import {useState} from "react";
import {Header} from "./components/header/header";
import {AddItem} from "./components/add-item";
import {Content} from "./components/content/content";
import {Footer} from "./components/footer/footer";

function App() {

    const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));

        /*[
        {
            id: 1,
            checked: true,
            item: "One half of Cocoa"
        },
        {
            id: 2,
            checked: false,
            item: " Unsalted"
        },
        {
            id: 3,
            checked: false,
            item: "One half Unsalted"
        }
    ]);
         */

    const [newItem, setNewItem] = useState('');

    const setAndSaveItems = (newItems) => {
        setItems(newItems);
        localStorage.setItem('shoppinglist', JSON.stringify(newItems));
    }

    const addItem = (item) => {
        const id = items.length ? items[items.length -1].id + 1 : 1;
        const myNewItem = { id, checked: false, item};
        const listItems = [...items, myNewItem];
        setAndSaveItems(listItems);
    }

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setAndSaveItems(listItems);
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setAndSaveItems(listItems);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!newItem) return;
        addItem(newItem)
        setNewItem('');
    }

  return (
    <div className="App">
        <Header title="Groceries list" />
        <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        />
        <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
        <Footer length={items.length}/>
    </div>
  );
}

export default App;
