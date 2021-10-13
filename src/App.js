import './App.css';
import './assets/style.css'
import Header from './components/header';
import Home from './components/home';
import AppHeader from './components/navbar'
import Fetch from './Fetch';


function App() {

  const { data: api, loading, error } = Fetch('https://pokeapi.co/api/v2/pokemon/')  

  // console.log(api.results)
  return (
      <div className='App'>
        {/* Header */}
        <AppHeader api = {api} />
        <div className='Content'>
            {/* Disini Isi */}
            {/* <Home /> */}
            <div className='corausel'>
              {loading && <div><h1>Now Loading...</h1></div>}
              {error && <div><h1> { error } </h1></div>}
              {api && <Header api={api} />}
            </div>

        </div>
      </div>
    );
}

export default App;
