import React from "react";
import styled from "styled-components";

const Title = styled.div`
    font-family: "GT Pressura Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    /* identical to box height, or 125% */

    text-transform: lowercase;

    color: #833316;

    margin-bottom: 20px;
`;

const Content = styled.div`
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    /* or 156% */

    color: #857d7a;
`;

const TextBlockContainer1 = styled.div`
    grid-column: ${(props) => props.start + "/" + props.end};
`;

const TextBlock = (props) => {
    let { title, content, start, end } = props;
    return (
        <TextBlockContainer1 start={start} end={end}>
            <Title>{title}</Title>
            <Content>{content}</Content>
        </TextBlockContainer1>
    );
};

export default TextBlock;
