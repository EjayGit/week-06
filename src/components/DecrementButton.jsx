function DecrementButton({images, currentImage, setCurrentImage}){
    
    function decrementImageState(){
      if (currentImage > 0){
        setCurrentImage(currentImage - 1);
      } else {
        setCurrentImage(images.length -1);
      }
      console.log(currentImage);
      console.log(images[currentImage].url)
    }

    return <button onClick={() => decrementImageState()}>Decrease number</button>
}

export default DecrementButton