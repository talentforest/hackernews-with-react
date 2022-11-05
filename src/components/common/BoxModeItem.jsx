import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getStory } from "util/hnApi";
import { urlName } from "util";
import { Tag } from "theme/commonStyle";
import styled from "styled-components";
import UserPointsTime from "components/common/UserPointsTime";
import OrangeTitle from "components/common/OrangeTitle";
import CommentNum from "components/common/CommentNum";

const BoxModeItem = ({ storyId }) => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId, setStory);
    return () => setStory([]);
  }, [storyId]);

  return (
    <Post>
      <a href={story.url} target="_blank" rel="noreferrer">
        {urlName(story) && <Tag orange>{urlName(story)}</Tag>}
        <OrangeTitle story={story} />
      </a>
      <div>
        <div>
          <UserPointsTime story={story} />
        </div>
        <Link to={`${story.id}`}>
          {story.descendants && <CommentNum story={story} />}
        </Link>
      </div>
    </Post>
  );
};
const Post = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  width: 48%;
  height: 230px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.container.default};
  margin-bottom: 16px;
  padding: 14px 12px 14px;
  color: ${(props) => props.theme.text.default};
  h4 {
    padding: 12px 0;
    font-size: 15px;
    font-weight: 600;
    line-height: 20px;
    height: 140px;
    color: ${(props) => props.theme.text.default};
  }
  > div:last-child {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 12px;
    color: ${(props) => props.theme.text.lightGray};
    img {
      width: 14px;
      height: 14px;
      margin-right: 2px;
    }
    > div:first-child {
      height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 90%;
      overflow: hidden;
      > div:last-child {
        span {
          font-size: 10px;
        }
        span:first-child {
          margin-right: 4px;
        }
      }
    }
  }
`;

export default BoxModeItem;
