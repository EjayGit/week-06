import {useEffect} from 'react'

function GlobalKeyDown({setCurrentImage, currentImage, images}){
    const handleKeyDown = (e) => {
        console.log(e.key);
        if(e.key == "ArrowRight"){
            if (currentImage < images.length -1){
            setCurrentImage(currentImage + 1);
            } else {
            setCurrentImage(0);
            }
        }
        else if(e.key == "ArrowLeft"){
            if (currentImage > 0){
            setCurrentImage(currentImage - 1);
            } else {
            setCurrentImage(images.length -1);
            }
        }
    }
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
        window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);
}

export default GlobalKeyDown