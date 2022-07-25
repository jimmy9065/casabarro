import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { PageBase, Grid } from "../components/common";
import LanguageSelector from "../components/languageSelector";
import { LandingLogo1, LandingLogo2 } from "../svgs/landing_logos";
import LandingBlock from "../components/landingBlock"

import { LANDING_IMG_1, LANDING_VID_1 } from "../constants/remote_files";

const VIDEO_URL = LANDING_VID_1;
const Image_URL = LANDING_IMG_1;

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 0;
    display: none;
    visibility: hidden;
  }
`;

const OceanLoopBase = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: -16px;
    font-size: 0px;

    z-index: 10000;

    animation: ${(props) => (props.show ? "none" : fadeOut)};
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
`;

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const LogoBase = styled(Grid)`
    width: calc(100% + 32px);
    height: 320px;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
`;

const LogoTextLeft = styled.div`
    font-family: "GT Pressura Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;

    color: #fff3e1;

    grid-column: 3/5;
    margin: auto;

    animation: ${fadeIn} 1s linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
`;

const LogoTextRight = styled.div`
    font-family: "GT Pressura Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    text-transform: lowercase;
    color: #fff3e1;

    grid-column: 9/12;
    margin: auto;

    animation: ${fadeIn} 1s linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
`;

const ClickableModal = styled(Grid)`
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100vw - 32px);
    height: 100vh;
`;

const LangSelectorContainer = styled.div`
    grid-column: -2/-1;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 81px;
    margin: 0 auto;
`;

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const HomeBase = styled.div`
    width: 100vw;
    height: 100vh;
    margin-left: -16px;
    font-size: 0px;
`;

const OceanLoop = (props) => {
    let { stage, setStage, language, selectLanguage } = props;

    return (
        <OceanLoopBase show={stage < 2}>
            <Video autoPlay muted loop>
                <source src={VIDEO_URL} type="video/mp4"></source>
            </Video>
            <LogoBase>
                {stage === 1 && <LogoTextLeft>Hamori, Jeju Island</LogoTextLeft>}
                <LandingBlock
                    stage={stage}
                    onClick={() => {
                        setStage(1);
                    }}
                />
                {stage === 1 && <LogoTextRight>
                    Exclusive Jeju residence bringing together ocean
                    view, architecture and design with the
                    convenience of the city.
                </LogoTextRight>}
            </LogoBase>
            {stage === 1 && (
                <ClickableModal
                    onClick={() => {
                        setStage(0);
                    }}
                >
                    <LangSelectorContainer>
                        <LanguageSelector
                            language={language}
                            selectLanguage={selectLanguage}
                            color="#FFF3E1"
                        />
                    </LangSelectorContainer>
                </ClickableModal>
            )}
        </OceanLoopBase>
    );
};

const Home = () => {
    return (
        <HomeBase>
            <Image src={Image_URL} />
        </HomeBase>
    );
};

let LandingPage = (props) => {
    let { language, selectLanguage } = props;
    const [stage, setStage] = useState(0);

    return (
        <PageBase>
            <OceanLoop
                stage={stage}
                setStage={setStage}
                language={language}
                selectLanguage={selectLanguage}
            />
            {stage > 0 && <Home />}
        </PageBase>
    );
};

export default LandingPage;
