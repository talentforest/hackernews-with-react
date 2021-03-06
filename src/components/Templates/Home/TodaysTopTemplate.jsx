import { useEffect, useState } from "react";
import { getTopStoryIds } from "util/hnApi";
import TodaysTop from "../../Home/TodaysTop";
import TitleClock from "../../Home/common/TitleClock";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const TodaysTopTemplate = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getTopStoryIds(setStoryIds);
    return () => setStoryIds([]);
  }, []);

  return (
    <Container>
      <TitleClock
        title="Today's Top"
      />
      <Swiper pagination={true} modules={[Pagination]}>
        <SwiperSlide>
          <ul>
            {storyIds?.slice(0, 5).map((storyId, index) => (
              <TodaysTop key={storyId} storyId={storyId} index={index} />
            ))}
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <ul>
            {storyIds?.slice(5, 10).map((storyId, index) => (
              <TodaysTop key={storyId} storyId={storyId} index={index + 5} />
            ))}
          </ul>
        </SwiperSlide>
        <SwiperSlide>
          <ul>
            {storyIds?.slice(10, 15).map((storyId, index) => (
              <TodaysTop key={storyId} storyId={storyId} index={index + 10} />
            ))}
          </ul>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  height: 650px;
  margin-bottom: 12px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.05);
  ul {
    background-color: ${(props) => props.theme.containerColor};
    height: 490px;
    margin: 20px 20px 32px 20px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
  }
`;

export default TodaysTopTemplate;
