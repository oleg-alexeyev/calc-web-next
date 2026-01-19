import Image from "next/image";
import img from "./img.png";

export default function Calculator() {
    return (
        <main>
            <h1>Calculator</h1>
            <Image src={img} alt="Calculator" width="225"/>
        </main>
    );
}