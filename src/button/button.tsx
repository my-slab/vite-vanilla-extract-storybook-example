import React from "react";

import * as styles from "./button.css";

export function Button(props: any) {
  return <button {...props} className={styles.button} />;
}
