import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json";
import {Link} from "react-router-dom";
export default function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 py-4 '>
       <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl' >We're delighted to have u <span className='text-pink-500' >here:)</span></h1>
<p className='mt-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus optio quod dolorum commodi consectetur exercitationem eius fugiat eveniet fuga consequatur cupiditate molestiae, libero tenetur veritatis possimus repellat neque officiis, explicabo, voluptatem doloribus nam? Quia culpa excepturi dolores, qui porro tempora corporis, eaque consectetur libero sunt similique repellendus, nobis officia doloremque.</p>
<Link to="/">
<button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 '>Back</button>
</Link>
</div>
<div className='mt-12 grid grid-clos-1 md:grid-cols-4'>
    {
        list.map((item)=>(
            <Cards key={item.id} item={item}/>
        ))
    }
</div>
    </div>
    </>
  );
}
