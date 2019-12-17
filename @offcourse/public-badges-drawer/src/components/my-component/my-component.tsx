import { Component, Prop, h } from '@stencil/core';
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
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;


  render() {
      return (
          <apollo-provider client={client}>
              <GetAllBadgesComponent>
          {({ data, loading }) => {
              const { name, badgeId} = data.getAllBadges[0];

              console.log
              if (loading) {
                  return 'Loading...';
              }
              return <h2>{name}</h2>
          }}
          </GetAllBadgesComponent>
          </apollo-provider>
      );
  }
}
