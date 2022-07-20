import React from "react";
import styled from "styled-components";

import { Grid } from "../common";

import {VISION_IMG_1} from "../../constants/remote_files"

const IMAGE_URL = VISION_IMG_1
const HASH_TAGS = [
    "#Island Life",
    "#Outdoor Life",
    "#Serviced Living",
    "#Pet Living",
    "#Convenience",
    "#Nature",
    "#Design",
    "#Craft",
    "#Ocean View",
    "#Jeju Island",
    "#Exclusive",
];

const RowBase = styled(Grid)`
    margin-top: 100px;
    margin-bottom: 100px;
    position: relative;
`;

const ImageContainer = styled.div`
    position: relative;
    grid-column: 2/10;
`;

const Image = styled.img`
    width: 100%;
`;

const TextContainer1 = styled.div`
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    /* or 156% */

    color: #857d7a;

    grid-column: 11/12;
`;

const HashTag = styled.p`
    margin-top: 0px;
    margin-bottom: 0px;
`;

const TextContainer2 = styled.div`
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    /* or 133% */

    color: #857d7a;

    grid-column: 2/3;
`;

const ContentRow2 = () => {
    return (
        <RowBase>
            <ImageContainer>
                <Image src={IMAGE_URL} />
            </ImageContainer>
            <TextContainer1>
                {HASH_TAGS.map((hash_tag) => (
                    <HashTag>{hash_tag}</HashTag>
                ))}
            </TextContainer1>
            <TextContainer2>casa barro: facade</TextContainer2>
        </RowBase>
    );
};

export default ContentRow2;
