import React from "react";
import styled from "styled-components";

import { PageBase, Grid } from "../components/common";

const COVER_URL = 
"https://casa-barro-public.s3.ap-northeast-2.amazonaws.com/amenities/cover.jpg"

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
        <PageBase>
            <ImageBase>
                <Image src={COVER_URL}/>
            </ImageBase>
        </PageBase>
    )
}

export default AmenitiesPage


