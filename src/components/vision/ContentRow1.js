import React from "react";
import styled from "styled-components";

import { Grid, ContainImage } from "../common";
import backslash_dark from "../../svgs/backslash_dark.svg";

const RowBase = styled(Grid)`
    margin-top:100px;
    margin-bottom: 100px;
    position: relative;
`;

const IconContainer = styled.div`
    grid-column: 2/3;
`;

const TextContainer1 = styled.div`
    font-family: "GT Pressura Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    /* or 125% */

    text-transform: lowercase;

    color: #833316;

    grid-column: 3/7;
`;

const TextContainer2 = styled.div`
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    /* or 156% */

    color: #857d7a;

    grid-column: 4/8;

    margin-top: -70px;
`;

const ContentRow1 = () => {
    return (
        <RowBase>
            <IconContainer>
                <ContainImage src={backslash_dark} />
            </IconContainer>
            <TextContainer1>
                <p style={{ margin: 0 }}>casa Barro —</p>
                <p style={{ margin: "0px 30px" }}>
                    Exclusive Jeju residence bringing together ocean view,
                    architecture and design with the convenience of the city.
                </p>
            </TextContainer1>
            <TextContainer2>
                <p>
                    Bordering the ocean and vibrant town of Hamori, Casa Barro
                    creates a dialogue between nature, privacy, and the
                    convenience of urban life. Eight exclusive homes–each on an
                    entire floor–enjoy hotel grade amenities including an
                    infinity pool, gym and spa, pet facilities and rooftop
                    terrace.
                </p>
                <p>
                    Inspired by the undulating ocean cliffs of Hamori, Casa
                    Barro brings nature into the home with expansive terraces
                    opening to the ocean view and elegant interiors of natural
                    material.
                </p>
            </TextContainer2>
        </RowBase>
    );
};

export default ContentRow1;

