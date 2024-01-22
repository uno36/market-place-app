import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  showPopup: boolean;
  boughtNFT: { id: number; imgsrc: string } | null;
  boughtNFTs: { id: number; imgsrc: string }[];
}

const initialState: AppState = {
  showPopup: false,
  boughtNFT: null,
  boughtNFTs: [],
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
      }
    },
    
    resetBoughtNFT: (state) => {
      state.boughtNFT = null;
    },
  },
});

export const { setSelectedNFT, setShowPopup, addBoughtNFT, resetBoughtNFT } =
  appSlice.actions;

export default appSlice.reducer;
