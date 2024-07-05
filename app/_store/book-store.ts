import { create } from "zustand";
type Todo = { id: number; author: string | undefined; book: string };

type Store = {
  numberOfBooks: number;
  todo: Todo[];
  addBook: () => void;
  sellBook: () => void;
  addData: (author: string, book: string) => void;
  toDelete: (id: number) => void;
};

const bookStore = create<Store>()((set) => ({
  numberOfBooks: 0,
  todo: [],
  addBook: () =>
    set((state) => ({
      numberOfBooks: state.numberOfBooks + 1,
    })),
  sellBook: () =>
    set((state) => ({
      numberOfBooks: state.numberOfBooks - 1,
    })),
  addData: (author, book) =>
    set((state) => ({
      todo: [...state.todo, { id: state.todo.length + 1, author, book }],
    })),
  toDelete: (id) =>
    set((state) => ({
      todo: state.todo.filter((todo) => todo.id !== id),
    })),
}));

export default bookStore;
