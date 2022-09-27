import { useQuery, gql } from '@apollo/client';

import { useGetUsersQuery } from './graphql/generated';

// const GET_USERS = gql`
//   query GetUsers {
//     users {
//       username
//     }
//   }
// `;

function UserList() {
  const { data, loading, error } = useGetUsersQuery({endpoint: 'https://users-messages-gql.herokuapp.com/graphql'});
  // const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <p> Loading...</p>;
  if (error) return <p> Error :(</p>;

  return (<div>{data.users.map(({username})=> (
    <p key={username}>{username}</p>
    )
  )}</div>)
}
export default UserList;