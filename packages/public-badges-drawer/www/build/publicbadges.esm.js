import { p as patchBrowser, b as bootstrapLazy } from './index-a4a9eca1.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["publicbadges-circle",[[0,"publicbadges-circle",{"badgesCount":[2,"badges-count"],"interactive":[4],"testMode":[4,"test-mode"]}]]],["publicbadges-modal",[[0,"publicbadges-modal",{"theme":[1],"mode":[1],"left":[2],"origin":[1],"badges":[16],"openBadge":[32]}]]],["publicbadges-drawer",[[1,"publicbadges-drawer",{"badgeColor":[1,"badge-color"],"modalTheme":[1,"modal-theme"],"testMode":[4,"test-mode"],"isOpen":[32],"modalOrientation":[32],"modalLeft":[32],"modalOrigin":[32],"badges":[32]},[[8,"keydown","handleKeyDown"],[0,"closeDrawer","closeDrawer"],[9,"resize","handleWindowResize"]]]]]], options);
});
