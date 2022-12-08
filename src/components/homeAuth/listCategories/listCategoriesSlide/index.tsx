import styles from "../../../../../styles/slideCategory.module.scss";
import useSWR from "swr";
import categoriesService from "../../../../services/categoriesService";
import SlideComponent from "../../../common/slideComponent";

interface props {
  categoryId: number;
  categoryName: string;
}
export default function ListCategoriesSlide({
  categoryId,
  categoryName,
}: props) {
  const { data, error } = useSWR(`/categories/${categoryId}`, () =>
    categoriesService.getCourses(categoryId)
  );
  if (error) return error;
  if (!data)
    return (
      <>
        <p>Loading</p>;
      </>
    );
  return (
    <>
      <p className={styles.titleCategory}>{categoryName}</p>
      <SlideComponent course={data.data.courses} />
    </>
  );
}
