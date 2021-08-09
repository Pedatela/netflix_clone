import React from 'react';

import { Container, Vertical, Horizontal, Name, Info, Points, Year, Season, Description, Buttons, WatchButton, MyListButton, Genres } from './styles';

function FeaturedMovie({ item }) {
    const firstDate = new Date(item.first_air_date)
    let description = item.overview

    if (description.length > 200) {
        description = description.substring(0, 200) + '...'
    }

    return (
        <Container img={item.backdrop_path}>
            <Vertical>
                <Horizontal>
                    <Name>{item.original_name}</Name>
                    <Info>
                        <Points>{item.vote_average} pontos</Points>
                        <Year>{firstDate.getFullYear()}</Year>
                        <Season>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</Season>
                    </Info>
                    <Description>
                        {description}
                    </Description>
                    <Buttons>
                        <WatchButton href={`/watch${item.id}`}> ▶ Assistir</WatchButton>
                        <MyListButton href={`/list/add/${item.id}`}>+ Minha Lista</MyListButton>
                    </Buttons>

                    <Genres><strong>Gêneros:</strong> {item.genres.map((genre) => (genre.name)).join(", ")}
                    </Genres>

                </Horizontal>
            </Vertical>
        </Container>
    );
}

export default FeaturedMovie;