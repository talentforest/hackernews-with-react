import { memo, useState, useEffect } from "react";
import { mapTime } from "../util/mapTime";
import styled from "styled-components";
import axios from "axios";
import { userSelectFields } from "../util/selectFields";

const UserInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Infobox = styled.div`
  height: 40px;
`;
const Info = styled.div`
  display: flex;
  font-size: 12px;
  color: #727272;
  div:first-child {
    border: 1px solid rgb(238, 112, 44, 0.75);
    color: #ed702d;
    font-weight: 10px;
    letter-spacing: 0.1%;
    width: 43px;
    height: 14px;
    border-radius: 20px;
    padding: 1px 2px;
    margin: 1px 4px 6px 0;
  }
  span {
    padding-top: 3px;
  }
`;
const Btn = styled.img`
  width: 24px;
  height: 24px;
`;

export const TUserInfo = memo(function Story({ story }) {
  const [topUserData, setTopUserData] = useState([]);

  const getUserInfo = async () => {
    const result = await axios
      .get(`https://hacker-news.firebaseio.com/v0/user/${story.by}.json`)
      .then(({ data }) => data && userSelectFields(data));
    return result;
  };

  useEffect(() => {
    getUserInfo().then((data) => data && data.id && setTopUserData(data));
  }, []);

  return (
    <UserInfoBox>
      <Infobox>
        <Info>
          <div>Joined</div>
          <span>{mapTime(topUserData.created)} ago</span>
        </Info>
        <Info>
          <div>karma</div>
          <span>{topUserData.karma}</span>
        </Info>
      </Infobox>
      <Btn
        src="https://talentforest.github.io/Hacker-News-Mini-Project/assets/arrow_blue.png"
        alt="arrow button"
      />
    </UserInfoBox>
  );
});
