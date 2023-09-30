import Image from "next/image";
import styled from "styled-components";
import { Text } from "../../Elements/text";
import play from "../../../../../public/assets/icons/play.svg";
import { useTranslation } from "next-i18next";

const VideoBtnContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: transparent;
    border: transparent;
    border-radius: 35px;
    cursor: pointer;


    &:hover {
        padding: 0.6rem;
        border: solid 1px ${props => props.theme.colors.light_gray};
        border-radius: 35px;
        transition-duration: 0.4s;
        transition: ease-in-out 0.3s;
        transform: scale(1.05);
    }
`;



export default function VideoBtn() {
    const { t } = useTranslation('common')

    return (
        <VideoBtnContainer>
            <Image src={play} width={32} height={32} alt="player-icon"></Image>
            <Text $size="small" color="white" $weight="semibold" >{t('upper_section.see_video')}</Text>
        </VideoBtnContainer>
    );
}