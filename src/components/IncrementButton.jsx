function IncrementButton({images, currentImage, setCurrentImage}){
    
    function incrementImageState(){
        if (currentImage < images.length -1){
        setCurrentImage(currentImage + 1);
        } else {
        setCurrentImage(0);
        }
    }

    return <button onClick={() => incrementImageState()}>Increase number</button>
}

export default IncrementButton