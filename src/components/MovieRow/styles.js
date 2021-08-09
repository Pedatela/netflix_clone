import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 30px;
`;

export const Title = styled.h2`
    margin: 0 0 0 30px;
`;

export const Left = styled.div`
   position: absolute;
   width: 40px;
   height: 225px;
   background-color: rgba(0,0,0, 0.6);
   left: 0;
   z-index: 99;
   display: flex;
   align-items: center;
   justify-content: center;
   overflow-x: hidden;
   cursor: pointer;
   opacity: 0;
   transition: all ease 0.2s;

    ${Container}:hover & {
        opacity: 1;
    }

`;

export const Right = styled.div`
    position: absolute;
   width: 40px;
   height: 225px;
   background-color: rgba(0,0,0, 0.6);
   right: 0;
   z-index: 99;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   opacity: 0;
   transition: all ease 0.2s;

   ${Container}:hover & {
        opacity: 1;
    }
`;

export const ListArea = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`;

export const List = styled.div`
    margin-left: ${props => props.scrollX};
    width: ${props => props.width};
    transition: all ease 0.2s;
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