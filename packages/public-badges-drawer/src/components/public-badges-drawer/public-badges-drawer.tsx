import { Component, Element, Prop, State, Listen, Host, h } from "@stencil/core";
import { ApprovedPublicBadge } from "../../types";

@Component({
  tag: "publicbadges-drawer",
  styleUrl: "public-badges-drawer.scss",
  shadow: true
})

export class PublicbadgesDrawer {
  @Element() public el: HTMLElement | undefined;

  // Props
  @Prop() public badgeTheme: string = "dark";
  @Prop() public modalTheme: string = "light";
  @Prop() public testMode: boolean = false;

  // State
  @State() public open: boolean = false;
  @State() public modalMode: string = "";
  @State() public modalLeft: number = 0;
  @State() public modalOrigin: string = "";
  @State() public badges: ApprovedPublicBadge[] | undefined;


  // Lifecycle Methods
  public componentWillLoad() {

    // set css vars
    const badgeColor = this.badgeTheme === "light" ? "#FFF" : "#3C3C3C";
    const modalColorBg = this.modalTheme === "dark" ? "#3C3C3C" : "#FFF";
    const modalColorFg = this.modalTheme === "dark" ? "#FFF" : "#3C3C3C";
    if(this.el) {
      this.el.style.setProperty("--badge-color", badgeColor);
      this.el.style.setProperty("--modal-color-bg", modalColorBg);
      this.el.style.setProperty("--modal-color-fg", modalColorFg);
    }

    // add font css
    const linkNode = document.createElement("link");
    linkNode.type = "text/css";
    linkNode.rel = "stylesheet";
    linkNode.href = "http://publicbadges.ao.waag.org/manrope/font.css";
    document.head.appendChild(linkNode);

    // fetch badges
    fetch('https://api.publicbadges.com/dev/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: '{ getAllBadges(domainName: "https://example.org/") { badgeId name description status ...on SignedPublicBadge { evidence { proofId name description } } } }' }),
    }).then(res => {
      return res.json()
    }).then(res => {
      this.badges = res.data.getAllBadges.slice(0,1)
    });

  }

  //
  private calculatePositioning() {
    const top: number = this.el ? this.el.offsetTop : 0;
    const left: number = this.el ? this.el.offsetLeft : 0;

    const width: number = this.el ? this.el.offsetWidth : 0;
    const height: number = this.el ? this.el.offsetHeight : 0;

    const docWidth: number = window.innerWidth
    const docHeight: number = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight, 
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );

    const spaceBottom = docHeight - top - height;
    const spaceRight  = docWidth - left - width;

    this.modalMode = docWidth < 980 ? "vertical" : "horizontal";
    this.modalLeft = Math.min(0, spaceRight + 40 - (docWidth < 980 ? 340 : 820));
    this.modalOrigin = top > spaceBottom ? "bottom" : "top";
  }


  // Handlers
  public openDrawer = () => {
    this.calculatePositioning();

    this.open = true;
  };

  @Listen('keydown', { target: 'window' })
  handleKeyDown(ev: KeyboardEvent){
    if(ev.key === "Escape") {
      this.open = false;
    }
  }

  @Listen("closeDrawer")
  public closeDrawer() {
    this.open = false;
  }

  @Listen('resize', { target: 'window' })
  handleWindowResize(){
    if(this.open) this.calculatePositioning();
  }


  // Render
  public render() {
    if(this.badges) {
      return (
        <Host style={{ zIndex: this.open ? "9999" : "1" }}>
          <publicbadges-circle
            badgesCount={this.badges?.length}
            interactive={this.open ? false : true}
            testMode={this.testMode}
            onClick={ this.openDrawer }>
          </publicbadges-circle>
          { this.open &&
            <publicbadges-modal
              theme={this.modalTheme}
              mode={this.modalMode}
              left={this.modalLeft}
              origin={this.modalOrigin}
              badges={this.badges}>
            </publicbadges-modal> }
        </Host>
      );
    }
  }
}
