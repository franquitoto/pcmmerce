import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './ProductCard.css'
// 
const ProductCard = ({ data }) => {
    return (
        <Card sx={{ maxWidth: 345}} className='card'>
            <CardMedia
                component="img"
                image={data.img}
                alt={data.nombre}
                className="img"
            />
            <CardContent className='cardContent'>
                <Typography gutterBottom variant="h5" component="div">
                    {data.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.resumen}
                </Typography>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
            </CardActions>
            </CardContent>
            
        </Card>
    )
}

export default ProductCard