import Cards from './components/Cards';
import data from './data.json'

const App = () => {
  return (
    <div className = 'App'>
      <header>
        <img src = 'https://images.wallpapersden.com/image/download/breaking-bad-criminal-elements_a2pmZ2WUmZqaraWkpJRnbGhnrWdlaW0.jpg' alt="Breaking Bad "/>
      </header>

      <div className="cards">
            {/* {data.map((item)=>(
              <Card key={item.char_id} item={item.name} />
            ))} */}
            <Cards/>
      </div>
      
    </div>
  )
}

export default App
