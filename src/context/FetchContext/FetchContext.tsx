import { createContext, } from "react";
import { Image } from "../../components/individual-image/IndividualImage";

export interface FetchContextProps {
  images: Image[];
  isLoading: boolean;
  error: string;
  setUrl: (value:string) => void;
  inputValue: string;
  setInputValue: (value:string) => void;
  history: string[];
  setHistory: React.Dispatch<React.SetStateAction<string[]>>;
}

export const FetchContext = createContext<FetchContextProps>({} as FetchContextProps);
