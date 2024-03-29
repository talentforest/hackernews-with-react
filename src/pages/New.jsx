import { useViewModeChange } from "hooks/index";
import { getNewStoryIds } from "util/hnApi";
import { useEffect, useState } from "react";
import ViewModeBtn from "components/atom/ViewModeBtn";
import SwiperPagination from "components/template/SwiperPagination";
import BannerBox from "components/atom/Banner";

const New = () => {
  const [viewMode, handleViewMode] = useViewModeChange();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getNewStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <>
      <BannerBox imgPath={require("assets/new_banner.png")} page="New banner" />
      <ViewModeBtn viewMode={viewMode} handleViewMode={handleViewMode} />
      <SwiperPagination storyIds={storyIds} viewMode={viewMode} />
    </>
  );
};

export default New;
