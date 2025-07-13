import { create } from "zustand";

type SPSGameState = {
  localRoundWin: number;
  onlineRoundWin: number;
  updatelocalround: () => void;
  updateonlineRoundWin: () => void;
  chooseOptionbyOnline: string;
  chooseOptionbylocal: string;
  setChooseOptionbyOnline: (option: string) => void;
  setChooseOptionbylocal: (option: string) => void;
  winner: string;
  setWinner: (winner: string) => void;
  completedRound: number;
  incrementCompletedRound: () => void;
};

const useSPSGameStore = create<SPSGameState>((set) => ({
  localRoundWin: 0,
  onlineRoundWin: 0,
  updatelocalround: () =>
    set((state) => ({ localRoundWin: state.localRoundWin + 1 })),
  updateonlineRoundWin: () =>
    set((state) => ({ onlineRoundWin: state.onlineRoundWin + 1 })),

  chooseOptionbyOnline: "",
  chooseOptionbylocal: "",
  setChooseOptionbyOnline: (option) =>
    set({ chooseOptionbyOnline: option }),
  setChooseOptionbylocal: (option) =>
    set({ chooseOptionbylocal: option }),

  winner: "",
  setWinner: (winner) => set({ winner }),

  completedRound: 0,
  incrementCompletedRound: () =>
    set((state) => ({ completedRound: state.completedRound + 1 })),
}));

export default useSPSGameStore;
