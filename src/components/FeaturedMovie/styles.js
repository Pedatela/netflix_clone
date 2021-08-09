import styled from "styled-components";

export const Container = styled.section`
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: ${props => `url("https://image.tmdb.org/t/p/original${props.img}")`};
`;


export const Vertical = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111, transparent 90%);
 `;

export const Horizontal = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
`;

export const Name = styled.div`
    font-size: 60px;
    font-weight: bold;
`;

export const Info = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;
`;

export const Points = styled.div`
    display: inline-block;
    color: #46d369;
    margin-right: 15px;
`;


export const Year = styled.div`
    display: inline-block;
    margin-right: 15px;
`;

export const Season = styled.div`
    display: inline-block;   
`;

export const Description = styled.div`
    margin-top: 15px;
    font-size: 20px;
    color: #999;
    max-width: 40%;
`;

export const Buttons = styled.div`
    margin-top: 15px;
`;

export const WatchButton = styled.div`
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    background-color: #FFF;
    color: #000;
    opacity: 1;
    transition: all ease 0.2s;

    &:hover{
        opacity: 0.7;
    }
`;

export const MyListButton = styled.div`
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    background-color: #333;
    color: #FFF;
    opacity: 1;
    transition: all ease 0.2s;

    &:hover{
        opacity: 0.7;
    }
`;

export const Genres = styled.div`
    margin-top: 15px;
    font-size: 18px;
    color: #999;
`;