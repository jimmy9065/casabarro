import React from "react";
import styled from "styled-components";

import { Grid } from "./common";

const RowBase = styled(Grid)`
    margin-top: ${(props) => props.marginTop}px;
    margin-bottom: ${(props) => props.marginBottom}px;
    position: relative;
`;

const ImageContainer = styled.div`
    position: relative;
    grid-column: ${(props) => props.start + "/" + props.end};
`;

const Image = styled.img`
    width: 100%;
`;

const TextContainer1 = styled.div`
    position: absolute;
    bottom: -16px;

    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    /* or 133% */

    color: #857d7a;

    grid-column: ${(props) => props.start + "/" + props.start + 1};
`;

const ContentRow3 = (props) => {
    let { 
        src, posStart, posEnd, caption,
        leftChild, rightChild,
        marginTop, marginBottom,
    } = props;

    if (marginTop == undefined) {
        marginTop = 100;
    }

    if (marginBottom == undefined) {
        marginBottom = 100;
    }

    return (
        <RowBase marginTop={marginTop} marginBottom={marginBottom}>
            {leftChild}
            <ImageContainer start={posStart} end={posEnd}>
                <Image src={src} />
            </ImageContainer>
            {caption && (
                <TextContainer1 start={posStart}>{caption}</TextContainer1>
            )}
            {rightChild}
        </RowBase>
    );
};

export default ContentRow3;
