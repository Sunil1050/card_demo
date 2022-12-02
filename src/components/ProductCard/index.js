import './index.css';

const ProductCard = props => {
    const { eachProduct, onHover} = props;
    const { id, image } = eachProduct;

    const onClickProduct = event => {
        onHover(event.currentTarget.id)
    }
    return (
        <button type="button" id={id} className="button" onClick={onClickProduct}>
            <div className="card card-container" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top image" alt={`product_${id}`} />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </button>
    )
}
export default ProductCard;
