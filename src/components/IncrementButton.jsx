import {useState} from 'react';

function IncrementButton(){
    const [image, setImage] = useState(0)
    
    function incrementImageState(){
        if (image < 9){
        setImage(image + 1);
        } else {
        setImage(0);
        }
    }

    return <button onClick={() => incrementImageState()}>Increase number</button>
}

export default IncrementButton