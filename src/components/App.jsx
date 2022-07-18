import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { StatisticsList } from './StatisticsList/StatisticsList';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats">
        <StatisticsList stats={data} />
      </Statistics>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
