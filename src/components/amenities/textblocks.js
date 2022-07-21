import React from "react";
import TextBlock from "../TitleContentTextBlocker";

const TextBlock1 = () => {
    return (
        <React.Fragment>
            <TextBlock
                title="pool"
                content="Elevated above the road and surrounded by trees, the infinity pool is a private and indulgent experience."
                start={2}
                end={4}
            />
            <TextBlock
                title="gym"
                content="Ultimate personal experience offering wellness for mind, body, and soul. The gym offers private and group classes with state-of-art equipment and the opportunity to book private treatments."
                start={2}
                end={4}
                position="absolute"
                top={210}
            />
        </React.Fragment>
    );
};

const TextBlock2 = () => {
    return (
        <TextBlock
            title="Select Shop"
            content="The lobby shop showcases curated pet and earth friendly products from around the world. A showcase for art and nature, the shop is a perfect place to linger for exotic scents and sense of travel."
            start={2}
            end={4}
        />
    );
};

export { TextBlock1, TextBlock2 };
