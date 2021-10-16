import React,{useState,useEffect} from 'react'
import Cards from "./components/Cards";
import axios from 'axios'
// import data from "./data.json";

const App = () => {
  const[itemList, setItemList] = useState([]);
  useEffect(() =>{
    // fetch('https://breakingbadapi.com/api/characters')
    // .then(response=> response.json())
    // .then((data)=>setItemList(data))

    axios.get('https://breakingbadapi.com/api/characters')
    .then((response)=>setItemList(response.data))
  },[])
  return (
    <div className="App">
      <header>
        <img className='App_img'
          src="https://i.pinimg.com/originals/d3/bb/d0/d3bbd00fc97e601c6dabca395af2e7f6.png"
          alt="logo"
        />
      </header>

      <div className="container">
        {itemList.map((item) => (
          <Cards key={item.char_id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
