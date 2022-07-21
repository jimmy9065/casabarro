import React from "react";
import TextBlock from "../TitleContentTextBlocker";

const TextBlock1 = () => {
    return (
        <TextBlock
            title="Interior"
            content="Nature is woven into the interior with white oak, italian stone, and crystal walls of glass. European inspired kitchen and bath boast seamless design and state-of-art built in equipment."
            start={10}
            end={12}
        />
    );
};

const TextBlock2 = () => {
    return (
        <TextBlock
            title="Security"
            content="Parking is secured via an automated gate, and each floor unit is secured through a double lock system. 24 hour security is provided in partnership with a professional security company, alongside a hotel-grade smart home automation system for convenient management."
            start={2}
            end={4}
        />
    );
};

export { TextBlock1, TextBlock2 };
