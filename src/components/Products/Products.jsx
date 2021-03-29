import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

const products = [
  { id: 1, name: 'Shoes', description: 'running shoes', price: '$5', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cushion-shoes-7659-1584132587.jpg'},
  { id: 2, name: 'Macbook', description: 'apple macbook', price: '$10', image: 'https://cdn.thewirecutter.com/wp-content/media/2020/12/macbook-2048px-9.jpg?auto=webp&quality=60&crop=1.91:1&width=1200'}
]

const Products = () => {
  const classes = useStyles() 
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
    <Grid container justify="center" spacing={4}>
      {products.map(product => (
        <Grid item key={product.id} sx={12} sm={6} m={4} lg={3}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  </main>
  )

}

export default Products