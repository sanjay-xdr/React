import React from 'react';


const Imagelist=(props)=>{

    const image=props.images.map((image) =>{ return(<img  alt={image.description}key={image.id} src={image.urls.regular}></img>)});


    return <div>{image}</div>

};

export default Imagelist;