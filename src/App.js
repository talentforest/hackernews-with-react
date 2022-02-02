import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./routes/Home";
import Top from "./routes/Top";
import New from "./routes/New";
import Job from "./routes/Job";
import Show from "./routes/Show";
import Ask from "./routes/Ask";

const Globalstyle = createGlobalStyle`
/* reset.css
http://meyerweb.com/eric/tools/css/reset/ v2.0 | 20110126 
License: none (public domain) */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-family: "Roboto", sans-serif;
  width: 390px;
  box-sizing: border-box;
  background-color: #222;
  margin: 0 auto;
}
a {
  text-decoration: none;
  color: #727272;
}
.App {
    margin: 0 auto;
    background-color: #EFEFEF;
  }
.swiper-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8px;
}
.swiper-pagination-bullet {
  background: gray;
  width: 6px;
  height: 6px;
  border-radius: 3px;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background: #ED702D;
  width: 8px;
  height: 8px;
  border-radius: 4px;
}
.swiper {
  display: flex;
  justify-content: center;
  position: relative;
}
.swiper-pagination-fraction {
  background-color: #fff;
  border: 1px solid #dfdfdf;
  width: 71px;
  height: 30px;
  border-radius: 20px;
  margin-left: 160px;
  padding-top: 3px;
  margin-bottom: 66px;
}
.swiper-pagination-current,
.swiper-pagination-total {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 5px; 
}

.swiper-button-next,
.swiper-button-prev {
  background-color: #fff;
  border: 1px solid #dfdfdf;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  position: absolute;
  margin-top: 2110px;
  padding: 6px 0;
  margin-right: 94px;
}
.swiper-button-prev {
  margin-left:94px;
}
.swiper-button-next::after,
.swiper-button-prev::after {
  padding: 4px;
  font-weight: bold;
  font-size: 12px
}
`;

function App() {
  return (
    <>
      <Globalstyle />
      <div className="App">
        <Router>
          <Switch>
            <Route path="/job">
              <Job />
            </Route>
            <Route path="/ask">
              <Ask />
            </Route>
            <Route path="/show">
              <Show />
            </Route>
            <Route path="/new">
              <New />
            </Route>
            <Route path="/top">
              <Top />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
