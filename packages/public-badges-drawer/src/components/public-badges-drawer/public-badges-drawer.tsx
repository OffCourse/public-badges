import { Component, Element, Prop, State, Listen, Host, h } from '@stencil/core';
import ApolloClient from 'apollo-boost';
import { GetAllBadgesComponent } from "../../types";


const client = new ApolloClient({
  uri: "https://7b265855kb.execute-api.us-east-1.amazonaws.com/dev/graphql"
});

@Component({
  tag: 'publicbadges-drawer',
  styleUrl: 'public-badges-drawer.scss',
  shadow: true
})

export class PublicbadgesDrawer {
  @Element() el: HTMLElement;

  @Prop() badgeColorMode: string;
  @Prop() modalColorMode: string;
  @Prop() modalZIndex: string;

  @State() open = false;


  // Lifecycle Methods
  componentWillLoad() {
    // set css vars
    const badgeColor = this.badgeColorMode === 'light' ? "#FFF" : "#3C3C3C";
    const modalColorBg = this.modalColorMode === 'dark' ? "#3C3C3C" : "#FFF";
    const modalColorFg = this.modalColorMode === 'dark' ? "#FFF" : "#3C3C3C";
    this.el.style.setProperty("--badge-color", badgeColor);
    this.el.style.setProperty("--modal-color-bg", modalColorBg);
    this.el.style.setProperty("--modal-color-fg", modalColorFg);

    // add font css
    var linkNode = document.createElement("link"); 
    linkNode.type = "text/css";
    linkNode.rel = "stylesheet";
    linkNode.href = "http://publicbadges.ao.waag.org/geomanist/font.css";
    document.head.appendChild(linkNode);
  }


  // Handlers
  openDrawer = () => { this.open = true }

  @Listen('closeDrawer')
  closeDrawer() { this.open = false }


  // Render
  render() {
    return (
      <apollo-provider client={client}>
        <GetAllBadgesComponent>
          {({ data, loading }) => {
            if (loading) return <p>Loading...</p>;

            //const badges = data.getAllBadges

            return (
              <Host>
                <publicbadges-circle colorMode={this.badgeColorMode} badgesCount={data.getAllBadges.length} interactive={this.open ? false : true} onClick={ this.openDrawer }></publicbadges-circle>
                { this.open && <publicbadges-modal badges={data.getAllBadges} modalColorMode={this.modalColorMode} modalZIndex={this.modalZIndex} top={this.el.offsetTop.toString()}></publicbadges-modal> }
              </Host>
            )
          }}
        </GetAllBadgesComponent>
      </apollo-provider>
    )
  }
}
