import React from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

import Logo from "../svgs/logo";

const Base = styled.div`
    position: fixed;
    margin-left: 3%;
    margin-right: 2%;
    width: 95%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    margin-top: 3.5%;
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

const LangSelector = styled.div`
    color: ${(props) => props.color};
`;

const Language = styled.button`
    font-family: "GT Pressura Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
    text-transform: lowercase;
    display: inline;

    color: inherit;
    border: none;
    background: none;
    cursor: pointer;

    text-decoration: ${(props) => (props.selected ? "underline" : "none")};
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

    console.log("lan:", language);
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
            <LangSelector color={color}>
                <Language
                    selected={language === "kr"}
                    onClick={() => selectLanguage("kr")}
                >
                    kr
                </Language>
                \
                <Language
                    selected={language === "en"}
                    onClick={() => selectLanguage("en")}
                >
                    en
                </Language>
            </LangSelector>
        </Base>
    );
};

export default NavigatorBar;
