import { ItemCard } from "@/Objects/itemCard";
import { Dispatch, SetStateAction, createContext, useContext } from "react";

interface HeaderData {
    totalItems: number;
    setTotalItems: Dispatch<SetStateAction<number>>;
    itemCard: ItemCard[];
    setItemCard: Dispatch<SetStateAction<ItemCard[]>>;
}

export const ContextHeader = createContext<HeaderData>({} as HeaderData);

export const useContextHeaderData = () => useContext(ContextHeader);