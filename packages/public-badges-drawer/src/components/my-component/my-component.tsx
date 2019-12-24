import { Component, h } from '@stencil/core';
import 'stencil-apollo';
import ApolloClient from 'apollo-boost';
import { GetAllBadgesComponent } from "../../types";


const client = new ApolloClient({
  uri: "https://7b265855kb.execute-api.us-east-1.amazonaws.com/dev/graphql"
});

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  render() {

    return (
      <apollo-provider client={client}>
        <GetAllBadgesComponent>
          {({ data, loading }) => {
            if (loading) {
              return <p>Loading...</p>;
            }

            const badges = data.getAllBadges.map(badge => { return <li key={badge.badgeId}>{badge.badgeId}</li>})
            return <ul>{badges}</ul>
          }}
        </GetAllBadgesComponent>
      </apollo-provider>
    );
  }
}

