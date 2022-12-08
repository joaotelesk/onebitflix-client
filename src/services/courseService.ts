import api from "./api";

export interface EpisodeType {
  id: number;
  name: string;
  synopsis: string;
  order: number;
  videoUrl: string;
  secondsLong: number;
}
export interface CourseType {
  id: number;
  name: string;
  thumbnailUrl: string;
  synopsis: string;
  episodes?: EpisodeType[];
}

const courseService = {
  getNewestCourses: async () => {
    const res = await api.get("/courses/newest").catch((err) => {
      return err.response;
    });

    return res;
  },
  getFeaturedCourses: async () => {
    const token = sessionStorage.getItem("onebitflix-token");
    const res = await api
      .get("/courses/featured", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        return err.response;
      });
    return res;
  },
  addToFav: async (courseId: number | string) => {
    const token = sessionStorage.getItem("onebitflix-token");
    const res = await api
      .post(
        "/favorites",
        { courseId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((err) => {
        return err.response;
      });
    return res;
  },
  removeToFav: async (courseId: number | string) => {
    const token = sessionStorage.getItem("onebitflix-token");
    const res = await api
      .delete("/favorites", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { courseId },
      })
      .catch((err) => {
        return err.response;
      });
    return res;
  },
  getFavCourses: async () => {
    const token = sessionStorage.getItem("onebitflix-token");

    const res = await api
      .get("/favorites", {
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

export default courseService;
