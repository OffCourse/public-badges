import { Component, Prop, State, Event, EventEmitter, h } from "@stencil/core";
import { ApprovedPublicBadge } from "../../types";
import { ModalPositioning } from "../../interfaces";
import { IconClose, IconCheck, IconCheckSmall, IconArrowDown, IconMore } from "../../assets/icons";
import { Metadata } from "../../assets/metadata";


@Component({
  tag: "publicbadges-modal",
  styleUrl: "public-badges-modal.scss",
})

export class PublicbadgesModal {
  modalEl!: HTMLElement;

  @Prop() public badges: ApprovedPublicBadge[] = [];
  @Prop() public theme: string = "";
  @Prop() public language: "EN" | "NL" = "EN";
  @Prop() public positioning: ModalPositioning = { orientation: "vertical", left: 0, origin: "top" };

  @State() public openBadge: number | null = null

  @Event() public closeDrawer: EventEmitter = ({
    emit: (e) => e
  });

  public componentDidLoad() {
    if(this.positioning.orientation === "vertical") {
      window.scrollBy(0, this.modalEl.getBoundingClientRect().top - 10)
    }
  }

  public closeModalHandler = () => {
    this.closeDrawer.emit();
  }

  private toggleBadge = (i: number) => {
    this.openBadge = this.openBadge === i ? null : i;
  }


  public render() {
    const metadata = Metadata[this.language];
    const { orientation, left, origin } = this.positioning

    return (
      [
        <div id="modal-bg" onClick={ this.closeModalHandler }></div>,
        <div id="modal" class={`${orientation} ${this.theme} ${origin}`} style={{ left: left.toString()+"px"}} ref={(el) => this.modalEl = el as HTMLElement}>
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
              <h1>{metadata.title}</h1>
              <h2>{metadata.subtitle}</h2>
              <div innerHTML={metadata.about(metadata.baseURL)}></div>
              <p>
                <a class="more" href={metadata.baseURL} target="_blank" rel="noopener noreferrer">
                  {metadata.more}
                  <IconMore />
                </a>
              </p>
            </div>
          </div>
        </div >
      ]
    );
  }
}
