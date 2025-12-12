import LargeListItem from "./components/authors/LargeListItem";
import SmallListItem from "./components/authors/SmallListitem";
import List from "./components/List";
import SplitScreen from "./components/SplitScreen";
import { authors } from "./data/authors";
import { books } from "./data/books";
import LargeListItemBooks from "./components/books/LargeListItemBooks";
import Modal from "./components/modal/Modal";
import CurrentUserLoader from "./components/CurrentUserLoader";
import { UserInfo } from "./components/infos/user-info";
import UserLoader from "./components/UserLoader";
import ResourceLoader from "./components/ResourceLoader";
import { BookInfo } from "./components/infos/book-info";
import DataSource from "./components/DataSource";
import axios from "axios";
import DataResourceRender from "./components/DataResourceRender";
const LeftSideCamp = ({ title }) => {
  return (
    <h2 style={{ backgroundColor: "crimson", height: "100vh", margin: 0 }}>
      {title}
    </h2>
  );
};
const RightSideCamp = ({ title }) => {
  return <h2 style={{ backgroundColor: "brown", height: "100vh" }}>{title}</h2>;
};
function App() {
  const handleGetData = async () => {
    try {
      const urlName = "http://localhost:9090/users/1";
      const res = await axios.get(urlName);
      return res.data;
    } catch (e) {
      console.error(e);
    }
  };

  const getDataFromLocalStorage = (key) => {
    return localStorage.getItem(key);
  };
  return (
    <>
      {/*     <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideCamp title={"Right"} />
      <RightSideCamp title={"Left"} />
    </SplitScreen>  */}

      {/*   <List
        items={authors}
        sourceName={"author"}
        ItemComponent={SmallListItem}
      /> */}
      {/*  <List
        items={authors}
        sourceName={"author"}
        ItemComponent={LargeListItem}
      /> */}
      {/*  <List
        items={books}
        sourceName={"books"}
        ItemComponent={LargeListItemBooks}
      /> */}
      {/*  <Modal>
        <List
          items={books}
          sourceName={"books"}
          ItemComponent={LargeListItemBooks}
        />
      </Modal> */}
      <h1>Start Here!!!!!</h1>
      {/*  <UserLoader userId={"3"}>
        <UserInfo />
      </UserLoader> */}
      {/*    <ResourceLoader
        resourceUrl={"http://localhost:9090/users/1"}
        reasourceName={"user"}
      >
        <UserInfo />
      </ResourceLoader>

      <ResourceLoader
        resourceUrl={"http://localhost:9090/books/1"}
        reasourceName={"books"}
      >
        <BookInfo />
      </ResourceLoader> */}

      {/*     <DataSource getData={handleGetData} resourceName={"user"}>
        <UserInfo />
      </DataSource> */}

      <DataResourceRender
        getData={handleGetData}
        render={(resource) => <UserInfo user={resource} />}
      ></DataResourceRender>
    </>
  );
}

export default App;
