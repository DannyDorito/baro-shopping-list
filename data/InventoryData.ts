import { BaseItem } from "@/types/BaseItem";
import { useEffect, useState } from "react";

const getInventoryData = async (
  setInventoryData: React.Dispatch<React.SetStateAction<BaseItem[]>>,
  setError: React.Dispatch<React.SetStateAction<string | undefined>>
) => {
  try {
    const response = await fetch(
      "https://baroshoppinglistapi.azurewebsites.net/inventorydata"
    );
    if (!response.ok) {
      setError(
        `Failed to fetch inventory data: ${response.status} ${response.statusText}`
      );
      setInventoryData([]);
      return;
    }
    const contentType = response.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      setError("Invalid response format from server.");
      setInventoryData([]);
      return;
    }
    try {
      const data = await response.json();
      setInventoryData(data);
    } catch (jsonError) {
      console.error("Error parsing JSON response:", jsonError);
      setError("Could not parse inventory data. Please try again later.");
      setInventoryData([]);
    }
  } catch (error) {
    console.error("Error fetching Baro data:", error);
    setInventoryData([]);
    setError("Could not load inventory data. Please try again later.");
  }
};

export const useInventoryData = () => {
  const [inventoryData, setInventoryData] = useState<BaseItem[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    getInventoryData(setInventoryData, setError);
  }, []);

  return { inventoryData, error };
};
