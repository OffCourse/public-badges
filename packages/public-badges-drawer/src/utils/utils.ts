import { ApprovedPublicBadge } from "../types";
import { ModalPositioning } from "../interfaces"


export function calculateModalPositioning(element: HTMLElement) {
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
  const elementTop: number = element ? element.getBoundingClientRect().top : 0;

  const top: number = docScrollTop + elementTop;
  const left: number = element ? element.getBoundingClientRect().left : 0;

  const width: number = element ? element.offsetWidth : 0;
  const height: number = element ? element.offsetHeight : 0;

  const spaceBottom = docHeight - (top + height);
  const spaceRight  = docWidth - (left + width);

  const obj: ModalPositioning = {
    orientation: docWidth < 980 ? "vertical" : "horizontal",
    left: Math.min(0, spaceRight + width - (docWidth < 980 ? (docWidth < 360 ? 320 : 350) : 830)),
    origin: top > spaceBottom ? "bottom" : "top"
  }

  return obj;
}


export function addFont(url: String) {
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
export function changeEvidenceTexts(badges: ApprovedPublicBadge[], domainName: String = "") {
  if(domainName === "https://vpro.nl") {
    badges.forEach(badge => {
      badge.evidence.forEach(evidence => {
        evidence.description = evidence.description.replace(/Vpro/g, 'VPRO');
      })
    });
  }

  return badges;
}



