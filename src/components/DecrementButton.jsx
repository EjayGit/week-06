import {useState} from 'react';

function IncrementButton(){
    const [image, setImage] = useState(0)
    
    function decrementImageState(){
    if (image > 0){
      setImage(image - 1);
    } else {
      setImage(9);
    }
  }

    return <button onClick={() => decrementImageState()}>Decrease number</button>
}

export default DecrementButton