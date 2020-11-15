import styled from 'styled-components';

export const Container = styled.div`
    padding: 15px;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;

    background-color: rgba(253, 253, 253, 0.69);
    backdrop-filter: blur(25px);
    border-radius: 8px 8px 0px 0px;
    box-shadow: inset rgb(0 0 0) 0px 0px 10px -9px, inset rgb(0 0 0) 0px 0px 10px -9px, inset rgb(0 0 0) 0px 0px 10px -9px;
`;

export const Wrapper = styled.div`
    width: 380px;
    height: 270px;

    overflow: hidden;

    position: relative;
    align-self: stretch;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: stretch;
    align-content: stretch;
    align-items: stretch;
`;

export const ContainerWrapper = styled.div`
    height: 100%;
`;

export const EntityContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: stretch;
    align-items: center;
`;

export const EmptyContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: stretch;
    align-items: center;
    height: 100%;
    padding: 75px;
    font-size: 13px;
    color: #777;
    line-height: 17px;
`;