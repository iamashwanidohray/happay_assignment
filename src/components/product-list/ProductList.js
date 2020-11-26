import React from 'react';
import './ProductList.css';

function ProductList(props) {
    console.log(props.products);

    return(
        <div className="product-list">
            <div className="product__title">
                <h1>Most Popular</h1>
            </div>
        
            <ul className="cards">
            {props.products.map((product, i) => {
                    return(<li key={i} className="cards__item">
                                <div className="card">
                                <div className="card__image card__image--fence"><img src={product.img_url} alt="Card"/></div>
                                <div className="card__content">
                                    <div className="card__title">
                                        {product.name} 
                                        <div className="price__list">${product.final_price}</div>
                                        {product.original_price ? <div className="price__list original__price">${product.original_price}</div> : ''}
                                    </div>
                                    <p className="card__text">{product.description}</p>
                                    <button className="btn btn--block card__btn">Add To Cart</button>
                                </div>
                                </div>
                            </li>);
                })}
            </ul>
        </div>
    );
};

export default ProductList;