import Image from "next/image";
import { ButtonsContainer, DesignIconsContainer, DevicesContainer, IntroContainer, SectionContainer, TextContainer, USContentContainer } from "./styles";
import devices from "../../../../../public/assets/icons/devices.png";
import { Text } from "@/app/components/Elements/text";
import { FullBtn } from "@/app/components/Buttons/FullBtn";
import VideoBtn from "@/app/components/Buttons/VideoBtn";
import IntroImage from "@/app/components/Elements/IntroImage";
import wplaylist_icon from "../../../../../public/assets/icons/icon-playlistsw.svg";
import certified_icon from "../../../../../public/assets/icons/icon-certified.svg";

export default function UpperSection() {
    return (
        <SectionContainer>

            <DesignIconsContainer>
                <Image src={wplaylist_icon} width={82.50} height={82.50} alt="design-icons" className="icon-play" />
                <Image src={certified_icon} width={67.355} height={67.355} alt="design-icons" className="icon-cert" />
                <Image src={wplaylist_icon} width={82.50} height={82.50} alt="design-icons" className="icon-play" />
            </DesignIconsContainer>

            <IntroContainer>
                <IntroImage />

                <USContentContainer>
                    <DevicesContainer>
                        <Image src={devices} height={24} width={24} alt="devices"></Image>
                        <Text $case="upper" $size="small" $weight="semibold" $family="secondary" color="white" $spacing="wider">Plataforma all in one</Text>
                    </DevicesContainer>

                    <TextContainer>
                        <Text $weight="medium" $size="x_large" color="white">Sua escola online poderosa e lucrativa</Text>
                        <Text $weight="regular" $size="small" color="white">Tenha sua própria escola online 100% white label com rede social, gamificação, clube de assinaturas, ecommerce e sistema EAD completo.</Text>
                    </TextContainer>

                    <ButtonsContainer>
                        <FullBtn>Começar agora</FullBtn>
                        <VideoBtn />
                    </ButtonsContainer>
                </USContentContainer>

            </IntroContainer>
        </SectionContainer>
    )
}