import UserProfile from './social-profile/UserProfile';
import Statistics from './statistics/Statistics';
import Friendlist from './friend-list/Friendlist';
import TransactionHistory from './transaction-history/TransactionHistory';
import user from './json/user.json';
import data from './json/data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

export const App = () => {
  return (
    <div>
      {
        <UserProfile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      }
      {<Statistics title="Upload stats" stats={data} />}
      {<Friendlist friends={friends} />}
      {<TransactionHistory items={transactions} />}
    </div>
  );
};
