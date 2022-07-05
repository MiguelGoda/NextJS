import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };
  return (
    <div className={styles.ProductItem}>
      <Image loader={() => product.images[0]} src={product.images[0]} alt={product.title} width={240} height={240} layout="responsive" />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure className={styles['more-clickable-area']} onClick={() => {}} onKeyPress={() => handleClick(product)} aria-hidden="true">
          {state.cart.includes(product) ? (
            <Image width={100} height={100} className={(styles.disabled, styles['add-to-cart-btn'])} src={addToCartImage} alt="added to cart" />
          ) : (
            <Image className={(styles['add-to-cart-btn'], styles.pointer)} src={addToCartImage} alt="add to cart" width={35} height={35} layout="fixed" />
          )}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
