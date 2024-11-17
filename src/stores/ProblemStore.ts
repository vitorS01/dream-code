import { defineStore } from "pinia";
import { ProblemTemplate } from "../types";

export const useProblemStore = defineStore("problemStore", {
  state: () => ({
    result: null as ProblemTemplate | null,
  }),
  actions: {
    setResult(newResult: ProblemTemplate) {
      this.result = newResult;
    },
  },
});
