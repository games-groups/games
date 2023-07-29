import { useSize } from "ahooks";
import Header from "./components/Header";
import styles from "./index.less";

const iframeStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  border: "none",
  borderRadius: "5px",
};

export default (props: any) => {
  const headerSize = useSize(document.getElementById("header"));

  return (
    <div className={styles.layoutContainer}>
      <Header id="header" />
      <div
        className={styles.layoutContent}
        style={
          {
            "--header-height": `${headerSize?.height ?? 0}px`,
            // '--footer-height': `${footerSize?.height ?? 0}px`,
          } as any
        }
      >
        <div
          style={{
            minHeight: `calc(100vh - ${headerSize?.height ?? 0}px`,
            height: "100%",
            padding: "0 10px 20px 10px",
          }}
        >
          {props.children}
        </div>
      </div>
      {/* <Footer id="footer" /> */}
    </div>
  );
};
