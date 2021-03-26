import Grid from '@material-ui/core/grid';

const products = [
  { id: 1, name: 'Shoes', description: 'running shoes'}
  { id: 2, name: 'Macbook', description: 'apple macbook'}
]

const Products = () => {
  <main>
    <Grid container justify="center" spacing={4}>
      {products.map(product => (
        <Grid item key={product.id} sx={12} sm={6} m={4} lg={3}>
          <Product />
        </Grid>
      ))}
    </Grid>
  </main>
}