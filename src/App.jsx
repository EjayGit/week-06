import './App.css'
import {useState} from "react";
import DecrementButton from './components/DecrementButton'
import IncrementButton from './components/IncrementButton'
import Thumbnails from './components/Thumbnails'
import GlobalKeyPress from './components/GlobalKeyPress'

export default function App() {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  
  return (
    <div class='body'>
      <GlobalKeyPress setCurrentImage={setCurrentImage} currentImage={currentImage} images={images}/>
      <DecrementButton aria-label={'slide image left'} images={images} currentImage={currentImage} setCurrentImage={setCurrentImage}/>
      <IncrementButton aria-label={'slide image right'} images={images} currentImage={currentImage} setCurrentImage={setCurrentImage}/>
      <Thumbnails aria-label={'thumbnail images'} images={images} setImages={setImages} setCurrentImage={setCurrentImage}/>
      {images.length > 0 && (<img aria-label={'main image'} className='image-fullscreen' src={images[currentImage].url} alt={'An image of a cat'} />)}
    </div>
  )
}
