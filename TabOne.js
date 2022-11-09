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
      query getAllTicket {
        getAllTickets {
          id
          title
          content
          createdAt
        }
      }
    `,
  })
  .then((result) => console.log(result));

const GET_TICKET = gql`
query getAllTicket {
  getAllTickets {
    id
    title
    content
    createdAt
  }
}
`;

function DisplayTickets() {
  const { loading, error, data } = useQuery(GET_TICKET);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.tickets.map(({ id, title, content, createdAt }) => (
    <div key={id}>
      <h3>{title}</h3>
      <br />
      <b>About this ticket:</b>
      <p>{content}</p>
      <p>Created At : {createdAt}</p>
      <br />
    </div>
  ));
}
export default class TabOne extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Onglet un',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Tu es sur l'onglet 1</Text>
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