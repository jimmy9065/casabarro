import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import { Grid, Divider } from "../common";
import {
    RESIDENCE_FLOOR_0,
    RESIDENCE_FLOOR_1,
    RESIDENCE_BUILDING,
} from "../../constants/remote_files";

const FlowPlanContainer = styled(Grid)`
    position: relative;
    margin-top: 0px;
    margin-bottom: 50px;

    min-height: 600px;
`;

const ImageContainer = styled.div`
    position: relative;
    grid-column: ${(props) => props.start + "/" + props.end};

    margin: auto 0;
`;

const Image = styled.img`
    width: 100%;
`;

const FloorPlanImage1 = styled(Image)`
    opacity: 1;
    animation: ${props=>(props.init?"none":props.selected?FadeIn:FadeOut)} 1s ease;
    animation-fill-mode: forwards;
`

const FadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`

const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


const FloorPlanImage = styled(Image)`
    position: absolute;
    left: 0px;
    opacity: 0;
    animation: ${props=>(props.init?"none":props.selected?FadeIn:FadeOut)} 1s ease;
    animation-fill-mode: forwards;
`

const FloorPlanImageBlock = (props) => {
    let { floorIdx } = props;

    useEffect(() => {

    })

    return (
        <ImageContainer start={6} end={12}>
            <FloorPlanImage1
                init={floorIdx == 0}
                selected={floorIdx == 1}
                src={RESIDENCE_FLOOR_0}
            />
            <FloorPlanImage
                init={floorIdx == 0}
                selected={floorIdx == 2}
                src={RESIDENCE_FLOOR_1}
            />
        </ImageContainer>
    );
};

const TextBlockContainer = styled.div`
    grid-column: 2/5;
`;

const Paragraph = styled.p`
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    /* or 156% */
    margin: 0 0;

    color: #857d7a;
`;

const FloorLinkContainer = styled.div`
    display: flex;
    flex-direction: column;

    min-width: 200px;
    max-width: 250px;
`;

const FloorLink = styled.p`
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    /* or 156% */
    margin: 0 0;

    color: #857d7a;

    :hover {
        cursor: pointer;
    }
`;

const FloormapInfoContainer = styled.div`
    position: absolute;
    top: 120px; ;
`;

const FloorInfo37F = () => {
    return (
        <FloormapInfoContainer>
            <Paragraph>Master Bedroom 4.7 x 4.2</Paragraph>
            <Paragraph>Master Bath 2 x 3.8</Paragraph>
            <Paragraph>Master Dressing 2 x 3</Paragraph>
            <Paragraph>Room A 3.8 x 3.3</Paragraph>
            <Paragraph>Room B 3.8 x 3.3</Paragraph>
            <Paragraph>Room C 3.3 x 3.2</Paragraph>
        </FloormapInfoContainer>
    );
};

const FloorPlanSelector = (props) => {
    let { selectFloor } = props;
    return (
        <TextBlockContainer>
            <FloorLinkContainer>
                <FloorLink
                    onClick={() => {
                        selectFloor(1);
                    }}
                >
                    FLOOR PLAN: 3F–7F
                </FloorLink>
                <Divider />
                <FloorLink
                    onClick={() => {
                        selectFloor(2);
                    }}
                >
                    FLOOR PLAN: 8F
                </FloorLink>
            </FloorLinkContainer>
            <FloorInfo37F />
        </TextBlockContainer>
    );
};

const BuildingImageContainer = styled.div`
    position: absolute;
    bottom: 18%;
    grid-column: 2/3;

    min-width: 120px;
`;

const BuildingImage = () => {
    return (
        <BuildingImageContainer start={2} end={3}>
            <Image src={RESIDENCE_BUILDING} />
        </BuildingImageContainer>
    );
};

const DownloadLinksContainer = styled.div`
    position: absolute;
    bottom: 10px;
    grid-column: 2/4;

    min-width: 200px;
`;

const DownloadLink = styled.a`
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    /* or 156% */

    text-decoration-line: underline;

    color: #857d7a;
`;

const DownloadLinks = (props) => {
    return (
        <DownloadLinksContainer>
            <div>
                <DownloadLink>Download Plans</DownloadLink>
            </div>
            <div>
                <DownloadLink>Download Specs</DownloadLink>
            </div>
        </DownloadLinksContainer>
    );
};

const FloorPlanBlock = () => {
    let [floorIdx, setFloorIdx] = useState(0);
    // state = 0 for init state, then it starts from 1 to n
    return (
        <FlowPlanContainer>
            <FloorPlanSelector selectFloor={setFloorIdx} />
            <BuildingImage />
            <DownloadLinks />
            <FloorPlanImageBlock floorIdx={floorIdx} />
        </FlowPlanContainer>
    );
};

export default FloorPlanBlock;
