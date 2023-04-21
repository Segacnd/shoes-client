import { Pagination, Slider } from "@mui/material";
import { Checkbox, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useEffect, useMemo, useState, useCallback } from "react";
import { QueryParams } from "../interface";
import ItemCarousel from "../ItemsCarousel/ItemCarousel";
import CardItem from "../NewArrivals/CardItem/CardItem";
import { startFetchingAll } from "../redux/slices/allProductSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import styles from "./Store.module.css";

function Store() {
  const dispatch = useAppDispatch();
  // ВЫНИМАЕМ НУЖНЫЕ ДАННЫЕ ( ТОВАРЫ, БРЕНДЫ, РАЗМЕРЫ, КОЛИЧЕСТВО ОТСОРТИРОВАННЫХ ТОВАРОВ)
  const allItems = useAppSelector((state) => state.allProd.result);
  const allBrands = useAppSelector((state) => state.allProd.brands);
  const allSizes = useAppSelector((state) => state.allProd.sizes);
  const totalCount = useAppSelector((state) => state.allProd.totalCount);

  // ДЕЛАЕМ ПАГИНАЦИЮ
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageCount = +totalCount / 9;
  const totalPage = Math.ceil(pageCount);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  // РЕАЛИЗУЕМ СОРТИРОВКУ
  const [sortValue, setSortValue] = useState<string>("asc");
  const handleChangeSortValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSortValue((event.target as HTMLInputElement).value);
  };

  const resetSort = () => {
    setSortValue("asc");
  };

  // РЕАЛИЗУЕМ ФИЛЬТРАЦИЮ ПО БРЕНДАМ (ПОЧИТИНЬ ОБНОВЛЕНИЕ ЧЕКБОКСОВ)
  const [brandlist, setBrandList] = useState<string[]>([]);

  const handleRemoveItem = useCallback(
    (el: string) => {
      if (brandlist.includes(el)) {
        setBrandList((prev) => prev.filter((item) => item !== el));
      } else {
        setBrandList((prev) => [...prev, el]);
      }
    },
    [brandlist]
  );
  const memoizedBrand = useMemo(() => {
    return allBrands.map((el, i) => (
      <FormControlLabel
        key={el + i}
        control={<Checkbox onClick={() => handleRemoveItem(el)} />}
        label={el}
      />
    ));
  }, [allBrands, handleRemoveItem]);

  const resetFilters = () => {
    setBrandList([]);
    setRadioValue("");
  };
  //ФИЛЬТРАЦИЯ ПО ГЕНДЕРУ
  const [radioValue, setRadioValue] = useState("");
  const handleChangeRadioValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue((event.target as HTMLInputElement).value);
  };

  const maxRange = allSizes.length;
  const [firstStep, setFirstStep] = useState<number>(0);

  const nextStep = () => {
    firstStep > maxRange - 4 ? setFirstStep(0) : setFirstStep((prev) => prev + 3);
  };
  const prevtStep = () => {
    firstStep <= 0 ? setFirstStep(maxRange - 3) : setFirstStep((prev) => prev - 3);
  };

  // СОРТИРОВКА ПО ЦЕНЕ
  const mark = [
    {
      value: 100,
      label: 100,
    },
    {
      value: 150,
      label: 150,
    },
    {
      value: 180,
      label: 180,
    },
    {
      value: 220,
      label: 220,
    },
  ];

  const [val, setVal] = useState([100, 220]);
  const updateValue = (e: Event, value: number | number[], activeThumb: number) => {
    if (Array.isArray(value)) {
      setVal(value);
    }
  };
  // const memoizeSizes = useMemo(() => {
  //   const rr =  [].splice(firstStep, 3)
  //   console.log("TEST - ", rr)
  //   console.log("ALLALA - ", allSizes)
  //   const r = allSizes.splice(firstStep, 3);

  //   console.log("Test result - ", r)
  //   return r.map((el, i) => (
  //     <span
  //       onClick={() => setActiveSize((prev) => (prev === el ? null : el))}
  //       className={activeSize === el ? `${styles.active}` : `${styles.size}`}
  //       key={i}
  //     >
  //       {el}
  //     </span>
  //   ));
  // }, [allSizes, firstStep, activeSize]);

  useEffect(() => {
    const params: QueryParams = {
      limit: 9,
      page: currentPage,
      sortBy: sortValue,
      brand: brandlist,
      name: radioValue,
      priceRange: val,
    };
    dispatch(startFetchingAll(params));
  }, [dispatch, currentPage, sortValue, brandlist, radioValue, val]);

  return (
    <div className={styles.storeWrapper}>
      <section className={styles.storeFilters}>
        <div className={styles.titleWrapper}>
          <p className={styles.title}>Sorted by</p>
          <button className={styles.titleButton} onClick={resetSort}>
            Reset Sorts
          </button>
        </div>
        <div>
          <FormControl id="demo-radio-buttons-group">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group"
              defaultValue="Price"
              name="radio-buttons-group"
            >
              <FormControlLabel value="Price" control={<Radio />} label="Price" />
              <FormControlLabel value="Popularity" control={<Radio />} label="Popularity" />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <FormControl id="demo-radio-buttons-group-label">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              defaultValue="asc"
              value={sortValue}
              onChange={handleChangeSortValue}
            >
              <FormControlLabel value="asc" control={<Radio />} label="Ascending" />
              <FormControlLabel value="desc" control={<Radio />} label="Descending" />
            </RadioGroup>
          </FormControl>
        </div>

        <div className={styles.priceSliderWrapper}>
          <p className={styles.title}>Price Range</p>

          <Slider
            value={val}
            min={100}
            defaultValue={100}
            max={220}
            step={10}
            marks={mark}
            valueLabelDisplay="auto"
            onChange={updateValue}
          />
        </div>

        <div className={styles.titleWrapper}>
          <p className={styles.title}>Filter by</p>
          <button className={styles.titleButton} onClick={resetFilters}>
            Reset Filters
          </button>
        </div>

        <div className={styles.miniTitle}>
          <p>Gender</p>
          <FormControl id="demo-radio-buttons-group-gender">
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-gender"
              name="radio-buttons-gender"
              defaultValue=""
              value={radioValue}
              onChange={handleChangeRadioValue}
            >
              <FormControlLabel value={""} control={<Radio />} label="For Everyone" />
              <FormControlLabel value={"men"} control={<Radio />} label="For Men" />
              <FormControlLabel value={"women"} control={<Radio />} label="For Women" />
            </RadioGroup>
          </FormControl>
        </div>

        <div className={styles.miniTitle}>
          <p>Brand</p>
          {memoizedBrand}
        </div>

        <p className={styles.miniTitle}>All sizes:</p>
        <div className={styles.sizesWrapper}>
          <button className={styles.sliderButton} onClick={prevtStep}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
            </svg>
          </button>

          {/* {memoizeSizes} */}
          <button className={styles.sliderButton} onClick={nextStep}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
            </svg>
          </button>
        </div>
      </section>
      <section className={styles.storeContent}>
        <div className={styles.itemsWrapper}>
          {allItems.length ? (
            allItems.map((el, i) => <CardItem key={i} obj={el} closeButton={true}/>)
          ) : (
            <div className={styles.error}>
              <h1 className={styles.errorTitle}>Sneakers Not Found</h1>
              <span className={styles.errorSmile}>:o</span>
            </div>
          )}
        </div>
        <div className={styles.paginationWrapper}>
          <Pagination size="large" count={totalPage} page={currentPage} onChange={handleChange} />
        </div>
        {/* <ItemCarousel /> */}
      </section>
    </div>
  );
}
export default Store;
