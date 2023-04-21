import { Drawer, Box, Typography } from "@mui/material";
import { useState } from "react";
import CardItem from "../NewArrivals/CardItem/CardItem";
import { useAppSelector } from "../redux/store";
import styles from "./DrawerMUI.module.css";

function DrawerMUI() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const wishList = useAppSelector((state) => state.wishSlice.wishList);

  const allItems = useAppSelector((state) => state.allProd.result);
  const wishListItems = allItems.filter((el) => wishList.includes(el.id));


  return (
    <div>
      <span className="wishlistSpan" onClick={() => setIsDrawerOpen(true)}>
        Wish List{" "}
      </span>

      <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <div className={styles.wishList}>
          <Typography variant="h5" component="div">
            Wish List
          </Typography>
          <div className={styles.wishItemWrapper}>
            {wishListItems &&
              wishListItems.map((el, i) => <CardItem key={i} obj={el} closeButton={false}  />)}
          </div>
        </div>
      </Drawer>
    </div>
  );
}
export default DrawerMUI;
