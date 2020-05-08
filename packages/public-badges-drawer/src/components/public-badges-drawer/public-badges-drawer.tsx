import { Component, Element, Prop, State, Listen, Host, h } from "@stencil/core";
import { ApprovedPublicBadge } from "../../types";
import { ModalPositioning } from "../../interfaces";
import { changeEvidenceTexts, calculateModalPositioning, addFont } from "../../utils/utils";


@Component({
  tag: "publicbadges-drawer",
  styleUrl: "public-badges-drawer.scss",
  shadow: true
})

export class PublicbadgesDrawer {
  @Element() public el: HTMLElement | undefined;

  @Prop() public badgeColor: string = "#3C3C3C";
  @Prop() public modalTheme: "dark" | "light" = "light";
  @Prop() public language: "EN" | "NL" = "EN";
  @Prop() public testMode: boolean = false;
  @Prop() public testDomain: string = "https://example.org";

  @State() public badges: ApprovedPublicBadge[] | undefined;
  @State() public isOpen: boolean = false;
  @State() public modalPositioning: ModalPositioning = { orientation: "vertical", left: 0, origin: "top" };

  
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

    // add font/css
    addFont("https://fonts.publicbadges.com/");

    // fetch badges
    const domainName: string = this.testMode ? this.testDomain : window.location.origin

    fetch('https://api.publicbadges.com/pilot/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `{ getAllBadges(domainName: "${domainName}", language: ${this.language}) { badgeId name description status ...on SignedPublicBadge { evidence { proofId name description } } } }` }),
    }).then(res => {
      return res.json()
    }).then(res => {
      if(res.data.getAllBadges) {
        let badges: ApprovedPublicBadge[] = res.data.getAllBadges.slice(0,1);

        badges = changeEvidenceTexts(badges, domainName);

        this.badges = badges
      }
    });
  }


  // Handlers
  public openDrawer = () => {
    if(this.el) {
      this.modalPositioning = calculateModalPositioning(this.el);
    }

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
    if(this.el) {
      this.modalPositioning = calculateModalPositioning(this.el);
    }
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
              badges={this.badges}
              theme={this.modalTheme}
              language={this.language}
              positioning={this.modalPositioning}
              >
            </publicbadges-modal> }
        </Host>
      );
    }
  }
}
