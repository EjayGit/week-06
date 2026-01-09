function DecrementButton({images, currentImage, setCurrentImage}){
    
    function decrementImageState(){
      if (currentImage > 0){
        setCurrentImage(currentImage - 1);
      } else {
        setCurrentImage(images.length -1);
      }
    }

    return <button className="decrementBtn" onClick={() => decrementImageState()}>Left</button>
}

export default DecrementButton