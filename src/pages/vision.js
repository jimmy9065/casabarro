import React from "react";
import styled from "styled-components";

import ContentRow1 from "../components/vision/ContentRow1";
import ContentRow2 from "../components/vision/ContentRow2";
import ContentRow3 from "../components/vision/ContentRow3";
import ContentRow4 from "../components/vision/ContentRow4";
import ContentRow5 from "../components/vision/ContentRow5";

import Footer from "../components/footer";

const COVER_URL =
    "https://casa-barro-public.s3.ap-northeast-2.amazonaws.com/vision/cover.jpg";

const PageContainer = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 200px;
`;

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const ImageBase = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    font-size: 0px;
`;

let VisionPage = () => {
    return (
        <PageContainer>
            <ImageBase>
                <Image src={COVER_URL} />
            </ImageBase>
            <ContentRow1 />
            <ContentRow2 />
            <ContentRow3 />
            <ContentRow4 />
            <ContentRow5 />
            <Footer />
        </PageContainer>
    );
};

export default VisionPage;
