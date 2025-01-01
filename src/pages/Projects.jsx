import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import { fetchData } from "../store/actions";
import { useEffect } from "react";
import { languageData } from "../data/language";

function Projects() {
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const { language } = useSelector((state) => state.language);

  const texts = languageData[language];

  const localizedData = data.map((item) => ({
    ...item,
    name: item.name[language],
    description: item.description[language],
  }));

  return (
    <div className="w-[1064px] flex flex-col gap-10">
      <h1 className="font-[500] text-[36px] leading-[43.57px] flex  justify-center">
        {texts.projects}
      </h1>
      <div className="flex gap-10">
        {localizedData.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
