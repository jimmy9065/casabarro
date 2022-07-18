import React from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

import Logo from "../svgs/logo";

const Base = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 37px;
    margin-left: 61px;
    margin-right: 40px;
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

const LangSelector = styled.div``;

const LinkOptions = [
    "vision",
    "residence",
    "amenities",
    "neighborhood",
    "collaboration",
    "contact",
];

let NavigatorBar = () => {
    let location = useLocation();
    let color = location.pathname == "/" ? "#833316" : "#000000";

    let selectedLinkStyle = { textDecoration: "underline" };
    let normalLinkStyle = { textDecoration: "none"};

    return (
        <Base>
            <IconContainer>
                <Link to="/">
                    <Logo color={color} />
                </Link>
            </IconContainer>
            <LinkContainer>
                {LinkOptions.map((link) => {
                    console.log(
                        "current link:",
                        link,
                        "match?",
                        location.pathname == link
                    );
                    return (
                        <Link
                            key={link}
                            to={link}
                            style={
                                location.pathname == "/"+link
                                    ? selectedLinkStyle
                                    : normalLinkStyle
                            }
                        >
                            <LinkFont color={color}>{link}</LinkFont>
                        </Link>
                    );
                })}
            </LinkContainer>
            <LangSelector>
                <div>En/Kr</div>
            </LangSelector>
        </Base>
    );
};

export default NavigatorBar;
