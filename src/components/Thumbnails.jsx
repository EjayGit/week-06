import {useEffect} from 'react'

function Thumbnails({images, setImages, setCurrentImage}){

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

    function selectImage(index){
        console.log(index);
        setCurrentImage(index);
    }

    return (
        <div className='thumbnail-container'>
            {images.map((image, index) => {
            return <img onClick={() => selectImage(index)} className='thumbnails' key={index} src={image.url} alt={'An image of a cat'}></img>
            })}
        </div>)
}

export default Thumbnails;