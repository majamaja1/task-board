import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewTaskPage from "./components/pages/NewTaskPage";
import Board from "./components/pages/Board";
import UsersContext from "./context/userContext";
import EditTaskPage from "./components/pages/EditTaskPage";
import NewColumnPage from "./components/pages/NewColumnPage";
import NewUserPage from "./components/pages/NewUserPage";

function App() {
  const [users, setUsers] = useState([
    {
      firstName: "Maja",
      lastName: "Novičić",
      avatarImg:
        "https://scontent.fbeg2-1.fna.fbcdn.net/v/t1.0-9/84309051_316995162589871_626491713937997824_n.jpg?_nc_cat=107&ccb=2&_nc_sid=174925&_nc_ohc=igiNM4m8VJcAX94IBS9&_nc_ht=scontent.fbeg2-1.fna&oh=769c80a14a61a0f47289f63ff8c0cb54&oe=5FD087F8",
      value: 1,
      name: "Maja Novičić",
    },
    {
      firstName: "Lazar",
      lastName: "Petrović",
      avatarImg:
        "https://scontent.fbeg2-1.fna.fbcdn.net/v/t31.0-8/12604745_10205916865826283_2524659602923429022_o.jpg?_nc_cat=102&ccb=2&_nc_sid=a9b1d2&_nc_ohc=YJFeeTR8Z6EAX9Brm_3&_nc_ht=scontent.fbeg2-1.fna&oh=ac5fda57687eea68c0d68e45afccc339&oe=5FD16968",
      value: 2,
      name: "Lazar Petrović",
    },
    {
      firstName: "Petar",
      lastName: "Brković",
      avatarImg:
        "https://scontent.fbeg2-1.fna.fbcdn.net/v/t1.0-9/81497910_298182777805600_4340567655271366656_n.jpg?_nc_cat=111&ccb=2&_nc_sid=174925&_nc_ohc=4JeSEYVRMeoAX85A96D&_nc_ht=scontent.fbeg2-1.fna&oh=27203b0b03488517583c77878356c7b7&oe=5FD1E9F6",
      value: 3,
      name: "Petar Brković",
    },
  ]);

  const [listColumn, setListColumn] = useState([
    {
      name: "ToDo",
      createdAt: "",
      itemCount: "",
      value: 1,
    },
    {
      name: "In Progress",
      createdAt: "",
      itemCount: "",
      value: 2,
    },
    {
      name: "In Review",
      createdAt: "",
      itemCount: "",
      value: 3,
    },
    {
      name: "Done",
      createdAt: "",
      itemCount: "",
      value: 4,
    },
  ]);

  const [issues, setIssue] = useState([]);

  const deleteItem = (index) => {
    const newArr = [...issues];
    newArr.splice(index, 1);

    const newArray = newArr.map((elem, i) => {
      if (i >= index) {
        return {
          ...elem,
          id: elem.id - 1,
        };
      }
      return elem;
    });

    setIssue(newArray);
  };
  const setIssueState = (newState) =>
    setIssue((prevState) => [
      ...prevState,
      { ...newState, id: prevState.length },
    ]);

  const editState = (newState, id) =>
    setIssue((prevState) => {
      const tempState = [...prevState];
      tempState[id] = { ...tempState[id], ...newState };
      return tempState;
    });

  const globalState = {
    users,
    listColumn,
    issues,
    setIssueState,
    deleteItem,
    editState,
  };
  console.log(globalState);

  return (
    <UsersContext.Provider value={globalState}>
      <Router>
        <Switch>
          <Route exact path="/" component={Board} />
          <Route exact path="/new" component={NewTaskPage} />
          <Route exact path="/edit/:id" component={EditTaskPage} />
          <Route exact path="/new_column" component={NewColumnPage} />
          <Route exact path="/new_user" component={NewUserPage} />
        </Switch>
      </Router>
    </UsersContext.Provider>
  );
}

export default App;
