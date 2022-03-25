import UserProfile from "./social-profile/UserProfile";
import user from "./social-profile/user.json"
import Statistics from "./statistics/Statistics"
import data from "./statistics/data.json"
import Friendlist from "./friend-list/Friendlist"
import friends from './friend-list/friends.json'
import transactions from './transaction-history/transactions.json';
import TransactionHistory from "./transaction-history/TransactionHistory"

export const App = () => {
  return (
    <div
    >
      {<UserProfile username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats} />}
  {<Statistics title = "Upload stats" stats={data} />}
  {<Friendlist friends={friends} />}
  {<TransactionHistory items={transactions} />}
    </div>
  );
};
