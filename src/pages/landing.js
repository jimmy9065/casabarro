import React, { useState } from "react";
import styled from "styled-components";
import { PageBase, Grid } from "../components/common";
import { LandingLogo1, LandingLogo2 } from "../svgs/landing_logos";

const VIDEO_URL =
    "https://casa-barro-public.s3.ap-northeast-2.amazonaws.com/resized_1080/landing.mp4";
const Image_URL =
    "https://casa-barro-public.s3.ap-northeast-2.amazonaws.com/landing/landing.jpg";

const OceanLoopBase = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    margin-left: -16px;
    font-size: 0px;

    z-index: 10000;
`;

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
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

const LogoBase = styled(Grid)`
    width: 100%;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
`;

const LogoButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;

    grid-column: 6/8;
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
`;

const ClickableModel = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`;

const OceanLoop = (props) => {
    let { stage, setStage } = props;
    return (
        <OceanLoopBase>
            <Video autoPlay muted loop>
                <source src={VIDEO_URL} type="video/mp4"></source>
            </Video>
            <LogoBase>
                {stage == 0 ? (
                    <LogoButton
                        onClick={() => {
                            setStage(1);
                        }}
                    >
                        <LandingLogo1 />
                    </LogoButton>
                ) : (
                    stage == 1 && (
                        <React.Fragment>
                            <LogoTextLeft>Hamori, Jeju Island</LogoTextLeft>
                            <LogoButton>
                                <LandingLogo2 />
                            </LogoButton>
                            <LogoTextRight>
                                Exclusive Jeju residence bringing together ocean
                                view, architecture and design with the
                                convenience of the city.
                            </LogoTextRight>
                        </React.Fragment>
                    )
                )}
            </LogoBase>
            {stage == 1 && <ClickableModel onClick={()=>{setStage(2)}}/>}
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

let LandingPage = () => {
    const [stage, setStage] = useState(0);

    return (
        <PageBase>
            {(stage == 0 || stage == 1) && (
                <OceanLoop stage={stage} setStage={setStage} />
            )}
            <Home />
        </PageBase>
    );
};

export default LandingPage;
