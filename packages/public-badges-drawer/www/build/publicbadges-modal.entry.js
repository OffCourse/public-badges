import { h, r as registerInstance, c as createEvent } from './index-a4a9eca1.js';

// @ts-ignore
const IconClose = () => h("svg", { class: "icon-close", viewBox: "0 0 20 20.07" },
    h("polygon", { points: "20 4.62 15.45 0.07 10.03 5.48 4.55 0 0 4.55 5.48 10.03 0 15.51 4.55 20.07 10.03 14.59 15.45 20 20 15.45 14.59 10.03 20 4.62" }));
// @ts-ignore
const IconCheck = () => h("svg", { class: "icon-check", viewBox: "0 0 20 20" },
    h("path", { d: "M10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm1.11,12.88L9,15,6.88,12.88l-3-3L6,7.77l3,3,5.09-5.08L16.2,7.8Z" }));
// @ts-ignore
const IconCheckSmall = () => h("svg", { class: "icon-check-small", viewBox: "0 0 20 20" },
    h("polygon", { points: "5.11 5.08 2.12 2.09 0 4.21 3 7.2 5.12 9.32 7.23 7.2 12.32 2.12 10.2 0 5.11 5.08" }));
// @ts-ignore
const IconArrowDown = () => h("svg", { class: "icon-arrow-down", viewBox: "0 0 20 12.93" },
    h("path", { d: "M20,6.5l-2.9-3L10,10.6,3,3.53l-3,3,7.07,7.06h0l3,2.91h0l2.9-2.91h0Z", transform: "translate(0 -3.53)" }));
// @ts-ignore
const IconMore = () => h("svg", { class: "icon-more", viewBox: "0 0 20 19.97" },
    h("polygon", { points: "1.93 0 1.93 5.31 10.91 5.31 0 16.22 3.75 19.97 14.69 9.03 14.69 17.99 20 17.99 20 5.31 20 0 1.93 0" }));

const PublicbadgesModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.theme = "";
        this.mode = "";
        this.left = 0;
        this.origin = "top";
        this.badges = [];
        this.openBadge = null;
        this.closeDrawer = ({
            emit: (e) => e
        });
        this.closeModalHandler = () => {
            this.closeDrawer.emit();
        };
        this.toggleBadge = (i) => {
            this.openBadge = this.openBadge === i ? null : i;
        };
        this.closeDrawer = createEvent(this, "closeDrawer", 7);
    }
    componentDidLoad() {
        if (this.mode === "vertical") {
            window.scrollBy(0, this.modalEl.getBoundingClientRect().top - 10);
        }
    }
    render() {
        const baseURL = "https://publicspaces.net";
        return ([
            h("div", { id: "modal-bg", onClick: this.closeModalHandler }),
            h("div", { id: "modal", class: `${this.mode} ${this.theme} ${this.origin}`, style: { left: this.left.toString() + "px" }, ref: (el) => this.modalEl = el }, h("button", { class: "close", onClick: this.closeModalHandler }, h(IconClose, null)), h("div", { id: "modal-content" }, h("div", { id: "logo", class: "column" }, h("publicbadges-circle", { interactive: false })), h("div", { id: "badges", class: "column" }, h("ul", { class: this.badges.length !== 1 ? "accordeon" : "" }, this.badges.map((badge, i) => (h("li", { class: this.openBadge === i ? "open" : "", onClick: () => { this.toggleBadge(i); } }, h(IconCheck, null), h("h3", null, badge.name), h("div", { class: "badge-info" }, h("p", null, badge.description), badge.evidence &&
                h("ul", { class: "evidence" }, badge.evidence.map(proof => {
                    var _a;
                    return h("li", null, h(IconCheckSmall, null), h("h4", null, (_a = proof) === null || _a === void 0 ? void 0 : _a.description));
                }))), this.badges.length !== 1 && h(IconArrowDown, null)))))), h("div", { id: "about", class: "column" }, h("h1", null, "PublicSpaces"), h("h2", null, "internet for the common good"), h("p", null, "PublicSpaces reclaims the internet as a force for the common good and advocates a new internet that strengthens the public domain. ", h("a", { href: `${baseURL}/manifesto`, target: "_blank", rel: "noopener noreferrer" }, "Read our manifesto"), " to see the values we want to see at the core of our digital lives."), h("p", null, h("a", { class: "more", href: baseURL, target: "_blank", rel: "noopener noreferrer" }, "more about PublicSpaces", h(IconMore, null))))))
        ]);
    }
    static get style() { return "#modal-bg {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  display: block;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n#modal {\n  all: initial;\n  position: absolute;\n  padding: 10px;\n  background: var(--modal-color-bg);\n  color: var(--modal-color-fg);\n  -webkit-box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.25);\n  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.25);\n  font-size: 14px;\n  font-family: Manrope, sans-serif;\n  font-weight: 400;\n}\n\@supports (font-variation-settings: normal) {\n  #modal {\n    font-family: \"Manrope VF\", sans-serif;\n    font-variation-settings: \"wght\" 450;\n    font-variation-ligatures: normal;\n    -webkit-font-feature-settings: \"calt\", \"liga\";\n    font-feature-settings: \"calt\", \"liga\";\n  }\n}\n#modal *, #modal *:before, #modal *:after {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n}\n#modal.bottom {\n  bottom: 0;\n  -webkit-animation: from-bottom 250ms ease 1;\n  animation: from-bottom 250ms ease 1;\n}\n#modal.top {\n  top: 0;\n  -webkit-animation: from-top 250ms ease 1;\n  animation: from-top 250ms ease 1;\n}\n#modal [class^=icon] path, #modal [class^=icon] polygon, #modal [class^=icon] rect, #modal [class^=icon] circle {\n  fill: var(--modal-color-fg);\n}\n\n\@-webkit-keyframes from-bottom {\n  from {\n    opacity: 0.5;\n    -webkit-clip-path: polygon(-10% 110%, -10% 110%, 110% 110%, 110% 110%);\n    clip-path: polygon(-10% 110%, -10% 110%, 110% 110%, 110% 110%);\n  }\n  to {\n    opacity: 1;\n    -webkit-clip-path: polygon(-10% 110%, -10% -10%, 110% -10%, 110% 110%);\n    clip-path: polygon(-10% 110%, -10% -10%, 110% -10%, 110% 110%);\n  }\n}\n\n\@keyframes from-bottom {\n  from {\n    opacity: 0.5;\n    -webkit-clip-path: polygon(-10% 110%, -10% 110%, 110% 110%, 110% 110%);\n    clip-path: polygon(-10% 110%, -10% 110%, 110% 110%, 110% 110%);\n  }\n  to {\n    opacity: 1;\n    -webkit-clip-path: polygon(-10% 110%, -10% -10%, 110% -10%, 110% 110%);\n    clip-path: polygon(-10% 110%, -10% -10%, 110% -10%, 110% 110%);\n  }\n}\n\@-webkit-keyframes from-top {\n  from {\n    opacity: 0.5;\n    -webkit-clip-path: polygon(-10% -10%, -10% -10%, 110% -10%, 110% -10%);\n    clip-path: polygon(-10% -10%, -10% -10%, 110% -10%, 110% -10%);\n  }\n  to {\n    opacity: 1;\n    -webkit-clip-path: polygon(-10% -10%, -10% 110%, 110% 110%, 110% -10%);\n    clip-path: polygon(-10% -10%, -10% 110%, 110% 110%, 110% -10%);\n  }\n}\n\@keyframes from-top {\n  from {\n    opacity: 0.5;\n    -webkit-clip-path: polygon(-10% -10%, -10% -10%, 110% -10%, 110% -10%);\n    clip-path: polygon(-10% -10%, -10% -10%, 110% -10%, 110% -10%);\n  }\n  to {\n    opacity: 1;\n    -webkit-clip-path: polygon(-10% -10%, -10% 110%, 110% 110%, 110% -10%);\n    clip-path: polygon(-10% -10%, -10% 110%, 110% 110%, 110% -10%);\n  }\n}\nh1, h2, h3 {\n  line-height: 1.2em;\n  margin: 0;\n}\n\nh1 {\n  font-size: 19px;\n  font-weight: 600;\n  font-variation-settings: \"wght\" 650;\n}\n\nh2 {\n  margin-bottom: 0.5em;\n  font-size: 19px;\n  font-weight: 400;\n  font-variation-settings: \"wght\" 450;\n}\n\nh3 {\n  margin-bottom: 0.25em;\n  font-size: 16px;\n  font-weight: 600;\n  font-variation-settings: \"wght\" 650;\n}\n\nh4 {\n  margin: 0em;\n  font-size: 14px;\n  font-weight: 400;\n  font-variation-settings: \"wght\" 450;\n}\n\np {\n  line-height: 1.5em;\n}\np:last-child {\n  margin-bottom: 0;\n}\n\nli {\n  line-height: 1.5em;\n}\n\nstrong {\n  font-weight: 700;\n}\n\na {\n  color: var(--modal-color-fg);\n}\na:hover {\n  text-decoration: none;\n}\n\na.more {\n  text-decoration: none;\n}\na.more svg {\n  position: relative;\n  display: inline-block;\n  width: 8px;\n  margin-left: 5px;\n  vertical-align: middle;\n}\na.more:hover {\n  text-decoration: underline;\n}\na.more:hover svg {\n  top: -1px;\n  left: 1px;\n}\n\n.close {\n  position: absolute;\n  top: 3px;\n  right: 4px;\n  width: 24px;\n  height: 24px;\n  padding: 8px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n}\n.close svg {\n  cursor: pointer;\n}\n.close:hover svg {\n  -webkit-transform: scale(1.3);\n  transform: scale(1.3);\n  -webkit-transition: -webkit-transform 200ms ease;\n  transition: -webkit-transform 200ms ease;\n  transition: transform 200ms ease;\n  transition: transform 200ms ease, -webkit-transform 200ms ease;\n}\n\n#modal-content {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.vertical #modal-content {\n  -ms-flex-direction: column;\n  flex-direction: column;\n}\n\n.column {\n  width: 320px;\n}\n.vertical .column {\n  padding: 20px 10px;\n}\n.vertical .column:last-child {\n  padding-bottom: 10px;\n}\n.horizontal .column {\n  padding: 35px 30px;\n}\n\n#logo {\n  width: 150px;\n}\n.vertical #logo {\n  padding-right: 20px;\n}\n.horizontal #logo {\n  padding-right: 0px;\n}\n\n#badges ul {\n  margin: 0;\n  padding-left: 0;\n  list-style: none;\n}\n#badges ul li {\n  position: relative;\n  margin-bottom: 2em;\n  padding: 0 0 0 30px;\n}\n#badges ul li:last-child {\n  margin-bottom: 0;\n}\n#badges ul li .icon-check {\n  position: absolute;\n  width: 18px;\n  left: 0;\n  top: 0;\n}\n#badges ul.accordeon li {\n  padding-right: 20px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n#badges ul.accordeon .badge-info {\n  max-height: 0;\n  overflow-y: hidden;\n  -webkit-transition: all 150ms cubic-bezier(0, 1, 0.5, 1);\n  transition: all 150ms cubic-bezier(0, 1, 0.5, 1);\n}\n#badges ul.accordeon .icon-arrow-down {\n  position: absolute;\n  right: 1px;\n  top: 4px;\n  width: 10px;\n  -webkit-transition: all 200ms ease;\n  transition: all 200ms ease;\n}\n#badges ul.accordeon li.open .badge-info {\n  max-height: 16rem;\n}\n#badges ul.accordeon li.open .icon-arrow-down {\n  -webkit-transform: scaleY(-1);\n  transform: scaleY(-1);\n}\n#badges ul .evidence {\n  margin: 0;\n}\n#badges ul .evidence li {\n  margin-bottom: 10px;\n  padding-left: 16px;\n}\n#badges ul .evidence .icon-check-small {\n  position: absolute;\n  left: 0;\n  top: 6px;\n  width: 16px;\n  height: 16px;\n}\n\n.horizontal #badges {\n  border-right: 1px solid var(--modal-color-fg);\n}\n\n.vertical #about {\n  border-top: 1px solid var(--modal-color-fg);\n}\n.horizontal #about {\n  position: relative;\n  left: -1px;\n  border-left: 1px solid var(--modal-color-fg);\n}"; }
};

export { PublicbadgesModal as publicbadges_modal };
