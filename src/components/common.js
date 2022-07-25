import styled from "styled-components";

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 16px;
    margin-left: 16px;
    margin-right: 16px;
`;

const PageBase = styled(Grid)`
    position: relative;
    height: 100%;
`;

const ContainImage = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
`;

const DividerContainer = styled.div`
    width: 100%;
    padding: ${props=>(props.padding)}px 0px;
`

const DividerLine = styled.hr`
    margin: 0px 0px;
`

const Divider = (props) => {
    let { spacing } = props
    if (spacing == undefined) {spacing = 0}

    return (
        <DividerContainer padding={spacing/2}>
            <DividerLine/>
        </DividerContainer>
    )
}

export { PageBase, Grid, ContainImage, Divider };
