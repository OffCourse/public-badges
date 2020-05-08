import { r as registerInstance, h, H as Host, g as getElement } from './index-a4a9eca1.js';

function calculateModalPositioning(element) {
    const doc = document.documentElement;
    const body = document.body;
    const docWidth = window.innerWidth;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, doc.clientHeight, doc.scrollHeight, doc.offsetHeight);
    const docScrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const elementTop = element ? element.getBoundingClientRect().top : 0;
    const top = docScrollTop + elementTop;
    const left = element ? element.getBoundingClientRect().left : 0;
    const width = element ? element.offsetWidth : 0;
    const height = element ? element.offsetHeight : 0;
    const spaceBottom = docHeight - (top + height);
    const spaceRight = docWidth - (left + width);
    const obj = {
        orientation: docWidth < 980 ? "vertical" : "horizontal",
        left: Math.min(0, spaceRight + width - (docWidth < 980 ? (docWidth < 360 ? 320 : 350) : 830)),
        origin: top > spaceBottom ? "bottom" : "top"
    };
    return obj;
}
function addFont(url) {
    const linkCss = document.createElement("link");
    linkCss.type = "text/css";
    linkCss.rel = "stylesheet";
    linkCss.href = url + "font.css";
    document.head.appendChild(linkCss);
    const linkFont = document.createElement("link");
    linkFont.type = "font/ttf";
    linkFont.rel = "preload";
    linkFont.as = "font";
    linkFont.crossOrigin = "anonymous";
    linkFont.href = url + "ManropeGX.ttf";
    document.head.appendChild(linkFont);
}
// temporary function to change text of organization names until resolved on the backend
function changeEvidenceTexts(badges, domainName = "") {
    if (domainName === "https://vpro.nl") {
        badges.forEach(badge => {
            badge.evidence.forEach(evidence => {
                evidence.description = evidence.description.replace(/Vpro/g, 'VPRO');
            });
        });
    }
    return badges;
}

const PublicbadgesDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.badgeColor = "#3C3C3C";
        this.modalTheme = "light";
        this.language = "EN";
        this.testMode = false;
        this.testDomain = "https://example.org";
        this.isOpen = false;
        this.modalPositioning = { orientation: "vertical", left: 0, origin: "top" };
        // Handlers
        this.openDrawer = () => {
            if (this.el) {
                this.modalPositioning = calculateModalPositioning(this.el);
            }
            this.isOpen = true;
        };
    }
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
        // add font/css
        addFont("https://fonts.publicbadges.com/");
        // fetch badges
        const domainName = this.testMode ? this.testDomain : window.location.origin;
        fetch('https://api.publicbadges.com/pilot/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: `{ getAllBadges(domainName: "${domainName}", language: ${this.language}) { badgeId name description status ...on SignedPublicBadge { evidence { proofId name description } } } }` }),
        }).then(res => {
            return res.json();
        }).then(res => {
            if (res.data.getAllBadges) {
                let badges = res.data.getAllBadges.slice(0, 1);
                badges = changeEvidenceTexts(badges, domainName);
                this.badges = badges;
            }
        });
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
        if (this.el) {
            this.modalPositioning = calculateModalPositioning(this.el);
        }
    }
    // Render
    render() {
        var _a;
        if (this.badges) {
            return (h(Host, { style: { zIndex: this.isOpen ? "9999" : "1" } }, h("publicbadges-circle", { badgesCount: (_a = this.badges) === null || _a === void 0 ? void 0 : _a.length, interactive: this.isOpen ? false : true, testMode: this.testMode, onClick: this.openDrawer }), this.isOpen &&
                h("publicbadges-modal", { badges: this.badges, theme: this.modalTheme, language: this.language, positioning: this.modalPositioning })));
        }
    }
    get el() { return getElement(this); }
    static get style() { return ":host {\n  display: block;\n  position: relative;\n  width: 120px;\n  height: 120px;\n  min-width: 90px;\n  min-height: 90px;\n}\n:host * {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}"; }
};

export { PublicbadgesDrawer as publicbadges_drawer };
