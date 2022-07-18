import React from "react";
import styled from "styled-components";

const LangSelectorBase = styled.div`
    font-size: 20px;
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

const LanguageSelector = (props) => {
    let { color, language, selectLanguage } = props;
    return (
        <LangSelectorBase color={color}>
            <Language
                selected={language === "kr"}
                onClick={(event) => {
                    event.stopPropagation()
                    selectLanguage("kr")
                }}
            >
                kr
            </Language>
            \
            <Language
                selected={language === "en"}
                onClick={(event) => {
                    event.stopPropagation()
                    selectLanguage("en")
                }}
            >
                en
            </Language>
        </LangSelectorBase>
    );
};

export default LanguageSelector;
