import './Imagelist.css';
import React from 'react';
import ImageCard from './ImageCard';


const Imagelist=(props)=>{



        

    const image=props.images.map((image) =>{ return(<ImageCard key={image.id} image={image}/>)});


    return <div className="image-list">{image}</div>

};

export default Imagelist;