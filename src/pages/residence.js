import React from "react";
import styled from "styled-components";

import Footer from "../components/footer";
import { RESIDENCE_COVER } from "../constants/remote_files";
import TitleTextBlock from "../components/TitleTextBlock";
import ImageRow from "../components/ImageRow";
import { TextBlock1, TextBlock2, TextBlock3} from "../components/residence/textblocks"
import FlowPlanBlock from "../components/residence/flowPlanBlock";

const COVER_URL = RESIDENCE_COVER;
const TITLE_TEXT =
    "Island life reimagined with the elegance and convenience of hotel living.";

const images = [
    {
        src: "https://casa-barro-public.s3.ap-northeast-2.amazonaws.com/residence/image1.jpg",
        posStart: 3,
        posEnd: 11,
        caption: "casa barro: facade",
    },
    {
        src: "https://casa-barro-public.s3.ap-northeast-2.amazonaws.com/residence/image2.jpg",
        posStart: 3,
        posEnd: 11,
        caption: "casa barro: facade",
    },
    {
        src: "https://casa-barro-public.s3.ap-northeast-2.amazonaws.com/residence/image3.jpg",
        posStart: 2,
        posEnd: 12,
        caption: "casa barro: facade",
    },
    {
        src: "https://casa-barro-public.s3.ap-northeast-2.amazonaws.com/residence/image4.jpg",
        posStart: 2,
        posEnd: 7,
        marginBottom: 20,
        rightChild: (<TextBlock1/>)
    },
    {
        src: "https://casa-barro-public.s3.ap-northeast-2.amazonaws.com/residence/image5.jpg",
        posStart: 2,
        posEnd: 7,
        caption: "casa barro: facade",
        marginTop: 20,
    },
    {
        src: "https://casa-barro-public.s3.ap-northeast-2.amazonaws.com/residence/image6.jpg",
        posStart: 7,
        posEnd: 12,
        caption: "casa barro: facade",
        marginBottom: 58,
        leftChild: (<TextBlock2/>)
    },
];

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
    width: 100vw;
    height: 100vh;
    font-size: 0px;
`;

let ResidencePage = () => {
    return (
        <PageContainer>
            <ImageBase>
                <Image src={COVER_URL} />
            </ImageBase>
            <TitleTextBlock text={TITLE_TEXT} />
            {images.map((image) => (
                <ImageRow
                    src={image.src}
                    posStart={image.posStart}
                    posEnd={image.posEnd}
                    caption={image.caption}
                    marginTop={image.marginTop}
                    marginBottom={image.marginBottom}
                    leftChild={image.leftChild}
                    rightChild={image.rightChild}
                />
            ))}
            <FlowPlanBlock/>
            <Footer />
        </PageContainer>
    );
};

export default ResidencePage;
