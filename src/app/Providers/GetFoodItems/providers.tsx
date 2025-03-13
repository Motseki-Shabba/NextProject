"use client";
import React, { useReducer, useCallback, ReactNode } from "react";
import {
  FoodStateContext,
  FoodActionContext,
  INITIAL_STATE,
  IFood,
} from "./context";
import { FoodReducer } from "./reducer";
import {
  getFoodItemsPending,
  getFoodItemsSuccess,
  getFoodItemsError,
} from "./actions";
import { fetchFoodItems } from "./provider";

interface FoodProviderProps {
  children: ReactNode;
}

interface FetchResponse {
  status: number;
  data: IFood[];
  message: string;
}

const FoodProvider: React.FC<FoodProviderProps> = ({ children }) => {
  // Set up reducer
  const [state, dispatch] = useReducer(FoodReducer, INITIAL_STATE);

  // Define the action to get food items
  const getFoodItems = useCallback(async () => {
    try {
      // Dispatch pending action
      dispatch(getFoodItemsPending());

      // Fetch food items
      const response = await fetchFoodItems();
      const typedResponse = response as FetchResponse;

      // Check for successful response
      if (typedResponse.status === 200) {
        dispatch(
          getFoodItemsSuccess({
            foodItems: typedResponse.data,
            message: typedResponse.message,
          })
        );
      } else {
        const errorResponse = response as { message: string };
        dispatch(
          getFoodItemsError(
            errorResponse.message || "Failed to fetch food items"
          )
        );
      }
    } catch (error: unknown) {
      console.error("Error fetching food items:", error);
      dispatch(getFoodItemsError("Unknown error occurred"));
    }
  }, []);

  return (
    <FoodStateContext.Provider value={state}>
      <FoodActionContext.Provider value={{ getFoodItems }}>
        {children}
      </FoodActionContext.Provider>
    </FoodStateContext.Provider>
  );
};

export default FoodProvider;
