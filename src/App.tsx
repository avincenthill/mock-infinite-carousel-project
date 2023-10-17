import React, { ReactNode, useState } from 'react';
import './App.css';
import integrations from './data/integrations';
import styled from 'styled-components';
import TwilioLarge from "./svgs/twilioLarge.svg"
import X from "./svgs/x.svg"

const StyledAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #555555;
  background-color: #F8F8F8;
`

const StyledRowsContainer = styled.div`
  width: 800px;
  height: 256px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
`;

interface StyledIntegrationsContainerProps {
  index: number;
}

const StyledIntegrationsContainer = styled.div<StyledIntegrationsContainerProps>`
  height: 49px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  animation: movePills 10s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
  `;


const StyledIntegrationPill = styled.div`
  width: 136px;
  height: 40px;
  background-color: #FFFFFF;
  border-radius: 8px;
  margin: 4.5px;
  padding: 0 13px;
  white-space: nowrap;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;


  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.04), 0px 4px 13px rgba(0, 0, 0, 0.02);

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 8px 26px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }
`;

const StyledIntegrationPillName = styled.span`
  padding-left: 6px;
`

const StyledModal = styled.div`
  background: #F8F8F8;
  width: 593px;
  height: 384px;
  z-index: 999;
  position: relative;
  position:absolute;
  left:calc(50%-296.5px);
  top:calc(50%-192px);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column:
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  border-radius: 8px;
  z-index: 1000;
  height: 100%;
  width: 415px;

  margin: 40px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const StyledCloseButton = styled.img`
  position: absolute;
  top: 30px;
  right: 30px;
`
const StyledIntegrationLogo = styled.img`
  position: absolute;
  top: 60px;
  left: 30px;
`

const StyledModalTitle = styled.h1`
  color: #3D3D3D;
  font-size: 28px;
  font-weight: bold;
  margin: 0;
`

const StyledModalParagraph = styled.p`
  color: #6A6A6A;
  font-size: 18px;
  line-height: 1.4;
  margin: 12px;
  margin-left: 0;
`

const StyledRowsShadowLeft = styled.div`
  position: absolute;
  width: 1000px;
  height:  384px;
  background-color: #F8F8F8;
  z-index: 1200;
  left: -1000px;
  box-shadow: 80px 0 80px -5px #F8F8F8;
`

const StyledRowsShadowRight = styled.div`
  position: absolute;
  width: 1000px;
  height:  384px;
  background-color: #F8F8F8;
  z-index: 1200;
  right: -1000px;
  box-shadow: -80px 0 80px 5px #F8F8F8;

`

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <StyledModal onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </StyledModal>
  );
};

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  };

  const renderIntegrationsContainers: (numRows?: number) => ReactNode = (numRows = 5) => {
    let arr = new Array(numRows).fill(0);
    let rotatedIntegrations = rotateArrayByRandomNumber(integrations);
    return arr.map((e, index) => (<StyledIntegrationsContainer key={index} index={index}>{renderIntegrationsPills(rotatedIntegrations)}{renderIntegrationsPills(rotatedIntegrations)}</StyledIntegrationsContainer>))
  }

  function rotateArrayByRandomNumber(arr: any[]) {
    let randRotation = Math.floor(Math.random() * integrations.length) + 1;
    return arr.slice(randRotation).concat(arr.slice(0, randRotation));
  }

  const renderIntegrationsPills: (arr: any[]) => ReactNode = (arr) => {
    return rotateArrayByRandomNumber(arr).map((integration, index) => (IntegrationPill(integration.name, integration.img)))
  }

  function IntegrationPill(name: string, svg: ReactNode) {
    return (
      <StyledIntegrationPill key={name} onClick={openModal}>{svg}<StyledIntegrationPillName>{name}</StyledIntegrationPillName></StyledIntegrationPill>
    )
  }

  return (
    <StyledAppContainer className="App">
      <StyledRowsContainer>
        <StyledRowsShadowLeft></StyledRowsShadowLeft>
        <StyledRowsShadowRight></StyledRowsShadowRight>
        {renderIntegrationsContainers()}
      </StyledRowsContainer>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <StyledIntegrationLogo src={TwilioLarge} alt="TwilioLarge" />
        <StyledCloseButton src={X} alt="X" onClick={closeModal} />
        <StyledModalTitle>Build internal tools with Twilio</StyledModalTitle>
        <StyledModalParagraph>Connecting Retool to Twilio takes just a few minutes, and lets you to send texts or make calls programatically from Retool.</StyledModalParagraph>
        <StyledModalParagraph>For example, you could build a tool to send personalized texts to inform users of last minute changes in plans. You could pull your users from a Postgres database, drag on a TextInput to write a personalized text message, and then drag on a Button to actually send the text via Twilio.</StyledModalParagraph>
      </Modal>
    </StyledAppContainer>
  );
}

export default App;