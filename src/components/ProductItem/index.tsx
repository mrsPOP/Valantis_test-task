import styles from "./styles.module.css";

const ProductItem = ({ id, product, price, brand }: Product) => {
  return (
    <li className={styles.productItem}>
      <div>{id}</div>
      <div className={styles.productDetails}>
        <div>{product}</div>
        {brand && <div className={styles.brand}>{brand}</div>}
      </div>
      <div>{price}</div>
    </li>
  );
};

export default ProductItem;
