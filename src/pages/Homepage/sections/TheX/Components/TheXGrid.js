import React from "react";
import styles from "../thex.module.css";
import xcoin from "../../../../../Assets/XCOIN.jpg";

const TheXGrid = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.gridItems}>
        <div className={styles.description}>
          The X&reg; is the company's registered service mark which <br />
          symbolizes highly secure cloud and blockchain protection.
          <br />
          X&reg; will also act as an Artificial Intelligent (A.I.) ChatBot
          <br />
          that provides customer support to our{" "}
          <span className={styles.goldcolor}>GOLD</span> members.
        </div>

        <div className="d-flex justify-content-center align-items-center mt-4">
          <img src={xcoin} width="40%" alt="" />
        </div>
        <h4>"We put the X in ACCESS and coined it &trade;"</h4>
      </div>
      <div>
        <div
          class="wistia_responsive_padding"
          style={{ padding: "56.25% 0 0 0", position: "relative" }}
        >
          <div
            class="wistia_responsive_wrapper"
            style={{
              height: "100%",
              left: "0",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          >
            <div
              class="wistia_embed wistia_async_gmreqhotsu videoFoam=true"
              style={{ height: "100%", position: "relative", width: "100%" }}
            >
              <div
                class="wistia_swatch"
                style={{
                  height: "100%",
                  left: "0",
                  opacity: "0",
                  overflow: "hidden",
                  position: "absolute",
                  top: "0",
                  transition: "opacity 200ms",
                  width: "100%",
                }}
              >
                <img
                  src="https://fast.wistia.com/embed/medias/gmreqhotsu/swatch"
                  style={{
                    filter: "blur(5px)",
                    height: "100%",
                    objectFit: "contain",
                    width: "100%",
                  }}
                  alt=""
                  aria-hidden="true"
                  onload="this.parentNode.style.opacity=1;"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheXGrid;
