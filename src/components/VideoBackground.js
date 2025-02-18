import { useEffect,useState } from 'react'
import { url,options } from '../utils/constants'



const VideoBackground = ({image}) => {

    const [imageUrl, setImageUrl] = useState(null)

const getImage = async ()=>{
    const response = await fetch(url, options);
      const json = await response.json();
      

      const imagePath = json.primaryImage; 
      console.log(imagePath);
      setImageUrl(imagePath); 
}

useEffect(()=>{
     getImage();
},[])
    
  return (
    <div className=''>
     <img src={image} />
     
    </div>
    
  )
  }



export default VideoBackground;