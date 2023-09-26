import Image from "next/image";
import { ButtonsContainer, DevicesContainer, IntroContainer, SectionContainer, TextContainer } from "./styles";
import devices from "../../../public/assets/icons/devices.png";
import { Text } from "@/app/components/Elements/text";
import { FullBtn } from "@/app/components/Buttons/FullBtn";
import VideoBtn from "@/app/components/Buttons/VideoBtn";
import IntroImage from "@/app/components/Elements/IntroImage";


export default function UpperSection() {
    return (
        <SectionContainer>
            <IntroContainer>
                <IntroImage />
                <DevicesContainer>
                    <Image src={devices} height={24} width={24} alt="devices"></Image>
                    <Text $case="upper" $size="small" $weight="semibold" $family="secondary" color="white" $spacing="wide">Plataforma all in one</Text>
                </DevicesContainer>

                <TextContainer>
                    <Text $weight="medium" $size="x_large" color="white">Sua escola online poderosa e lucrativa</Text>
                    <Text $weight="regular" $size="small" color="white">Tenha sua própria escola online 100% white label com rede social, gamificação, clube de assinaturas, ecommerce e sistema EAD completo.</Text>
                </TextContainer>

                <ButtonsContainer>
                    <FullBtn>Começar agora</FullBtn>
                    <VideoBtn />
                </ButtonsContainer>

            </IntroContainer>
        </SectionContainer>
    )
}