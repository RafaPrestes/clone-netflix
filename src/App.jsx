import './App.css'
import Tmdb from './api/Tmdb'
import MovieRow from './components/movieRow/MovieRow'
import FeatureMovie from './components/featureMovie/FeatureMovie'
import HeaderNav from './components/headerNav/HeaderNav'

import React, {useEffect, useState} from 'react'

const App = () => {
  const [movieList, setMovieList] = useState([])
  const [featureData, setFeatureData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // pegando a lista total de filmes
      let list = await Tmdb.getHomeList();
      setMovieList(list)

      // pegando o filme em destaque (feature)
      let originals = list.filter(i => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    }
    loadAll()
  }, [])

  // adicionar e remover o preto do header
  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scrollListener)
    
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  } , [])

  return (
    <div className='page'>
      <HeaderNav black={blackHeader}/>
      
      {featureData && <FeatureMovie item={featureData} />}

    <section className='lists'>
      {movieList.map((item, key) => ( 
          <MovieRow key={key} title= {item.title} items={item.items}/>    
      ))}
    </section>

    <footer>
      Feito com <span role="img" aria-label="coração">❤️</span> pelo Rafael Prestes <br />
      Direitos de imagem para Netflix <br />
      Dados pegos do site Themoviedb.org
    </footer>
    </div>
  )
}

export default App