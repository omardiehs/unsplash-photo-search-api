import { useState } from "react";
import Thumb from "../thumb";
import Popup from "../popup";
import styles from "./photos.module.css";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

export default function Photos({ photos }) {
  const [photo, setPhoto] = useState({});
  const [isPopup, setIsPopup] = useState(false);

  function handleThumbClick(e) {
    setPhoto(e);
    setIsPopup(true);
  }

  function closePopup() {
    setIsPopup(false);
  }

  return (
    <div className={styles.photos}>
      {photos.length &&
        photos.map((e, i) =>
          isPopup ? (
            photo.id === e.id && (
              <Popup key={i} element={e} onClickIcon={closePopup} />
            )
          ) : (
            <Thumb key={i} element={e} onClick={() => handleThumbClick(e)} />
          )
        )}
    </div>
  );
}
