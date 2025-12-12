import LargeListItem from "./components/authors/LargeListItem";
import SmallListItem from "./components/authors/SmallListitem";
import List from "./components/List";
import SplitScreen from "./components/SplitScreen";
import { authors } from "./data/authors";
import { books } from "./data/books";
import LargeListItemBooks from "./components/books/LargeListItemBooks";
import Modal from "./components/modal/Modal";

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
  return (
    /*   <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideCamp title={"Right"} />
      <RightSideCamp title={"Left"} />
    </SplitScreen> */
    <>
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
      <Modal>
        <List
          items={books}
          sourceName={"books"}
          ItemComponent={LargeListItemBooks}
        />
      </Modal>
    </>
  );
}

export default App;
