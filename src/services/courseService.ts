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
};

export default courseService;
