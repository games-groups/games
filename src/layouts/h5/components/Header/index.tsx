// import logoImg from '@/assets/Layout/logo.png';
import { useHeader } from "@/logic/Layout/hooks";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { useBoolean } from "ahooks";
import { default as classNames, default as classnames } from "classnames";
import type { FC } from "react";
import styles from "./index.less";

const Index: FC<{ id?: string }> = ({ id }) => {
  const { account, handleClick, connectWallet, isConnect, navList } =
    useHeader();

  const [visible, { set: setVisible }] = useBoolean(false);

  return (
    <div className={styles.headerContainer} id={id}>
      <div className={styles.headerNav}>
        {/* <img src={logoImg} alt="" /> */}
        <div
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {!visible ? <MenuOutlined /> : <CloseOutlined />}
        </div>
      </div>

      <div
        className={classNames(styles.headerNavContent, {
          [styles.headerNavHidden]: !visible,
        })}
      >
        <div className={styles.headerNavList}>
          {navList?.map((item) => (
            <div
              className={classnames(styles.headerNavItem, {
                [styles.navDisabled]: item.disabled,
              })}
              key={item.basePath}
              onClick={() => {
                handleClick("/h5")(item);
                setVisible(false);
              }}
            >
              {item.title}
            </div>
          ))}
        </div>

        <div className={styles.contractContainer}>
          <button onClick={connectWallet}>
            {isConnect
              ? account?.substring(0, 4) +
                "......" +
                account?.substring(account.length - 4, account.length)
              : "Connect"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
