import styles from './ListCard.module.css';

export function ListCard({ props }) {
  const salePrice = (
    props.price -
    props.price * props.saleRatio
  ).toLocaleString(navigator.language);
  const originPrice = props.price.toLocaleString(navigator.language);

  return (
    <a href="#" className={styles['product-each']}>
      <img
        className={styles['card-image']}
        src={props.image.thumbnail}
        alt={props.image.alt}
      />
      <button
        type="button"
        className={styles['cart-icon']}
        aria-label="cart-icon"
      ></button>
      <div className={styles['product-info']}>
        <span className={styles['product-info__delivery']}>샛별배송</span>
        <span className={styles['product-info__name']}>{props.name}</span>
        {props.saleRatio !== 0 ? (
          <>
            <div className={styles['price']}>
              <span className={styles['product-info__sale-ratio']}>
                {props.saleRatio * 100}%
              </span>
              <span className={styles['product-info__price']}>
                {salePrice}원
              </span>
            </div>
            <span className={styles['product-info__origin-price']}>
              {originPrice}원
            </span>
          </>
        ) : (
          <span className={styles['product-info__price']}>{salePrice}원</span>
        )}
        <span className={styles['product-info__description']}>
          {props.description}
        </span>
        <div className={styles['product-info__badge']}>
          {props.badge.karly === 'hidden' ? undefined : (
            <span className={styles['badge-karly']}>Karly Only</span>
          )}
          {props.badge.limit === 'hidden' ? undefined : (
            <span className={styles['badge-limit']}>한정수량</span>
          )}
        </div>
      </div>
    </a>
  );
}