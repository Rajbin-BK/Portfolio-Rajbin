//this is to defined the content either which part of the website
import { create } from "zustand";

export const useContentStore = create((set) => ({
	contentType: "",
	setContentType: (type) => set({ contentType: type }),
}));