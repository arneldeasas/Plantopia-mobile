'use client'

import Image from 'next/image'
import { Camera, CameraResultType } from '@capacitor/camera';
import { useState } from 'react';
import { Photo } from '@capacitor/camera';
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter()
  const [imgUrl,setImgUrl] = useState('')
  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      saveToGallery:true
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
    if(image){
      await saveImage(image)
    }
    // Can be set to the src of an image now
   setImgUrl(imageUrl)
  };

  const saveImage=async()=>{
    const photo = new Photo()
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={takePicture}>TAKE PHOTOss!</button>
      
      <input type="file" name="file" id="file" accept='.jpg,.png' />
      <p className='w-full whitespace-break-spaces'>URL : {imgUrl}</p>
      <p>EY!!</p>


      <button onClick={()=>{router.push('/signup')}}>go to signup</button>
    </main>
  )
}
