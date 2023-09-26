import Image from "next/image";
import { Text } from "../../Elements/text";
import styled from "styled-components";

const LoginContainer = styled.div`
    width: 73px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`;

export default function Login() {
    return (
        <LoginContainer>
            <Image src="./assets/icons/user-profile.svg" alt="profile-icon" height={20} width={20} />
            <Text $size="x_small" color="white" $weight="semibold">Entrar</Text>
        </LoginContainer>
    )
}