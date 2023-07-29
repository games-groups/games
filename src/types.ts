// #### Common Interface

import ethers, { Contract, ContractFunction } from "ethers";

/**
 * Nft Info Properties
 */
export interface NftAllInfo {
  TokenID: string;
  Group: string;
  Born: string;
  Rarity: string;
  Gender: string;
  Name: string;
  Sex: string;
  Learn: string;
  Level: string;
  Knowledge: string;
  Discern: string;
  Social: string;
  RecoveryValue: string;
  Quality: string;
  RecycleRate?: string;
  Score?: string;
  Img?: any;
}

export type LoadingState = "idle" | "loading" | "success" | "fail" | "exceed";
export type Action =
  | { type: "requires_approval" }
  | { type: "breed_limit_exceed" }
  | { type: "approve_sending" }
  | { type: "approve_receipt" }
  | { type: "approve_error" }
  | { type: "confirm_sending" }
  | { type: "confirm_receipt" }
  | { type: "confirm_error" }
  | { type: "need_approve"; payload?: Array<boolean> };

export type ClaimAndQuitAction =
  | { type: "claim_sending" }
  | { type: "claim_receipt" }
  | { type: "claim_error" }
  | { type: "quit_sending" }
  | { type: "quit_receipt" }
  | { type: "quit_error" };

export interface State {
  approvalState: LoadingState;
  confirmState: LoadingState;
  needtoApprove?: any;
  isApproved?: Array<boolean>;
}

export interface ClaimAndQuitState {
  claimState: LoadingState;
  quitState: LoadingState;
}

export interface OnSuccessProps {
  state: State;
  receipt: ethers.providers.TransactionReceipt;
}

export interface OnSuccessBreedProps {
  state: State;
  receipt: BreedReceipt;
}

export interface OnClaimAndQuitSuccessProps {
  state: ClaimAndQuitState;
  receipt: ethers.providers.TransactionReceipt;
}

interface AnyProps {
  [props: string]: any;
}

interface BreedReceipt {
  transactionHash: string;
  blockHash: string;
  blockNumber: string;
  from: string;
  to: string;
  nftId: string;
}

interface BreedResponse {
  data: {
    code: number;
    massage: string;
    receiptData: BreedReceipt;
  };
}

export interface Approve {
  onApprove: (
    nftContract?: any
  ) => Promise<ethers.providers.TransactionResponse>;
  onConfirm: (params?: any) => Promise<ethers.providers.TransactionResponse>;
  onRequiresApproval?: (baby?: any, nftContract?: any) => Promise<boolean>;
  onSuccess: ({ state, receipt }: OnSuccessProps) => void;
  onApproveSuccess?: ({ state, receipt }: OnSuccessProps) => void;
  initBaby?: AnyProps | null;
}

export interface ApproveLevelUp {
  onApprove: (
    nftContract?: any,
    approveType?: any
  ) => Promise<ethers.providers.TransactionResponse>;
  onConfirm: (params?: any) => Promise<ethers.providers.TransactionResponse>;
  onRequiresApproval?: (
    baby?: any,
    nftContract?: any
  ) => Promise<Array<boolean>>;
  onSuccess: ({ state, receipt }: OnSuccessProps) => void;
  onApproveSuccess?: ({ state, receipt }: OnSuccessProps) => void;
  initBaby?: AnyProps | null;
  gameLevelupContract?: AnyProps | null;
}

export interface ApprovePlaceOrder {
  onApprove: (
    nftContract?: any
  ) => Promise<ethers.providers.TransactionResponse>;
  onConfirm: (
    params: any,
    amount: any,
    unit: any
  ) => Promise<ethers.providers.TransactionResponse>;
  onRequiresApproval?: (baby?: any, nftContract?: any) => Promise<boolean>;
  onSuccess: ({ state, receipt }: OnSuccessProps) => void;
  onApproveSuccess?: ({ state, receipt }: OnSuccessProps) => void;
  initBaby?: AnyProps | null;
  placeOrderContract?: AnyProps | null;
}

export interface ApproveBuyBaby {
  onApprove: (
    nftContract?: any
  ) => Promise<ethers.providers.TransactionResponse>;
  onConfirm: (params: any) => Promise<ethers.providers.TransactionResponse>;
  onRequiresApproval?: (baby?: any, nftContract?: any) => Promise<boolean>;
  onSuccess: ({ state, receipt }: OnSuccessProps) => void;
  onApproveSuccess?: ({ state, receipt }: OnSuccessProps) => void;
  babyInfo?: AnyProps | null;
  marketContract?: AnyProps | null;
}

export interface BabyApprove {
  onApprove: (
    nftContract?: any
  ) => Promise<ethers.providers.TransactionResponse>;
  onBreedLimit: (baby?: any, nftContract?: any) => Promise<boolean>;
  onConfirm: (params?: any) => Promise<BreedResponse>;
  onRequiresApproval?: (baby?: any, nftContract?: any) => Promise<boolean>;
  onSuccess: ({ state, receipt }: OnSuccessBreedProps) => void;
  onApproveSuccess?: ({ state, receipt }: OnSuccessProps) => void;
  initBaby?: AnyProps | null;
}

