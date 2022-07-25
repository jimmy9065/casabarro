import React from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

const LinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
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
        text-decoration-color: ${(props) => props.color};
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

let PageLinkes = (props) => {
    let { color } = props;

    let location = useLocation();
    let selectedLinkStyle = { 
        textDecoration: "underline",
        textDecorationColor: color,
    };
    let normalLinkStyle = { textDecoration: "none" };

    return (
        <LinkContainer>
            {LinkOptions.map((link) => {
                return (
                    <Link
                        key={link}
                        to={"/" + link}
                        style={
                            location.pathname === "/" + link
                                ? selectedLinkStyle
                                : normalLinkStyle
                        }
                    >
                        <LinkFont color={color}>{link}</LinkFont>
                    </Link>
                );
            })}
        </LinkContainer>
    );
};

export default PageLinkes;
