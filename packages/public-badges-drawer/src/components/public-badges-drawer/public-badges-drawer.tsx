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
  @Prop() public badgeColor: string = "#3C3C3C";
  @Prop() public modalTheme: "dark" | "light" = "light";
  @Prop() public language: "EN" | "NL" | "DE" = "EN";
  @Prop() public testMode: boolean = false;

  // State
  @State() public isOpen: boolean = false;
  @State() public modalOrientation: "horizontal" | "vertical" = "vertical";
  @State() public modalLeft: number = 0;
  @State() public modalOrigin: "bottom" | "top" = "top";
  @State() public badges: ApprovedPublicBadge[] | undefined;


  // Lifecycle Methods
  public componentWillLoad() {

    // set css vars
    const badgeColor = this.badgeColor;
    const modalColorBg = this.modalTheme === "dark" ? "#3C3C3C" : "#FFF";
    const modalColorFg = this.modalTheme === "dark" ? "#FFF" : "#3C3C3C";
    if(this.el) {
      this.el.style.setProperty("--badge-color", badgeColor);
      this.el.style.setProperty("--modal-color-bg", modalColorBg);
      this.el.style.setProperty("--modal-color-fg", modalColorFg);
    }

    const fontUrl = "https://fonts.publicbadges.com/";

    // add font/css
    const linkCss = document.createElement("link");
    linkCss.type = "text/css";
    linkCss.rel = "stylesheet";
    linkCss.href = fontUrl + "font.css";
    document.head.appendChild(linkCss);

    const linkFont = document.createElement("link");
    linkFont.type = "font/ttf";
    linkFont.rel = "preload";
    linkFont.as = "font";
    linkFont.crossOrigin = "anonymous";
    linkFont.href = fontUrl + "ManropeGX.ttf";
    document.head.appendChild(linkFont);


    const domainName: string = this.testMode ? "https://example.org" : window.location.origin

    // fetch badges
    fetch('https://api.publicbadges.com/pilot/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `{ getAllBadges(domainName: "${domainName}", language: ${this.language}) { badgeId name description status ...on SignedPublicBadge { evidence { proofId name description } } } }` }),
    }).then(res => {
      return res.json()
    }).then(res => {
      if(res.data.getAllBadges) {
        this.badges = res.data.getAllBadges.slice(0,1)
      }
    });

  }

  //
  private calculatePositioning() {
    const doc = document.documentElement;
    const body = document.body;

    const docWidth: number = window.innerWidth
    const docHeight: number = Math.max(
      body.scrollHeight,
      body.offsetHeight, 
      doc.clientHeight,
      doc.scrollHeight,
      doc.offsetHeight
    );

    const docScrollTop: number = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
    const elementTop: number = this.el ? this.el.getBoundingClientRect().top : 0;

    const top: number = docScrollTop + elementTop;
    const left: number = this.el ? this.el.getBoundingClientRect().left : 0;

    const width: number = this.el ? this.el.offsetWidth : 0;
    const height: number = this.el ? this.el.offsetHeight : 0;

    const spaceBottom = docHeight - (top + height);
    const spaceRight  = docWidth - (left + width);

    this.modalOrientation = docWidth < 980 ? "vertical" : "horizontal";
    this.modalLeft = Math.min(0, spaceRight + width - (docWidth < 980 ? 350 : 830));
    this.modalOrigin = top > spaceBottom ? "bottom" : "top";
  }


  // Handlers
  public openDrawer = () => {
    this.calculatePositioning();

    this.isOpen = true;
  };

  @Listen('keydown', { target: 'window' })
  handleKeyDown(ev: KeyboardEvent){
    if(ev.key === "Escape") {
      this.isOpen = false;
    }
  }

  @Listen("closeDrawer")
  public closeDrawer() {
    this.isOpen = false;
  }

  @Listen('resize', { target: 'window' })
  handleWindowResize(){
    if(this.isOpen) this.calculatePositioning();
  }


  // Render
  public render() {
    if(this.badges) {
      return (
        <Host style={{ zIndex: this.isOpen ? "9999" : "1" }}>
          <publicbadges-circle
            badgesCount={this.badges?.length}
            interactive={this.isOpen ? false : true}
            testMode={this.testMode}
            onClick={ this.openDrawer }>
          </publicbadges-circle>
          { this.isOpen &&
            <publicbadges-modal
              theme={this.modalTheme}
              mode={this.modalOrientation}
              left={this.modalLeft}
              origin={this.modalOrigin}
              badges={this.badges}>
            </publicbadges-modal> }
        </Host>
      );
    }
  }
}
