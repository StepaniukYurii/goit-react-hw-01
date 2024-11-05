// src/App.jsx
import Profile from "../components/Profile/Profile";
import FriendList from "./FriendList/FriendList";
import Transaction from "../components/Transaction/Transaction";

import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <Transaction items={transactions} />
    </>
  );
};

export default App;
