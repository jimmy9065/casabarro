import React from "react";
import styled from "styled-components";

import { Grid } from "../common";

const IMAGE_URL = "https://casa-barro-public.s3.ap-northeast-2.amazonaws.com/vision/image3.jpg"

const RowBase = styled(Grid)`
    margin-top: 100px;
    margin-bottom: 100px;
    position: relative;
`;

const ImageContainer = styled.div`
    position: relative;
    grid-column: 4/10;
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

    grid-column: 4/5;
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
