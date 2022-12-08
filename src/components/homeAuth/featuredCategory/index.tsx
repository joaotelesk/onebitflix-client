import styles from "../../../../styles/slideCategory.module.scss";
import useSWR from "swr";
import courseService from "../../../services/courseService";
import SlideComponent from "../../common/slideComponent";

export default function FeaturedCategory() {
  const { data, error } = useSWR("/featured", courseService.getFeaturedCourses);
  if (error) return error;
  if (!data)
    return (
      <>
        <p>loading...</p>
      </>
    );
  return (
    <>
      <p className={styles.titleCategory}>EM DESTAQUE</p>
      <SlideComponent course={data.data} />
    </>
  );
}
