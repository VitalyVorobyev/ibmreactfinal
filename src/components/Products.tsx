import Header from './Header';

const Products = () => {
    return (
        <div className="products-page">
            <Header />
            <div className="products-content">
                <h1>Products</h1>
                <p>Here you can find a variety of plants and gardening supplies.</p>
                {/* Add product listings here */}
            </div>
        </div>
    );
};

export default Products;
