import React from "react";
import styled from "styled-components";

import Footer from "../components/footer";
import { NEIGHBORHOOD_COVER } from "../constants/remote_files";
import TitleTextBlock from "../components/TitleTextBlock";
import ImageRow from "../components/ImageRow";
import { TextBlock1 } from "../components/neighborhood/textblocks"
import { ImageBlock1 } from "../components/neighborhood/imageblock"
import MapBlock from "../components/neighborhood/mapblock"
import { 
    NEIGHBORHOOD_IMG_1, NEIGHBORHOOD_IMG_2, NEIGHBORHOOD_IMG_3, NEIGHBORHOOD_IMG_4,
} from "../constants/remote_files";

const COVER_URL = NEIGHBORHOOD_COVER
const TITLE_TEXT = "Casa Barro is located in Hamori, the center of Daejung District."

const images = [
    {
        src: NEIGHBORHOOD_IMG_1,
        posStart: 2,
        posEnd: 12,
        caption: "casa barro: facade",
    },
    {
        src: NEIGHBORHOOD_IMG_2,
        posStart: 7,
        posEnd: 12,
        // caption: "casa barro: facade",
        marginBottom: 20,
        leftChild: (<TextBlock1/>),
    },
    {
        src: NEIGHBORHOOD_IMG_3,
        posStart: 2,
        posEnd: 7,
        marginTop:20,
        marginBottom: 20,
    },
    {
        src: NEIGHBORHOOD_IMG_4,
        posStart: 2,
        posEnd: 7,
        marginTop:20,
        rightChild: (<ImageBlock1/>)
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

let NeighborhoodPage = () => {
    return (
        <PageContainer>
            <ImageBase>
                <Image src={COVER_URL}/>
            </ImageBase>
            <TitleTextBlock text={TITLE_TEXT}/>
            {images.map((image) => (
                <ImageRow
                    key={image.src}
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
            <MapBlock/>
            <Footer />
        </PageContainer>
    )
}

export default NeighborhoodPage



