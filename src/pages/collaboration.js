import React from "react";
import styled from "styled-components";

import { Grid } from "../components/common";
import Footer from "../components/footer";
import { COLLABORATION_COVER } from "../constants/remote_files";
import Logo from "../svgs/CollaborationLogo"
import BackSlach from "../svgs/backslash";

const COVER_URL = COLLABORATION_COVER

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

const RowContainer = styled(Grid)`
    margin-top: 50px;
    margin-bottom: 100px;
`

const IconContainer1 = styled.div`
    grid-column: 2/3;
`

const IconContainer2 = styled.div`
    grid-column: 3/7;
`

let CollaborationPage = () => {
    return (
        <PageContainer>
            <ImageBase>
                <Image src={COVER_URL}/>
            </ImageBase>
            <RowContainer>
                <IconContainer1><BackSlach/></IconContainer1>
                <IconContainer2><Logo/></IconContainer2>
            </RowContainer>
            <Footer />
        </PageContainer>
    )
}

export default CollaborationPage



