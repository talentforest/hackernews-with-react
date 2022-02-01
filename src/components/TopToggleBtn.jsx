import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #efefef;
  width: 390px;
  height: 81px;
  padding: 24px 0 17px;
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  margin: auto;
  height: 40px;
  background-color: #fff;
  border-radius: 30px;
`;
const PostBtn = styled.button`
  border-radius: 20px;
  width: 171px;
  height: 32px;
  background-color: #ed702d;
  border: none;
  font-size: 12px;
  color: #fff;
`;
const UsersBtn = styled.button`
  border-radius: 20px;
  width: 171px;
  height: 32px;
  background-color: transparent;
  border: none;
  font-size: 12px;
  color: #b7b7b7;
`;

export default function TopToggleBtn() {
  return (
    <Wrapper>
      <Btn>
        <PostBtn>Post</PostBtn>
        <UsersBtn>Users</UsersBtn>
      </Btn>
    </Wrapper>
  );
}