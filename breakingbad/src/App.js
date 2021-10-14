import Cards from './components/Cards';
import data from './data.json'

const App = () => {
    <div className = 'App'>
      <>
        <img src = 'https://cdn.tekzen.com.tr/images/product/decowall/2814614/decowall-duvar-kagidi-beyaz-tugla-desenli-k-9007-02_1000x1000.jpg' alt="Breaking Bad "/>
      </  >
    </div>  
  return (

      <div className="cards">
            {data.map((item)=>(
              <Cards key ={item.char_id} item={item} />
            ))}
            <Cards/>
    
      </div>
      
    
  )
}

export default App
