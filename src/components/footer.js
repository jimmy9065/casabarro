import React from "react";
import styled from "styled-components";

import PageLinkes from "./pageLinks";

const FooterBackground = styled.div`
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 200px;

    background: rgba(133, 125, 122, 0.1);
    box-sizing: border-box;
    padding-top: 37px;
`;

const FooterContainer = styled.div`
    posisition: relative;
    width: 95%;

    padding-left: 3%;
    margin-right: 5%;

    display: flex;
    justify-content: space-between;
`;

const TopContainer = styled.a`
    width: 158px;
    text-decoration: underline;
    color: #857d7a;
`;

const LinksContainer = styled.div`
    margin-left: 12.5%;
    margin-right: 12.5%;
    flex-grow: 2;
`;

const TextContainer = styled.div`
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    /* or 133% */

    color: #857d7a;
    
    margin-top: 30px;
`;

const Spacer = styled.div`
    display: inline;
    width: 55px;
`;

const TextParagraph = styled.p`
    margin-top: 0px;
    margin-bottom: 0px;
`;

const Footer = () => {
    return (
        <FooterBackground>
            <FooterContainer>
                <TopContainer href="#top">Top</TopContainer>
                <LinksContainer>
                    <PageLinkes color="#857D7A" />
                    <TextContainer>
                        <TextParagraph>
                            General Inquiries: info@casa-barro.com Press
                            Inquiries:
                        </TextParagraph>
                        <TextParagraph>
                            press@casa-barro.com Telephone: (000) 111 2222 ©2022
                            casa
                        </TextParagraph>
                        <TextParagraph>barro</TextParagraph>
                    </TextContainer>
                </LinksContainer>
                <Spacer />
            </FooterContainer>
        </FooterBackground>
    );
};

export default Footer;
