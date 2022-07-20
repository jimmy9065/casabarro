import React from "react";
import styled from "styled-components";

import { Grid } from "../../components/common";

const FlowPlanContainer = styled(Grid)`
    position: relative;
    margin-top: 0px;
    margin-bottom: 73px;

    min-height: 700px;
`;

const ImageContainer = styled.div`
    position: relative;
    grid-column: ${(props) => props.start + "/" + props.end};

    margin: auto 0;

`;

const Image = styled.img`
    width: 100%;
`;

const FlowPlanImage = () => {
    return (
        <ImageContainer start={4} end={10}>
            <Image src="https://casa-barro-public.s3.ap-northeast-2.amazonaws.com/residence/image7.jpg" />
        </ImageContainer>
    );
};

const TextBlockContainer = styled.div`
    position: absolute;
    top: 8%;
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

const TextBlock = () => {
    return (
        <TextBlockContainer>
            <Paragraph>FLOOR PLAN: 3F–7F</Paragraph>
            <Paragraph>
                <br />
            </Paragraph>
            <Paragraph>Master Bedroom 4.7 x 4.2</Paragraph>
            <Paragraph>Master Bath 2 x 3.8</Paragraph>
            <Paragraph>Master Dressing 2 x 3</Paragraph>
            <Paragraph>Room A 3.8 x 3.3</Paragraph>
            <Paragraph>Room B 3.8 x 3.3</Paragraph>
            <Paragraph>Room C 3.3 x 3.2</Paragraph>
        </TextBlockContainer>
    );
};

const BuildingImageContainer = styled.div`
    position: absolute;
    top: 45%;
    grid-column: 2/3;

    min-width: 120px;
`;

const BuildingImage = () => {
    return (
        <BuildingImageContainer start={2} end={3}>
            <Image src="https://casa-barro-public.s3.ap-northeast-2.amazonaws.com/residence/image8.jpg" />
        </BuildingImageContainer>
    );
};

const DownloadLinksContainer = styled.div`
    position: absolute;
    bottom: 10%;
    grid-column: 2/4;
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

const DownloadLinks = () => {
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

const FlowPlanBlock = () => {
    return (
        <FlowPlanContainer>
            <TextBlock />
            <BuildingImage />
            <DownloadLinks />
            <FlowPlanImage />
        </FlowPlanContainer>
    );
};

export default FlowPlanBlock;
