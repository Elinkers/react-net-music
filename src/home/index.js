import Head from "../component/head/index";
import Seletct from "./selectlist/index";
import Carousels from "./carousel/index";
import './index.less';
import { Layout } from 'antd';
const { Content, Footer, Header } = Layout;

function Home() {
  return (
    <Layout>
      <Header>
        <Head />
      </Header>
      <Content>
        <Seletct />
        <Carousels />
        <div className="content">
          <div className="box">
            <div className="recomand">
              <div className="hot"></div>
              <div className="style"></div>
              <div className="new"></div>
              <div className="billboard"></div>
            </div>
            <div className="user">
              <div className="info"></div>
              <div className="singer"></div>
              <div className="boarder"></div>
            </div>
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}

export default Home;