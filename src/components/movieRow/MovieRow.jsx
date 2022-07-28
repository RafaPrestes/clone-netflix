import React, {useState} from 'react'
import './movieRow.css'

import { MdNavigateBefore, MdNavigateNext} from 'react-icons/md'

const MovieRow = ({title, items}) => {
    const [scrollX, setScrollX] = useState(-400)

    const handleLeftArrow = () => {
        
    }

    const handleRightArrow = () => {
        
    }

  return (
    <div className='movieRow'>
        <h2>{title}</h2>

        <div className="movieRow--left" onClick={handleLeftArrow}>
            <MdNavigateBefore style={{fontSize: 50}}/>
        </div>

        <div className="movieRow--right" onClick={handleRightArrow}>
            <MdNavigateNext style={{fontSize: 50}}/>
        </div>

        <div className='movieRow--listArea'>
            <div className="movieRow--list" style={{
                marginLeft: scrollX,
                width: items.results.length * 200
            }}>
                {items.results.length > 0 && items.results.map((item, key) => (
                    <div key={key} className="movieRow--item"> 
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                    </div>
                ))}
            </div>       
        </div>
    </div>
  )
}

export default MovieRow