export interface ApproveNFT {
  onApprove: () => Promise<ethers.providers.TransactionResponse>;
  onConfirm: (params?: any) => Promise<ethers.providers.TransactionResponse>;
  onRequiresApproval?: () => Promise<boolean>;
  onSuccess: ({ state, receipt }: OnSuccessProps) => void;
  onApproveSuccess?: ({ state, receipt }: OnSuccessProps) => void;
  initBaby?: AnyProps | null;
  initWorkPalce?: AnyProps | null;
}

export type MultiCallResponse<T> = T | null;

// Predictions
export type PredictionsClaimableResponse = boolean;

export interface PredictionsLedgerResponse {
  position: 0 | 1;
  amount: ethers.BigNumber;
  claimed: boolean;
}

export type PredictionsRefundableResponse = boolean;

export interface PredictionsRoundsResponse {
  epoch: ethers.BigNumber;
  startTimestamp: ethers.BigNumber;
  lockTimestamp: ethers.BigNumber;
  closeTimestamp: ethers.BigNumber;
  lockPrice: ethers.BigNumber;
  closePrice: ethers.BigNumber;
  lockOracleId: ethers.BigNumber;
  closeOracleId: ethers.BigNumber;
  totalAmount: ethers.BigNumber;
  bullAmount: ethers.BigNumber;
  bearAmount: ethers.BigNumber;
  rewardBaseCalAmount: ethers.BigNumber;
  rewardAmount: ethers.BigNumber;
  oracleCalled: boolean;
}

// [rounds, ledgers, count]
export type PredictionsGetUserRoundsResponse = [
  ethers.BigNumber[],
  PredictionsLedgerResponse[],
  ethers.BigNumber
];

export type PredictionsGetUserRoundsLengthResponse = ethers.BigNumber;

export interface PredictionsContract extends Contract {
  claimable: ContractFunction<PredictionsClaimableResponse>;
  getUserRounds: ContractFunction<PredictionsGetUserRoundsResponse>;
  getUserRoundsLength: ContractFunction<PredictionsGetUserRoundsLengthResponse>;
  ledger: ContractFunction<PredictionsLedgerResponse>;
  refundable: ContractFunction<PredictionsRefundableResponse>;
  rounds: ContractFunction<PredictionsRoundsResponse>;
}

// Chainlink Oracle
export type ChainLinkOracleLatestAnswerResponse = ethers.BigNumber;

export interface ChainLinkOracleContract extends Contract {
  latestAnswer: ContractFunction<ChainLinkOracleLatestAnswerResponse>;
}

// Farm Auction

// Note: slightly different from AuctionStatus used throughout UI
export enum FarmAuctionContractStatus {
  Pending,
  Open,
  Close,
}

export interface AuctionsResponse {
  status: FarmAuctionContractStatus;
  startBlock: ethers.BigNumber;
  endBlock: ethers.BigNumber;
  initialBidAmount: ethers.BigNumber;
  leaderboard: ethers.BigNumber;
  leaderboardThreshold: ethers.BigNumber;
}

export interface BidsPerAuction {
  account: string;
  amount: ethers.BigNumber;
}

export type ViewBidsPerAuctionResponse = [BidsPerAuction[], ethers.BigNumber];

// [auctionId, bids, claimed, nextCursor]
export type ViewBidderAuctionsResponse = [
  ethers.BigNumber[],
  ethers.BigNumber[],
  boolean[],
  ethers.BigNumber
];

type GetWhitelistedAddressesResponse = [
  {
    account: string;
    lpToken: string;
    token: string;
  }[],
  ethers.BigNumber
];

interface AuctionsHistoryResponse {
  totalAmount: ethers.BigNumber;
  hasClaimed: boolean;
}

export interface FarmAuctionContract extends Contract {
  currentAuctionId: ContractFunction<ethers.BigNumber>;
  viewBidders: ContractFunction<[string[], ethers.BigNumber]>;
  totalCollected: ContractFunction<ethers.BigNumber>;
  auctions: ContractFunction<AuctionsResponse>;
  claimable: ContractFunction<boolean>;
  viewBidsPerAuction: ContractFunction<ViewBidsPerAuctionResponse>;
  viewBidderAuctions: ContractFunction<ViewBidderAuctionsResponse>;
  whitelisted: ContractFunction<boolean>;
  getWhitelistedAddresses: ContractFunction<GetWhitelistedAddressesResponse>;
  auctionsHistory: ContractFunction<AuctionsHistoryResponse>;
}

// Profile contract
// [userId, points, teamId, tokenId, collectionAddress isActive]
export type GetUserProfileResponse = [
  ethers.BigNumber,
  ethers.BigNumber,
  ethers.BigNumber,
  string,
  ethers.BigNumber,
  boolean
];

export interface PancakeProfileContract extends Contract {
  getUserProfile: ContractFunction<GetUserProfileResponse>;
  hasRegistered: ContractFunction<boolean>;
}

export interface ActionCall {
  onConfirm: (params?: any) => Promise<ethers.providers.TransactionResponse>;
  onSuccess: ({ state, receipt }: OnSuccessProps) => void;
}

export interface ClaimAndQuit {
  onQuit: () => Promise<ethers.providers.TransactionResponse>;
  onQuitSuccess?: ({ state, receipt }: OnClaimAndQuitSuccessProps) => void;
  onClaim: (params?: any) => Promise<ethers.providers.TransactionResponse>;
  onClaimSuccess?: ({ state, receipt }: OnClaimAndQuitSuccessProps) => void;
}
