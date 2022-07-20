import React from "react";
import styled from "styled-components";

import { Grid } from "../components/common";
import Footer from "../components/footer";
import { NEIGHBORHOOD_COVER } from "../constants/remote_files";
import TitleTextBlock from "../components/TitleTextBlock";

const COVER_URL = NEIGHBORHOOD_COVER
const TITLE_TEXT = "Casa Barro is located in Hamori, the center of Daejung District."

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
    margin-left: -16px;
    font-size: 0px;
`;

let NeighborhoodPage = () => {
    return (
        <PageContainer>
            <ImageBase>
                <Image src={COVER_URL}/>
            </ImageBase>
            <TitleTextBlock text={TITLE_TEXT}/>
            <Footer />
        </PageContainer>
    )
}

export default NeighborhoodPage



