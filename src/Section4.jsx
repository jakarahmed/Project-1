
import { useState, useEffect } from 'react';

const Section4 = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetch('../public/fake.json')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setPhotos(data);
          });
      }, [])

    console.log(photos)
    return (
        <div>
          <div className="justify-center  flex my-10"> 

<div className="space-y-5 text-center">
<p className="text-[#D99904] b">---From 11:00am to 10:00pm---</p>
<h2 className="text-2xl py-2 border-dotted border-black border-y-2">ORDER ONLINE</h2>
</div>
</div>
          
    <div className='grid md:grid-cols-2 gap-4 my-10'>
      
      {photos.map((photo,title) => (
        <div key={title} className=''>

   <div className='flex space-x-3 space-y-6'>
   <img className='rounded-t-[0px] rounded-r-[500px] w-[200px] h-[104px] rounded-b-[200px] rounded-l-[200px]' src={photo.img} alt="" />
<div className='space-y-5'>
<h2 className='text-lg'>{photo.title}   --------------  </h2>
        <p className='text-base '>{photo.paragraph}</p>
</div>
        <p className='text-[#D99904]'>{photo.dollar_price}</p>
   </div>
        </div>
      ))}

     
    </div> <button className=' btn px-5 py-2 flex justify-center m-auto border-b-4 border-black'> View deatils</button>

    
<div className="bg-black mt-10">

<div className="flex justify-center p-28">
   <p className='text-3xl text-slate-50'> Call Now: 01323698533</p>
</div>
</div>
        </div>
    );
};

export default Section4;