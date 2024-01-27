import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  showPopup: boolean;
  boughtNFT: { id: number; imgsrc: string } | null;
  boughtNFTs: { id: number; imgsrc: string }[];
  walletAmount: number;
}

const initialState: AppState = {
  showPopup: false,
  boughtNFT: null,
  boughtNFTs: [],
  walletAmount: 2.5, 
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSelectedNFT: (
      state,
      action: PayloadAction<{ id: number; imgsrc: string }>
    ) => {
      state.boughtNFT = action.payload;
    },
    setShowPopup: (state, action: PayloadAction<boolean>) => {
      state.showPopup = action.payload;
    },
    addBoughtNFT: (state) => {
      if (state.boughtNFT) {
        state.boughtNFTs.push(state.boughtNFT);
        state.boughtNFT = null;
      }
    },
    resetBoughtNFT: (state) => {
      state.boughtNFT = null;
    },
    decreaseWalletAmount: (state, action: PayloadAction<number>) => {      
      state.walletAmount -= action.payload;
    },
  },
});

export const {
  setSelectedNFT,
  setShowPopup,
  addBoughtNFT,
  resetBoughtNFT,
  decreaseWalletAmount,
} = appSlice.actions;

export default appSlice.reducer;
