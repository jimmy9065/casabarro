import React from "react";
import styled from "styled-components";

import Footer from "../components/footer";

// padding top: 3% + 40px from the navigator
// padding bottom: 200 px for the footer, minus
// the height from padding-top
const PageContainer = styled.div`
    position: relative;
    width: 100%;
    height: calc(100vh - 200px);
    padding-top: calc(3% + 30px);
    padding-bottom: calc(200px - 3% - 30px);
    background-color: silver;
`

const TextBlock = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 300px;
`

const Paragraph = styled.p`
    font-family: "GT Pressura Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;

    color: #FFF3E1;
`

let ContactPage = () => {
    return (
        <PageContainer>
            <TextBlock>
                <Paragraph>Working On It ...</Paragraph>
            </TextBlock>
            <Footer />
        </PageContainer>
    )
}

export default ContactPage




