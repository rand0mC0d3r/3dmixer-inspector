import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

export const StyledSelect = styled(Select)`
    width: 60px;
    pointer-events: all;
`;

export const StyledButton = styled(Button)`
    width: 60px;
    pointer-events: all;
`;

export const StyledMenuItem = styled.div`
    color: #555 !important;
    font-size: 13px !important;
    text-transform: capitalize;
`;

export const Container = styled.div`
    cursor: default;
    padding: 10px 15px;
    background: var(--background-paper-translucent);
    border-radius: 8px 8px 0px 0px;

    height: 700px;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    justify-items: stretch;
    align-items: stretch;
`;
