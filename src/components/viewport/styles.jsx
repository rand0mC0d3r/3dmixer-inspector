import styled from 'styled-components';

export const ViewportBar = styled.div`
    align-items: center;
    display: flex;
    pointer-events: all;
    font-size: 14px;
    justify-content: space-between;
    margin: 0 auto;

    padding: 3px 6px;

    background-color: #fdfdfd;
    border-radius: 8px;
    box-shadow: 0px 0px 10px -9px #000, 0px 0px 10px -9px #000, 0px 0px 10px -9px #000;
    border-bottom: 2px solid ${props => props.accent || 'transparent'};
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 10px;
    right: 75px;
`;

export const ToolsBar = styled.div`
    align-items: center;
    display: flex;
    pointer-events: all;
    font-size: 14px;
    justify-content: space-between;
    margin-right: 10px;

    padding: 3px 6px;

    background-color: rgba(253,253,253,0.5);
    border-radius: 8px;
    backdrop-filter: blur(25px);
    box-shadow: 0px 0px 10px -9px #000, 0px 0px 10px -9px #000, 0px 0px 10px -9px #000;
`;