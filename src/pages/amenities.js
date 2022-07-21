import React from "react";
import styled from "styled-components";

import Footer from "../components/footer";
import { AMENITIES_COVER } from "../constants/remote_files";
import TitleTextBlock from "../components/TitleTextBlock";
import ImageRow from "../components/ImageRow";
import { TextBlock1, TextBlock2} from "../components/amenities/textblocks"
import { 
    AMENITIES_IMG_1, AMENITIES_IMG_2, AMENITIES_IMG_3, AMENITIES_IMG_4
} from "../constants/remote_files";

const COVER_URL = AMENITIES_COVER
const TITLE_TEXT = "Island life reimagined with the elegance and convenience of hotel living."

const images = [
    {
        src: AMENITIES_IMG_1,
        posStart: 2,
        posEnd: 12,
        caption: "casa barro: facade",
    },
    {
        src: AMENITIES_IMG_2,
        posStart: 2,
        posEnd: 10,
        caption: "casa barro: facade",
    },
    {
        src: AMENITIES_IMG_3,
        posStart: 6,
        posEnd: 10,
        caption: "casa barro: facade",
        leftChild: (<TextBlock1/>),
    },
    {
        src: AMENITIES_IMG_4,
        posStart: 5,
        posEnd: 12,
        caption: "casa barro: facade",
        leftChild: (<TextBlock2/>),
    },
]

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

let AmenitiesPage = () => {
    return (
        <PageContainer>
            <ImageBase>
                <Image src={COVER_URL}/>
            </ImageBase>
            <TitleTextBlock text={TITLE_TEXT}/>
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
            <Footer />
        </PageContainer>
    )
}

export default AmenitiesPage


