import { Component, Prop, Event, EventEmitter, Listen, h } from '@stencil/core';
import { IconClose, IconCheck, IconArrowDown, IconMore } from "../../assets/icons"
import { PublicBadge } from "../../types";


@Component({
  tag: 'publicbadges-modal',
  styleUrl: 'public-badges-modal.scss',
})

export class PublicbadgesModal {
  @Prop() badges: Array<PublicBadge> = [];
  @Prop() modalColorMode: string;
  @Prop() modalZIndex: string;
  @Prop() top: string;

  @Event() closeDrawer: EventEmitter;

  closeModalHandler = () => {
    this.closeDrawer.emit();
  }

  // @Listen('keydown')
  // handleKeyDown(ev){
  //   console.log('key: ', ev.key)
  // }

  render() {

    return (
      [
        <div id="modal-bg" onClick={ this.closeModalHandler }></div>,
        <div id="modal" class={this.modalColorMode} style={{ zIndex: this.modalZIndex}}>
          <button class="close" onClick={ this.closeModalHandler }>
            <IconClose />
          </button>
          <div id="modal-content">
            <div class="column">
              <publicbadges-circle colorMode={"dark"} interactive={false}></publicbadges-circle>
            </div>
            <div id="badges" class="column">
              <ul>{ [this.badges[0]].map(badge => { return <li><IconCheck /><span><strong>{badge.name}</strong><br />{badge.description}</span><IconArrowDown /></li>}) }</ul>
            </div>
            <div id="about" class="column">
              <h1>PublicSpaces</h1>
              <h2>internet for the common good</h2>
              <p>PublicSpaces reclaims the internet as a force for the common good and advocates a new internet that strengthens the public domain. <a href="https://publicspaces.net/manifesto/" target="_blank" rel="noopener noreferrer">Read our manifesto</a> to see the values we want to see at the core of our digital lives.</p>
              <p><a class="more" href="https://publicspaces.net/" target="_blank" rel="noopener noreferrer">more about PublicSpaces<IconMore /></a></p>
            </div>
          </div>
        </div>
      ]
    )
  }
}
