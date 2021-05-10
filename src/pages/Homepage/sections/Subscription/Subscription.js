import React from "react";
import SubscriptionGrid from "./Components/SubscriptionGrid";
import styles from "./subscription.module.css";

const Subscription = () => {
  return (
    <div id="subscription" className={styles.container}>
      <SubscriptionGrid />
    </div>
  );
};

export default Subscription;
