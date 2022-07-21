import React from "react";
import styled from "styled-components";

import { Grid } from "../common";
import { HashTags } from "./textblocks";

const MapBlockContainer = styled(Grid)`
    margin-top: 100px;
    margin-bottom: 100px;
`

const PLACE_HOLDER_URL =
    "https://casa-barro-public.s3.ap-northeast-2.amazonaws.com/neighborhood/placeholder.png";

const ImageContainer = styled.div`
    position: relative;
    grid-column: 4/12;
`;

const Image = styled.img`
    width: 100%;
`;

const MapBlock = () => {
    return (
        <MapBlockContainer>
            <HashTags />
            {/* This should be replaced by real map later */}
            <ImageContainer>
                <Image src={PLACE_HOLDER_URL} />
            </ImageContainer>
        </MapBlockContainer>
    );
};

export default MapBlock;
