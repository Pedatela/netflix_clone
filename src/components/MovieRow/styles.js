import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 30px;
`;

export const Title = styled.h2`
    margin: 0 0 0 30px;
`;

export const ListArea = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`;

export const List = styled.div`
    width: 999999999px;
`;

export const Item = styled.div`
    display: inline-block;
    cursor: pointer;
    width: 150px;
`;

export const CoverImage = styled.img`
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;

    &:hover {
        transform: scale(1);
    }
`;