import { r as registerInstance, h, H as Host, g as getElement } from './index-a4a9eca1.js';

const PublicbadgesDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        // Props
        this.badgeColor = "#3C3C3C";
        this.modalTheme = "light";
        this.testMode = false;
        // State
        this.isOpen = false;
        this.modalOrientation = "vertical";
        this.modalLeft = 0;
        this.modalOrigin = "top";
        // Handlers
        this.openDrawer = () => {
            this.calculatePositioning();
            this.isOpen = true;
        };
    }
    // Lifecycle Methods
    componentWillLoad() {
        // set css vars
        const badgeColor = this.badgeColor;
        const modalColorBg = this.modalTheme === "dark" ? "#3C3C3C" : "#FFF";
        const modalColorFg = this.modalTheme === "dark" ? "#FFF" : "#3C3C3C";
        if (this.el) {
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
        const domainName = this.testMode ? "https://example.org" : window.location.origin;
        // fetch badges
        fetch('https://api.publicbadges.com/pilot/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: `{ getAllBadges(domainName: "${domainName}") { badgeId name description status ...on SignedPublicBadge { evidence { proofId name description } } } }` }),
        }).then(res => {
            return res.json();
        }).then(res => {
            if (res.data.getAllBadges) {
                this.badges = res.data.getAllBadges.slice(0, 1);
            }
        });
    }
    //
    calculatePositioning() {
        const doc = document.documentElement;
        const body = document.body;
        const docWidth = window.innerWidth;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, doc.clientHeight, doc.scrollHeight, doc.offsetHeight);
        const docScrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        const elementTop = this.el ? this.el.getBoundingClientRect().top : 0;
        const top = docScrollTop + elementTop;
        const left = this.el ? this.el.getBoundingClientRect().left : 0;
        const width = this.el ? this.el.offsetWidth : 0;
        const height = this.el ? this.el.offsetHeight : 0;
        const spaceBottom = docHeight - (top + height);
        const spaceRight = docWidth - (left + width);
        this.modalOrientation = docWidth < 980 ? "vertical" : "horizontal";
        this.modalLeft = Math.min(0, spaceRight + width - (docWidth < 980 ? 350 : 830));
        this.modalOrigin = top > spaceBottom ? "bottom" : "top";
    }
    handleKeyDown(ev) {
        if (ev.key === "Escape") {
            this.isOpen = false;
        }
    }
    closeDrawer() {
        this.isOpen = false;
    }
    handleWindowResize() {
        if (this.isOpen)
            this.calculatePositioning();
    }
    // Render
    render() {
        var _a;
        if (this.badges) {
            return (h(Host, { style: { zIndex: this.isOpen ? "9999" : "1" } }, h("publicbadges-circle", { badgesCount: (_a = this.badges) === null || _a === void 0 ? void 0 : _a.length, interactive: this.isOpen ? false : true, testMode: this.testMode, onClick: this.openDrawer }), this.isOpen &&
                h("publicbadges-modal", { theme: this.modalTheme, mode: this.modalOrientation, left: this.modalLeft, origin: this.modalOrigin, badges: this.badges })));
        }
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  display: block;\n  position: relative;\n  width: 120px;\n  height: 120px;\n  min-width: 90px;\n  min-height: 90px;\n}\n:host * {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}"; }
};

export { PublicbadgesDrawer as publicbadges_drawer };
