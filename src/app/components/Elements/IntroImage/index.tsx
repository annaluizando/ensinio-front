import Image from "next/image";
import IntroImageIcon from "@/public/stockphoto.svg";
import IntroShapeIcon from "@/public/assets/shapes/elipse.svg";
import { IntroContainer, IntroMainImage, IntroShape } from "./styles";

// component responsable for the two main images in upper section
export default function IntroImage() {
    return (
        <IntroContainer>
            <IntroMainImage>
                <Image src={IntroImageIcon} width={529} height={533} alt="main-image" />
            </IntroMainImage>

            <IntroShape>
                <Image src={IntroShapeIcon} width={659} height={533} alt="shape" />
            </IntroShape>
        </IntroContainer>
    )
}