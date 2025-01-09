import Image from "next/image";
import scene from "./scene.jpg";
export default function Vaibhav (){
    return <div>
        <h1>Vaibhav</h1>
        <Image src={scene} alt="scene" width={500}/>
    </div>
}