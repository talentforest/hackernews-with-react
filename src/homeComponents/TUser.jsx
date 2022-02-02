import React from "react";
import styled from "styled-components";

const UserWrapper = styled.div`
  width: 228px;
  height: 146px;
  padding: 16px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  background-color: #fff;
`;
const Rank = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  position: relative;
  img {
    width: 24px;
    margin-right: 4px;
  }
  div {
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    position: absolute;
    top: 6px;
    left: 8px;
  }
  span {
    font-size: 12px;
    font-weight: 500;
    color: #ed702d;
    padding-top: 3px;
  }
`;
const Username = styled.div`
  display: block;
  height: 40px;
  font-size: 20px;
  font-weight: 600;
  line-height: 23.44px;
  color: #202020;
  margin-bottom: 8px;
`;
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
  align-items: center;
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
`;
const Btn = styled.img`
  width: 24px;
  height: 24px;
`;

export const TUser = () => {
  return (
    <UserWrapper>
      <Rank>
        <img src="img/star.png" alt="star" />
        <div>1</div>
        <span>Today's User</span>
      </Rank>
      <Username>asdfasdgew</Username>
      <UserInfoBox>
        <Infobox>
          <Info>
            <div>Joined</div>
            <span>5 years ago</span>
          </Info>
          <Info>
            <div>karma</div>
            <span>84719</span>
          </Info>
        </Infobox>
        <Btn src="img/arrow_blue.png" alt="arrow button" />
      </UserInfoBox>
    </UserWrapper>
  );
};
