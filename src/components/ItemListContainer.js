import React from 'react';
import { Card } from 'react-bootstrap';

export const ItemListContainer = ({ texto }) => {
    return (
        <div>
            <Card className="banner">
                <Card.Img variant="top" src="/banner-herramientas.jpg" />
                <Card.Body>
                    <Card.Text className="textoBanner">{texto}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}