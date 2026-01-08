import './App.css'
import {useState, useEffect} from "react";

export default function App() {
  const [images, setImages] = useState([]);

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

  return (
    <div>
      <h1>Gallery</h1>
      <ul>
        {images.map((image) => {
          return <img key={image.id} src={image.url} alt={'An image of a cat'}></img>
        })}
      </ul>
    </div>
  )
}
