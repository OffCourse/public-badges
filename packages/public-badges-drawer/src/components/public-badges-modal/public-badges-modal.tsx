import { Component, Prop, State, Event, EventEmitter, h } from "@stencil/core";
import { IconClose, IconCheck, IconCheckSmall, IconArrowDown, IconMore } from "../../assets/icons";
import { ApprovedPublicBadge } from "../../types";

@Component({
  tag: "publicbadges-modal",
  styleUrl: "public-badges-modal.scss",
})

export class PublicbadgesModal {
  @Prop() public theme: string = "";
  @Prop() public mode: string = "";
  @Prop() public left: number = 0;
  @Prop() public origin: string = "top";
  @Prop() public badges: ApprovedPublicBadge[] = [];

  @State() public openBadge: number | null = null

  @Event() public closeDrawer: EventEmitter = ({
    emit: (e) => e
  });


  public closeModalHandler = () => {
    this.closeDrawer.emit();
  }

  private toggleBadge = (i: number) => {
    this.openBadge = this.openBadge === i ? null : i;
  }


  public render() {
    const baseURL = "https://publicspaces.net";

    return (
      [
        <div id="modal-bg" onClick={ this.closeModalHandler }></div>,
        <div id="modal" class={`${this.mode} ${this.theme} ${this.origin}`} style={{ left: this.left.toString()+"px"}}>
          <button class="close" onClick={ this.closeModalHandler }>
            <IconClose />
          </button>
          <div id="modal-content">
            <div id="logo" class="column">
              <publicbadges-circle interactive={false}></publicbadges-circle>
            </div>
            <div id="badges" class="column">
              <ul class={this.badges.length !== 1 ? "accordeon" : ""} >
                { this.badges.map((badge, i) => (
                  <li class={this.openBadge === i ? "open" : ""} onClick={()=> { this.toggleBadge(i) }}>
                    <IconCheck />
                    <h3>{badge.name}</h3>
                    <div class="badge-info">
                      <p>{badge.description}</p>
                      {badge.evidence && 
                        <ul class="evidence">
                          {badge.evidence.map(proof=> {
                            return <li>
                              <IconCheckSmall />
                              <h4>{proof?.description}</h4>
                            </li>
                          })}
                        </ul>
                      }
                    </div>
                    { this.badges.length !== 1 && <IconArrowDown /> }
                  </li>)) }
              </ul>
            </div>
            <div id="about" class="column">
              <h1>PublicSpaces</h1>
              <h2>internet for the common good</h2>
              <p>PublicSpaces reclaims the internet as a force for the common good and advocates a new internet that strengthens the public domain. <a href={`${baseURL}/manifesto`}target="_blank" rel="noopener noreferrer">Read our manifesto</a> to see the values we want to see at the core of our digital lives.</p>
              <p>
                <a class="more"
                  href={baseURL}
                  target="_blank"
                  rel="noopener noreferrer">more about PublicSpaces<IconMore />
                </a>
              </p>
            </div>
          </div>
        </div >
      ]
    );
  }
}
