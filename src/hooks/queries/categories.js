import { useQuery } from "@tanstack/react-query";
import { categoryService } from "../../api/services/categoryService";

export const useCategories = () => {
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: categoryService.getAllCategories,
  });


  return { allCategories: data?.envelop?.data };
};
