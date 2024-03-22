import styled from 'styled-components';

export const LoadMore = styled.button`
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.01em;
    margin-left: 45%;

    border: 1px solid rgba(71, 84, 103, 0.2);
    padding: 16px 32px;
    width: 145px;
    height: 56px;
    border-radius: 200px;
    cursor: pointer;

    background-color: transparent;
    color: #E44848;

    transition: background-color 0.3s;

    &:hover,
    &:focus {
        background-color: #E44848;
        color: white;
    }
`;
