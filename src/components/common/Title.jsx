import styled from "styled-components";
import { imgBaseUrl } from 'util/Constant';

const Title = ({ title }) => {
  return (
    <Content>
      <div>
        <h4>{title}</h4>
        <img
          src={`${imgBaseUrl}arrow_right_black.png`}
          alt="arrow"
        />
      </div>
    </Content>
  );
};

export const Content = styled.div`
  height: 68px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 40px 20px 0px;
  background-color: ${(props) => props.theme.backgroundColor};
  div {
    color: ${(props) => props.theme.textColor};
  font-weight: 700;
  font-size: 24px;
  display: flex;
  align-items: center;
      img {
    color: ${(props) => props.theme.svelteOrangeColor};
    width: 7.5px;
    height: 12px;
    margin-left: 8.59px;
    }
  }
`;

export default Title;

