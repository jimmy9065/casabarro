import React from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

import Logo from "../svgs/logo";

import LanguageSelector from "./languageSelector";

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

const LinkContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-grow: 2;
`;
const LinkFont = styled.div`
    font-family: "GT Pressura Mono";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 26.9px;
    color: ${(props) => props.color};
    &:hover {
        text-decoration: underline;
    }
`;

const LinkOptions = [
    "vision",
    "residence",
    "amenities",
    "neighborhood",
    "collaboration",
    "contact",
];

let NavigatorBar = (props) => {
    let { language, selectLanguage } = props;
    let location = useLocation();
    let color = location.pathname == "/" ? "#833316" : "#FFF3E1";

    let selectedLinkStyle = { textDecoration: "underline" };
    let normalLinkStyle = { textDecoration: "none" };

    return (
        <Base>
            <IconContainer>
                <Link to="/">
                    <Logo color={color} />
                </Link>
            </IconContainer>
            <LinkContainer>
                {LinkOptions.map((link) => {
                    return (
                        <Link
                            key={link}
                            to={link}
                            style={
                                location.pathname == "/" + link
                                    ? selectedLinkStyle
                                    : normalLinkStyle
                            }
                        >
                            <LinkFont color={color}>{link}</LinkFont>
                        </Link>
                    );
                })}
            </LinkContainer>
            <LanguageSelector
                color={color}
                language={language}
                selectLanguage={selectLanguage}
            />
        </Base>
    );
};

export default NavigatorBar;
