import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Gnb = () => {
  const pathname = useLocation().pathname;

  return (
    <GnbNav>
      <ul>
        <Link to="/">
          <li>Home</li>
          {pathname === "/" ? <CurrPageMark /> : <></>}
        </Link>
        <Link to="/top">
          <li>Top</li>
          {pathname === "/top" || pathname === "/top/users" ? <CurrPageMark /> : <></>}
        </Link>
        <Link to="/new">
          <li>New</li>
          {pathname === "/new" ? <CurrPageMark /> : <></>}
        </Link>
        <Link to="/show">
          <li>Show</li>
          {pathname === "/show" ? <CurrPageMark /> : <></>}
        </Link>
        <Link to="/ask">
          <li>Ask</li>
          {pathname === "/ask" ? <CurrPageMark /> : <></>}
        </Link>
        <Link to="/job">
          <li>Job</li>
          {pathname === "/job" ? <CurrPageMark /> : <></>}
        </Link>
      </ul>
    </GnbNav>
  );
}

const GnbNav = styled.nav`
  padding: 0 20px;
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  ul {
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 15px;
    font-weight: 700;
    box-sizing: border-box;
    padding-top: 1.8px;
    position: relative;
    li {
      width: 44px;
      display: flex;
      justify-content: center;
      color: ${(props) => props.theme.headerColor};
      &:hover {
        color: ${(props) => props.theme.headerHoverColor};
        cursor: pointer;
      }
    }
  }
`;
const CurrPageMark = styled.div`
  position: absolute;
  top: 26px;
  background-color: #f9742e;
  width: 42px;
  height: 3px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`;

export default Gnb;
