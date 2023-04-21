import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { startAddToCard } from "../redux/slices/cardSlice";
import { startFetchingOne } from "../redux/slices/singleProductSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";

import styles from "./SinglePage.module.css";

function SinglePage() {
  const [activeType, setActiveType] = useState<number>(0);
  const [currentSize, setCuttentSize] = useState<number | null>(null);

  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(startFetchingOne(Number(id)));
    }
  }, [id, dispatch]);

  const post = useAppSelector((state) => state.singleProd.singleProduct);

  const onSizeclick = (i: number, el:number) => {
    setActiveType(i)
    setCuttentSize(el)
  }

  const addItem = () => {
    if (post && currentSize) {
      const newPost = {...post, size_range: [currentSize]}
      dispatch(startAddToCard(newPost));
    }
  };

  return (
    <>
      {post && (
        <div className={styles.wrapper}>
          <div className={styles.card}>
            <div className={styles.imgWrapper}>
              <img src={post.pucture} alt="" />
            </div>
            <div className={styles.infoCard}>
              <h2>{post.name}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, a!</p>
              <div className={styles.sizes}>
                Size:
                <div className={styles.sizeWrap}>
                  {post.size_range.map((el, i) => (
                    <p
                      className={`${activeType === i ? `${styles.active}` : ""}   ${styles.size} `}
                      key={el}
                      onClick={() => onSizeclick(i, el)}
                    >
                      {el}
                    </p>
                  ))}
                </div>
              </div>
              <div className={styles.cardFooter}>
                <button className={styles.button} onClick={addItem}>
                  Add to card
                </button>
                <span className={styles.price}>${post.retail_price_cents / 100}</span>
              </div>
            </div>
            <div className={styles.brand_name}>{post.brand_name}</div>
          </div>
        </div>
      )}
    </>
  );
}
export default SinglePage;
