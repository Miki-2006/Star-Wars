import React, { useEffect } from 'react'
import LinkComponent from '../LinkComponent'
import Logo from '../Logo';
import { useCallback, useState } from 'react';

const Header = () => {
  const [items, setItems] = useState([
    { id: 1, value: "Персонажи", className: "link", to: '/characters' },
    { id: 2, value: "Планеты", className: "link", to: '/planets' },
    { id: 3, value: "Корабли", className: "link", to: '/starships' },
    { id: 4, value: "Фильмы", className: "link", to: '/films' }
  ])

  const handleClick = useCallback((id) => {
    const updatedItems = items.map(el => { 
      if(el.className === "link_click"){
        return {...el, className: "link"}
      } else if (el.id === id) {
        return { ...el, className: "link_click" }
      } else {
        return el;
      }
    })
    setItems(updatedItems);
  }, [])
  localStorage.setItem('links', JSON.stringify(items))
  return (
    <header>
        <div>
            <Logo/>
            <div >
              <ul className='ul_pages' style={{display: 'flex',justifyContent: 'center', gap: '30px', marginTop: '20px'}}>
              {
                (JSON.parse(localStorage.getItem('links'))).length > 0
                ? 
                JSON.parse(localStorage.getItem('links'))?.map(el => (
                  <li key={el.id}><LinkComponent clas={el.className} onClick={() => handleClick(el.id)} path={el.to}>{el.value}</LinkComponent></li>
                ))
                :
                items.map(el => (
                  <li key={el.id}><LinkComponent clas={el.className} onClick={() => handleClick(el.id)} path={el.to}>{el.value}</LinkComponent></li>
                ))
              }
              </ul>
            </div>
        </div>
    </header>
  )
}

export default Header