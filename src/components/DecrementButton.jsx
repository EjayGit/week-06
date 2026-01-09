function DecrementButton({images, currentImage, setCurrentImage}){
    
    function decrementImageState(){
      if (currentImage > 0){
        setCurrentImage(currentImage - 1);
      } else {
        setCurrentImage(images.length -1);
      }
    }

    return <button onClick={() => decrementImageState()}>Decrease number</button>
}

export default DecrementButton