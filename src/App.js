import React from 'react';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import store from './store/state';
import ShowTime from './components/ShowTime/ShowTime';
import { ListAstronaut } from './components/ListAstronaut/index';
import { MapISSlocation } from './components/MapISSlocation/index';
import ListComment from './components/ListComment/ListComment'
import AddComment from './components/AddComment/AddComment'
import './App.scss';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <div className={'container'}>
      <Provider store={store}>
        <ShowTime utc formatTime={"HH:mm"} formatData={'dddd, DD MMM YYYY'} string={'Current UTC Time: '} time={true} data={true} />
        <ListAstronaut />
        <MapISSlocation className={'MapISSlocation'} />
        <ApolloProvider client={client}>
          <AddComment/>
          <ListComment />
        </ApolloProvider>
      </Provider>
    </div>
  );
};

export default App;
