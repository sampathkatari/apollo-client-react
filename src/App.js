import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_BOOKS = gql`
  query {
    books {
      title
      author
    }
  }
`

const App = () => (
  <Query query={GET_BOOKS}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;

      return (
        data.books.map(book => {
          return (
            <p key={book.title}>{book.title} - {book.author}</p>
          )
        })
      )
    }}
  </Query>
)

export default App;