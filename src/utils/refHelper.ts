import BigNumber from "bignumber.js";
import { isUndefined } from "lodash";

const ADDRESS_BASE = 16;
const SECRET_BASE = 36;

export const parseAddressFromSecret = (secret: string) => {
  let number16 = new BigNumber(secret, SECRET_BASE).toString(ADDRESS_BASE);
  if (number16.length < 40) {
    const reg = new RegExp(`.{${number16.length}}$`);
    number16 = "0000000000000000000000000000000000000000".replace(
      reg,
      number16
    );
  }
  return `0x${number16}`;
};
export const getRefCode = (account: string) => {
  const number36 = new BigNumber(
    account.replace(/^0x/, "").toLowerCase(),
    ADDRESS_BASE
  ).toString(SECRET_BASE);
  return number36;
};

export const addressValidate = (address: string) => {
  if (isUndefined(address)) {
    return false;
  }

  const reg = /^0x[a-fA-F0-9]{40}$/;
  if (!reg.test(address)) {
    return false;
  }

  return true;
};
