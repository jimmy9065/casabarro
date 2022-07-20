import React from "react";
import styled from "styled-components";

import { Grid } from "../common";
import { VISION_IMG_4 } from "../../constants/remote_files"

const IMAGE_URL = VISION_IMG_4

const RowBase = styled(Grid)`
    margin-top: 100px;
    margin-bottom: 100px;
    position: relative;
`;

const ImageContainer = styled.div`
    position: relative;
    grid-column: 2/12;
`;

const Image = styled.img`
    width: 100%;
`;

const TextContainer1 = styled.div`
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    /* or 133% */

    color: #857d7a;

    grid-column: 2/3;
`;

const ContentRow3 = () => {
    return (
        <RowBase>
            <ImageContainer>
                <Image src={IMAGE_URL} />
            </ImageContainer>
            <TextContainer1>casa barro: facade</TextContainer1>
        </RowBase>
    );
};

export default ContentRow3;
