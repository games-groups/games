// import logoImg from '@/assets/Layout/logo.png';
import { useHeader } from "@/logic/Layout/hooks";
import classnames from "classnames";
import { findIndex } from "lodash";
import { useMemo, type FC } from "react";
import { history } from "umi";
import styles from "./index.less";

const Index: FC<{ id?: string }> = ({ id }) => {
  const { account, connectWallet, pathname, isConnect } = useHeader();
  const selectIndex = useMemo(() => {
    return findIndex(GAME_LIST, (item) => pathname?.includes(item.path));
  }, [pathname]);

  return (
    <div className={styles.headerContainer} id={id}>
      <div className={styles.logo}>{/* <img src={logoImg} alt="" /> */}</div>
      <div className={styles.headerNavList}>
        {GAME_LIST?.map((item, index) => (
          <div
            className={classnames(styles.headerNavItem, {
              [styles.navSelected]: selectIndex === index,
              // [styles.navDisabled]: item.disabled,
            })}
            key={item.path}
            onClick={() => {
              history.push(item.path);
              // handleClick('/web')(item);
            }}
          >
            <div>{item.title}</div>
            <div className={styles.navBadge} />
          </div>
        ))}
      </div>
      <div>
        {/* <button className={styles.contractUs}>Contract</button> */}
        <button className={styles.contractUs} onClick={connectWallet}>
          {isConnect
            ? account?.substring(0, 4) +
              "......" +
              account?.substring(account.length - 4, account.length)
            : "Connect"}
        </button>
      </div>
    </div>
  );
};

export default Index;
