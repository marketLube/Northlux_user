import { useQuery } from "@tanstack/react-query";
import { brandService } from "../../api/services/brandService";

export const useBrands = () => {
  return useQuery({
    queryKey: ["brands"],
    queryFn: brandService.getAllBrands,
  });
};
