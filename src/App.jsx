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
      <DecrementButton images={images} currentImage={currentImage} setCurrentImage={setCurrentImage}/>
      <IncrementButton images={images} currentImage={currentImage} setCurrentImage={setCurrentImage}/>
      <Thumbnails images={images} setImages={setImages} setCurrentImage={setCurrentImage}/>
      {images.length > 0 && (<img className='image-fullscreen' src={images[currentImage].url} alt={'An image of a cat'} />)}
    </div>
  )
}
