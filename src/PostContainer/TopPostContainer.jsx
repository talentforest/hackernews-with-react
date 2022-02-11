import styled from "styled-components";
import { SortListBtn } from "../CommonComponents/SortBtn";
import { useEffect, useState } from "react";
import { getTopStoryIds } from "../util/hnApi";
import { TopPostBox } from "../PostComponents/TopPostBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/swiper.css";
// import "swiper/modules/navigation/navigation.css";
// import "swiper/modules/pagination/pagination.css";
import { Pagination, Navigation } from "swiper";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundGrayColor};
  width: 390px;
`;
const Posts = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 150px;
`;

export const TopPostContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getTopStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <Wrapper>
      <SortListBtn />
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation={true}
        pagination={{ type: "fraction" }}
      >
        <SwiperSlide>
          <Posts>
            {storyIds.slice(0, 20).map((storyId) => (
              <TopPostBox key={storyId} storyId={storyId} />
            ))}
          </Posts>
        </SwiperSlide>
        <SwiperSlide>
          <Posts>
            {storyIds.slice(20, 40).map((storyId) => (
              <TopPostBox key={storyId} storyId={storyId} />
            ))}
          </Posts>
        </SwiperSlide>
        <SwiperSlide>
          <Posts>
            {storyIds.slice(40, 60).map((storyId) => (
              <TopPostBox key={storyId} storyId={storyId} />
            ))}
          </Posts>
        </SwiperSlide>
        <SwiperSlide>
          <Posts>
            {storyIds.slice(60, 80).map((storyId) => (
              <TopPostBox key={storyId} storyId={storyId} />
            ))}
          </Posts>
        </SwiperSlide>
        <SwiperSlide>
          <Posts>
            {storyIds.slice(80, 100).map((storyId) => (
              <TopPostBox key={storyId} storyId={storyId} />
            ))}
          </Posts>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};