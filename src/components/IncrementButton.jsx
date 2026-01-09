function IncrementButton({images, currentImage, setCurrentImage}){
    
    function incrementImageState(){
        if (currentImage < images.length -1){
        setCurrentImage(currentImage + 1);
        } else {
        setCurrentImage(0);
        }
    }

    return <button className='incrementBtn' onClick={() => incrementImageState()}>Right</button>
}

export default IncrementButton