import api from "./api";
import { CourseType } from "./courseService";

export interface CategoryType {
  id: number;
  name: string;
  position: number;
  courses?: CourseType[];
}

const categoriesService = {
  getCategories: async () => {
    const token = sessionStorage.getItem("onebitflix-token");
    const res = await api
      .get("/categories", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        return err.response;
      });
    return res;
  },

  getCourses: async (id: number) => {
    const token = sessionStorage.getItem("onebitflix-token");
    const res = await api
      .get(`/categories/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        return err.response;
      });
    return res;
  },
};

export default categoriesService;
