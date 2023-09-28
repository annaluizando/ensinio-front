import Image from "next/image";
import { Text } from "../../Elements/text";
import styled from "styled-components";
import { LanguageMenuProps } from "@/app/types/elements/LanguageMenu";
import { useTranslation } from "next-i18next";


const LoginContainer = styled.div`
    width: 73px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`;

export default function Login({ textColor = "white", textWeight = "semibold" }: LanguageMenuProps): JSX.Element {
    const { t } = useTranslation('common')

    return (
        <LoginContainer>
            <Image src="./assets/icons/user-profile.svg" alt="profile-icon" height={20} width={20} />
            <Text $size="x_small" color={textColor} $weight={textWeight}>{t('navbar.login')}</Text>
        </LoginContainer>
    )
}