import './App.css'
import {useState, useEffect} from "react";

export default function App() {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        import.meta.env.VITE_API_URL
      );
      const data = await response.json();
      setImages(data);
    }
    fetchData();
  }, []);

  function incrementImageState(){
    if (currentImage < images.length -1){
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
    console.log(currentImage);
  }

  function decrementImageState(){
    if (currentImage > 0){
      setCurrentImage(currentImage - 1);
    } else {
      setCurrentImage(images.length -1);
    }
    console.log(currentImage);
    console.log(images[currentImage].url)
  }

  function selectImage(index){
    console.log(index);
    setCurrentImage(index);
  }
  
  return (
    <div>
      <h1>Gallery</h1>
      <button onClick={() => decrementImageState()}>Decrease number</button>
      <button onClick={() => incrementImageState()}>Increase number</button>
      <div className='thumbnail-container'>
        {images.map((image, index) => {
          return <img onClick={() => selectImage(index)} className='thumbnails' key={index} src={image.url} alt={'An image of a cat'}></img>
          
        })}
      </div>
      {images.length > 0 && (<img className='image-fullscreen' src={images[currentImage].url} alt={'An image of a cat'} />)}
    </div>
  )
}
