import React, { useState } from 'react';

import { Container, Title, Left, Right, ListArea, List, Item, CoverImage } from './styles';

// Icons
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function MovieRow({ title, items }) {
    const [scrollX, setScrollX] = useState(-400)

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2)
        if (x > 0)
            x = 0
        setScrollX(x)
    }


    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2)
        const listW = items.data.results.length * 150
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
        }
        setScrollX(x)
    }

    return (
        <Container>
            <Title>{title}</Title>
            <Left onClick={handleLeftArrow}> <NavigateBeforeIcon style={{ fontSize: 50 }} /> </Left>
            <Right onClick={handleRightArrow}><NavigateNextIcon style={{ fontSize: 50 }} /></Right>
            <ListArea>
                <List scrollX={`${scrollX}px`} width={`${items.data.results.length * 150}px`}>
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