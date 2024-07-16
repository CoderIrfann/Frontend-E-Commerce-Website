import React from 'react'
import list from '../list';
import Card from './Card';


function Shope({handelClick}) {
  return (
    <section className='  gap-2 border px-5 py-5 m-2 p-1 rounded mt-5  bg-slate-300 '> 
        {list.map((item)=>{
            return <Card item={item} key={item.id} handelClick={handelClick}></Card>
        })}
    </section>
  )
}

export default Shope