import { useState, useEffect } from "react";
import { maxChar } from "util";
import { getData } from "util/hnApi";
import SkeletonItem, { Skeleton } from "components/atom/skeleton/SkeletonItem";
import styled from "styled-components";
import UserPointsTime from "components/molecules/UserPointsTime";

const TodaysTopPost = ({ storyId, index }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getData(storyId, setStory);
    return () => {
      setStory();
    };
  }, [storyId]);

  return (
    <Box>
      <span>{index + 1}</span>
      {Object.keys(story ?? {}).length ? (
        <div>
          <a href={story?.url} target="_blank" rel="noreferrer">
            <h4>{maxChar(story?.title, 55)}</h4>
          </a>
          <UserPointsTime story={story} noIcon />
        </div>
      ) : (
        <div>
          <Skeleton as="h4" />
          <SkeletonItem width="70%" />
        </div>
      )}
    </Box>
  );
};

export const Box = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 98px;
  padding: 16px 14px 14px;
  > span {
    width: 15%;
    height: 68px;
    font-size: 24px;
    font-weight: 600;
    color: ${(props) => props.theme.text.orange};
  }
  > div {
    width: 100%;
    height: 100%;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    h4 {
      min-height: 60%;
      font-weight: 600;
      line-height: 20px;
      color: ${(props) => props.theme.text.default};
    }
  }
`;

export default TodaysTopPost;
