import { Component, Element, Prop, State, Listen, Host, h } from "@stencil/core";
import ApolloClient from "apollo-boost";
import { GetAllBadgesComponent, PublicBadge } from "../../types";

const client = new ApolloClient({
  uri: "https://ez41w8cz80.execute-api.us-east-1.amazonaws.com/dev/graphql"
});

@Component({
  tag: "publicbadges-drawer",
  styleUrl: "public-badges-drawer.scss",
  shadow: true
})

export class PublicbadgesDrawer {
  @Element() public el: HTMLElement | undefined;
  @Prop() public badgeColorMode: string = "";
  @Prop() public modalColorMode: string = "";
  @Prop() public modalZIndex: string = "";

  @State() public open = false;

  // Lifecycle Methods
  public componentWillLoad() {
    // set css vars
    const badgeColor = this.badgeColorMode === "light" ? "#FFF" : "#3C3C3C";
    const modalColorBg = this.modalColorMode === "dark" ? "#3C3C3C" : "#FFF";
    const modalColorFg = this.modalColorMode === "dark" ? "#FFF" : "#3C3C3C";
    if (this.el) {
      this.el.style.setProperty("--badge-color", badgeColor);
      this.el.style.setProperty("--modal-color-bg", modalColorBg);
      this.el.style.setProperty("--modal-color-fg", modalColorFg);
    }

    // add font css
    const linkNode = document.createElement("link");
    linkNode.type = "text/css";
    linkNode.rel = "stylesheet";
    linkNode.href = "http://publicbadges.ao.waag.org/geomanist/font.css";
    document.head.appendChild(linkNode);
  }

  // Handlers
  public openDrawer = () => { this.open = true; };

  @Listen("closeDrawer")
  public closeDrawer() { this.open = false; }

  // Render
  public render() {
    return (
      <apollo-provider client={client}>
        <GetAllBadgesComponent>
          {({ data, loading }) => {
            if (loading) { return <p>Loading...</p>; }

            const badges = data.getAllBadges;

            return (
              <Host>
                <publicbadges-circle
                  colorMode={this.badgeColorMode}
                  badgesCount={badges?.length}
                  interactive={this.open ? false : true}
                  onClick={ this.openDrawer }>
                </publicbadges-circle>
                { this.open &&
                  <publicbadges-modal
                    badges={badges as PublicBadge[]}
                    modalColorMode={this.modalColorMode}
                    modalZIndex={this.modalZIndex}
                    top={this.el ? this.el.offsetTop.toString() : "0" }>
                  </publicbadges-modal> }
              </Host>
            );
          }}
        </GetAllBadgesComponent>
      </apollo-provider>
    );
  }
}
