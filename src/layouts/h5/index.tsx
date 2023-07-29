import { useSize } from "ahooks";
import Header from "./components/Header";
import styles from "./index.less";

export default (props: any) => {
  const footerSize = useSize(document.getElementById("footer"));

  return (
    <div className={styles.layoutContainer}>
      <Header id="header" />
      <div
        className={styles.layoutContent}
        style={
          {
            "--footer-height": `${footerSize?.height ?? 0}px`,
          } as any
        }
      >
        {props.children}
      </div>
    </div>
  );
};
