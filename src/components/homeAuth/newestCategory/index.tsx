import useSWR from "swr";
import courseService from "../../../services/courseService";
import SlideComponent from "../../common/slideComponent";
import styles from "../../../../styles/slideCategory.module.scss";

export default function NewestCategory() {
  const { data, error } = useSWR("/newest", courseService.getNewestCourses);
  if (error) return error;
  if (!data)
    return (
      <>
        <p>loading...</p>
      </>
    );

  return (
    <>
      <p className={styles.titleCategory}>LANÇAMENTOS</p>
      <SlideComponent course={data.data} />
    </>
  );
}
