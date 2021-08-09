import React from 'react';

import { Container, Title, ListArea, List, Item, CoverImage } from './styles';

function MovieRow({ title, items }) {
    return (
        <Container>
            <Title>{title}</Title>
            <ListArea>
                <List>
                    {items.data.results.length > 0 && items.data.results.map((result, index) => (
                        <Item key={index}>

                            <CoverImage src={`https://image.tmdb.org/t/p/w300${result.poster_path}`} alt={result.original_title} />
                        </Item>

                    ))}
                </List>
            </ListArea>
        </Container>
    );
}

export default MovieRow;