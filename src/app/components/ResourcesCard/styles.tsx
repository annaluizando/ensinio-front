import styled, { keyframes } from "styled-components";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ResourcesContainer = styled.div`
    height: 173px;
    width: 304px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-name: ${fadeInAnimation};
  
    @media (max-width: 370px) {
        width: 100%;
    }

    
    &:hover,
    &:focus {
        box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
        transform: translateY(-0.5em);
    }
`;

const ResourcesIcon = styled.div<IconProps>`
    width: 40px;
    height: 40px;
    background-image: url(${props => props.$url});

    @media (max-width: 370px){
        height: 50px;

    }
`;

const RTextContainer = styled.div`
    width: 304px;
    height: 109px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
      @media (max-width: 370px) {
        height: 100%;
        width: 80%;
    }
`;

export {
  ResourcesContainer,
  ResourcesIcon,
  RTextContainer,
}