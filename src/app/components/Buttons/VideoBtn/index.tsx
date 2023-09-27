import Image from "next/image";
import styled from "styled-components";
import { Text } from "../../Elements/text";
import play from "../../../../../public/assets/icons/play.svg";

const VideoBtnContainer = styled.div`
    width: 114px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    
`;



export default function VideoBtn() {
    return (
        <VideoBtnContainer>
            <Image src={play} width={32} height={32} alt="player-icon"></Image>
            <Text $size="small" color="white" $weight="semibold" >Ver vídeo</Text>
        </VideoBtnContainer>
    );
}