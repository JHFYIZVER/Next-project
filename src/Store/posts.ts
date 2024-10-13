import { create } from "zustand";

type T = {
  id: number;
  title: string;
  source: string;
};
type Post = {
  posts: Array<T>;
  setPosts: (posts: Array<T>) => void;
};

export const useStore = create<Post>()((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}));
