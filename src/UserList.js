import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  query GetUsers {
    users {
      username
    }
  }
`;
function UserList() {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <p> Loading...</p>;
  if (error) return <p> Error :(</p>;

  return (<div>{data.users.map(({username})=> (
    <p key={username}>{username}</p>
    )
  )}</div>)
}
export default UserList;