import Header from "../components/Header";
import Gnb from "../components/Gnb";
import Banner from "../components/Banner";
import { TTopContainer } from "../homeContainer/TTopContainer";
import { TNewContainer } from "../homeContainer/TNewContainer";
import { TUserContainer } from "../homeContainer/TUserContainer";
import { TShowContainer } from "../homeContainer/TShowContainer";
import { TAskContainer } from "../homeContainer/TAskContainer";
import { TJobContainer } from "../homeContainer/TJobContainer";

export default function Home({ toggleDark }) {
  return (
    <>
      <Header toggleDark={toggleDark} />
      <Gnb />
      <Banner src="/assets/home_banner.png" />
      <TTopContainer />
      <TNewContainer />
      <TUserContainer />
      <TShowContainer />
      <TAskContainer />
      <TJobContainer />
    </>
  );
}
