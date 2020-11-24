import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 500px;
    position: relative;
    align-self: stretch;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: stretch;
    align-items: center;
`;

export const ContainerWrapper = styled.div`
    display: flex;

    width: 100%;
    height: 340px;

    position: absolute;
    bottom: 50px;

    background-color: rgba(253, 253, 253, 0.69);
    backdrop-filter: blur(25px);
    border-radius: 8px 8px 0px 0px;
    box-shadow: inset rgb(0 0 0) 0px 0px 10px -9px, inset rgb(0 0 0) 0px 0px 10px -9px, inset rgb(0 0 0) 0px 0px 10px -9px;

    margin: 0px;
`;

export const EntityContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: stretch;
    align-items: center;
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
`;

export const ComponentsListContainer = styled.div`
    display: flex;
    flex: 1 0 auto;
    flex-direction: row-reverse;
    flex-wrap: wrap;
`;

export const EntityMetaContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 0 0 160px;
`;

export const EntityTagLabel = styled.div`
    color: #555;
    text-decoration: uppercase;
    font-size: 14px;
`;

export const EntityNameLabel = styled.div`
    color: #777;
    text-decoration: capitalize;
    font-size: 12px;
`;

export const Chip = styled.div`
    flex: 0 0 20px;
`;