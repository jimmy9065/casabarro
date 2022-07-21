import React from "react";
import styled from "styled-components";

import { NEIGHBORHOOD_IMG_5 } from "../../constants/remote_files";

const ImageContainer = styled.div`
    position: relative;
    grid-column: 7/10;
`;

const Image = styled.img`
    width: 100%;
`;

const ImageBlock1 = () => {
    return (
        <ImageContainer>
            <Image src={NEIGHBORHOOD_IMG_5}/>
        </ImageContainer>
    );
};

export { ImageBlock1 };

