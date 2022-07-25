import React from "react";
import styled from "styled-components";
import { Grid, ContainImage } from "./common";
import backslash_dark from "../svgs/backslash_dark.svg";

const BlockContainer = styled(Grid)`
    margin-top: 50px;
    margin-bottom: 100px;

    padding-top: 5px;
    padding-bottom: 5px;
`

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

    margin-top: 56px;
`;

const TitleTextBlock = (props) => {
    let {text} = props
    return (
        <BlockContainer>
            <IconContainer>
                <ContainImage src={backslash_dark}/>
            </IconContainer>
            <TextContainer1>
                {text}
            </TextContainer1>
        </BlockContainer>
    );
};

export default TitleTextBlock;