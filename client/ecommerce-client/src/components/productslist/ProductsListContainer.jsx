import ProductsList from "./ProductsList"


const ProductsListContainer = ({products}) => {
    return (
        <div style={{ margin: '28px', padding: '0px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', justifyItems: 'center', rowGap: '80px'}}>
            {products.map(product => (
                <div key={product._id}>
                    <ProductsList product={product} />
                    
                </div>
            ))}
        </div>
    )
}

export default ProductsListContainer