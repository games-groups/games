import { contractAddress } from "@/contracts/collections/helper";
import {
  addressValidate,
  getRefCode,
  parseAddressFromSecret,
} from "@/utils/refHelper";
import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import qs from "qs";
import { useCallback, useEffect, useMemo, useState } from "react";
import cookie from "react-cookies";
import { useLocation } from "umi";

export const useInviteAid = (refKey: string) => {
  const [inviteLink, setInviteLink] = useState<string>("");
  const [referrer, setReferrer] = useState<string>("");

  const { account } = useWeb3React<Web3Provider>();
  const { query } = useLocation() as any;
  const cookieKey = useMemo(() => {
    if (!account) return "";
    return `${account}_${refKey}`;
  }, [account, refKey]);

  const setRefLinkToCache = useCallback(() => {
    if (!cookieKey) return;
    const inviteRefCookie = cookie.load(cookieKey);
    const inviteRef = inviteRefCookie
      ? parseAddressFromSecret(inviteRefCookie)
      : null;
    const { ref = "" } = qs.parse(query);

    const refAddress = parseAddressFromSecret(ref as string);
    if (!inviteRef) {
      if (
        addressValidate(refAddress) &&
        account?.toLowerCase() !== refAddress?.toLowerCase()
      ) {
        cookie.save(cookieKey, refAddress, {});
      }
    } else if (
      addressValidate(refAddress) &&
      inviteRef?.toLowerCase() !== refAddress?.toLowerCase()
    ) {
      cookie.save(cookieKey, refAddress, {});
    }
  }, [account, cookieKey, query]);

  useEffect(() => {
    setInviteLink(
      account
        ? `${location.origin}${location.pathname}?ref=${getRefCode(account)}`
        : ""
    );
    setRefLinkToCache();
  }, [account, query, setRefLinkToCache]);

  useEffect(() => {
    if (!cookieKey) return;
    let refAddress = contractAddress.Treasury;
    const inviteRefCookie = cookie.load(cookieKey);
    if (inviteRefCookie && addressValidate(inviteRefCookie)) {
      refAddress = inviteRefCookie;
    }
    setReferrer(refAddress);
  }, [cookieKey]);

  return { inviteLink, referrer };
};
