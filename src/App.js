import React from "react";
import Profile from "./components/Task_1/Profile/Profile"
import Statistics from "./components/Task_2/Statistics/Statistics";
import FriendList from "./components/Task_3/FriendList/FriendList";
import TransactionHisory from "./components/Task_4/TransactionHistory/TransactionHistory";
import user from "./user.json"
import data from "./data.json"
import friends from "./friends.json"
import transactions from "./transactions.json"



function App() {
  return (
    <div>
      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
      <Statistics 
        data={data}
        title="UPLOAD STATS"
      />
    <FriendList friends={friends} />

    <TransactionHisory items={transactions} />
    </div>
  );
}

export default App;
