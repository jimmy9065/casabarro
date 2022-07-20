import React from "react";
import styled from "styled-components";

import { Grid } from "../components/common";
import Footer from "../components/footer";
import { AMENITIES_COVER } from "../constants/remote_files";

const COVER_URL = AMENITIES_COVER

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

let AmenitiesPage = () => {
    return (
        <PageContainer>
            <ImageBase>
                <Image src={COVER_URL}/>
            </ImageBase>
            <Footer />
        </PageContainer>
    )
}

export default AmenitiesPage


