import React from 'react';
import { StyleSheet, View, Button, Alert, Text } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query GetAlluser {
        getAllUsers {
          id
          email
          name
        }
      }
    `,
  })
  .then((result) => console.log(result));

const GET_USERS = gql`
query GetAlluser {
  getAllUsers {
    email
    name
  }
}
`;

function DisplayUsers() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.users.map(({ id, email, name }) => (
    <div key={id}>
      <h3>{name}</h3>
      <br />
      <b>About this user:</b>
      <p>{email}</p>
      <br />
    </div>
  ));
}

export default class TabTwo extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Onglet deux',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Tu es sur l'onglet 2</Text>
        <DisplayUsers />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});