import React from "react";
import styled from "styled-components";

const TextBlockContents = [
    "Relaxed community at the city edge. 5-min walk to the ocean park, and 5-min in the opposite direction, to all the urban conveniences.",
    "Medical facilities, local market, schools and sports center are within walking distance and 5-minute drive.",
    "Enjoy the sight of dolphins in the front ocean, the taste of Jeju Island's top sushi restaurants, the sunset from a bakery cafe, and weekend markets.",
    "Conveniently located twenty minutes drive from the English Education District and Jeju International school. Direct bus and highway connectivity to Jeju International Airport.",
];

const hashTagTexts = [
    "Airport",
    "International School",
    "Market",
    "Deli",
    "Cafe",
    "Shops",
    "Park Walk",
    "Temple",
    "Restaurant",
    "Hospital",
    "School",
    "Studios",
    "Bus Stop",
];

const TextContainer1 = styled.div`
    grid-column: 2/5;
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    /* or 156% */

    color: #857d7a;
`;

const Paragraph = styled.p`
    margin-top: 28px;
    margin-bottom: 28px;
`;

const TextBlock1 = () => {
    return (
        <TextContainer1>
            {TextBlockContents.map((TextBlock, idx) => (
                <Paragraph key={"textblock" + idx}>{TextBlock}</Paragraph>
            ))}
        </TextContainer1>
    );
};

const HashTagContainer = styled.div`
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    /* or 156% */

    color: #857d7a;

    grid-column: 2/4;
`;

const HashTag = styled.p`
    margin-top: 0px;
    margin-bottom: 0px;
`;

const HashTags = () => {
    return (
        <HashTagContainer>
            {hashTagTexts.map((hashtag) => (
                <HashTag key={hashtag}>{hashtag}</HashTag>
            ))}
        </HashTagContainer>
    );
};

export { TextBlock1, HashTags };
