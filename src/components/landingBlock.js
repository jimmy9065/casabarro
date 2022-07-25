import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

import backslash from "../svgs/backslash.svg";
import logoLeftText from "../svgs/logoLeftText.svg";
import logoRightText from "../svgs/logoRightText.svg";

const MiddleKeyFrames = keyframes`
    0% { width: 40px; height: 60px; }
    20% { width: 30px; height: 45px; }
    100% { width: 20px; height: 30px; }
`;

const LeftKeyFrames = keyframes`
    0% { left: -121px; top: 0px; }
    100% { left: -42px; top: -20px; }
`;

const RightKeyFrames = keyframes`
    0% { right: -155px; bottom: 0px; }
    100% { right: -60px; bottom: -20px; }
`;

const Container = styled.div`
    position: absolute;
    height: 60px;
    width: 38px;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    grid-column: 6/8;

    margin-top: auto;
    margin-bottom: auto;

    display: flex;
`;

const LeftContainer = styled.div`
    position: absolute;
    width: 121px;
    height: 31px;

    left: -121px;
    top: 0px;

    animation: ${(props) => (props.stage > 0 ? LeftKeyFrames : "none")} 1s
        linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
`;

const RightContainer = styled.div`
    position: absolute;
    width: 155px;
    height: 43px;

    right: -155px;
    bottom: 0px;

    animation: ${(props) => (props.stage > 0 ? RightKeyFrames : "none")} 1s
        linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
`;

const MiddleContainer = styled.div`
    position: relative;

    align-self: center;

    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;

    width: 38px;
    height: 60px;

    overflow: hidden;

    animation: ${(props) => (props.stage > 0 ? MiddleKeyFrames : "none")} 1s
        linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
`;

const ImageWrapper = styled.div`
    width: 38px;
    height: 60px;
`

const Image = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
`;

const LandingBlock = (props) => {
    let { onClick, stage } = props;
    useEffect(() => {
        console.log("stage changed in landingBlock:", stage);
    }, stage);
    return (
        <Container onClick={onClick}>
            <LeftContainer stage={stage}>
                <Image src={logoLeftText} />
            </LeftContainer>
            <MiddleContainer stage={stage}>
                <ImageWrapper>
                    <Image src={backslash} />
                </ImageWrapper>
            </MiddleContainer>
            <RightContainer stage={stage}>
                <Image src={logoRightText} />
            </RightContainer>
        </Container>
    );
};

export default LandingBlock;
