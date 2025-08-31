import './css/App.css'
import MovieCard  from './components/moviecard'
import Home from './pages/Home'
import { Routes, Route} from 'react-router-dom'
import Favourites from './pages/Favourites'
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/MovieContext'

function App(){

  return(
    <MovieProvider>
      <NavBar/>

    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favourites' element={<Favourites/>}/>
      </Routes>
    </main>
    </MovieProvider>


  )
}

//dummy component

Text = ({text})=>{
  return(
    <div>
      <p>{text}</p>
    </div>
  )
}



export default App;