import styled from "styled-components";

const SortViewModeBtn = () => {
  return (
    <SortView>
      <View>
        <img
          src={"assets/bullet_list.png"}
          alt="bullet list"
        />
        <img
          src={"assets/mode_list.png"}
          alt="mode list"
        />
      </View>
    </SortView>
  );
};

const SortView = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.backgroundGrayColor};
`;
const View = styled.div`
  padding-right: 20px;
  img {
    width: 24px;
    margin-left: 9px;
    cursor: pointer;
  }
`;

export default SortViewModeBtn;