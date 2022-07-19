import React from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

import Logo from "../svgs/logo";

import LanguageSelector from "./languageSelector";
import PageLinkes from "./pageLinks";

const Base = styled.div`
    position: absolute;
    top: 0px;
    margin-left: 3%;
    margin-right: 2%;
    width: 95%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    margin-top: 37px;

    z-index: 9999;
`;

const IconContainer = styled.div``;

const LinksContainer = styled.div`
    margin-left: 12.5%;
    margin-right: 12.5%;
    flex-grow: 2;
`

let NavigatorBar = (props) => {
    let { language, selectLanguage } = props;
    let location = useLocation();
    let color = location.pathname == "/" ? "#833316" : "#FFF3E1";

    return (
        <Base>
            <IconContainer>
                <Link to="/">
                    <Logo color={color}/>
                </Link>
            </IconContainer>
            <LinksContainer>
                <PageLinkes color={color}/>
            </LinksContainer>
            <LanguageSelector
                color={color}
                language={language}
                selectLanguage={selectLanguage}
            />
        </Base>
    );
};

export default NavigatorBar;
