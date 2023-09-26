import styled from "styled-components";
import { Text } from "../text";
import { useState } from "react";

const SolutionsContainer = styled.div`
    width: 88px;
    height: 16px;
    display: flex;

`;

const ToggleButton = styled.button`
    width: 10px;
    height: 8px;
    border: none;
    background-color: transparent;
    background-image: url('../../../public/assets/shapes/polygon.svg');
    cursor: pointer;
`;

export default function SolutionsToggle() {
    const [solutions, setSolutions] = useState(false);

    // will be responsable to show or not show the solutions menu
    function handleSolutions() {
        setSolutions(!solutions);
    }

    return (
        <SolutionsContainer>
            <a><Text color="white" $size="small" $weight="medium">Soluções</Text></a>
            <ToggleButton onClick={handleSolutions}></ToggleButton>
        </SolutionsContainer>
    )
}