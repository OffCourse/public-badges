import { p as patchBrowser, b as bootstrapLazy } from './index-a4a9eca1.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["publicbadges-circle",[[0,"publicbadges-circle",{"badgesCount":[2,"badges-count"],"interactive":[4],"testMode":[4,"test-mode"]}]]],["publicbadges-modal",[[0,"publicbadges-modal",{"badges":[16],"theme":[1],"language":[1],"positioning":[16],"openBadge":[32]}]]],["publicbadges-drawer",[[1,"publicbadges-drawer",{"badgeColor":[1,"badge-color"],"modalTheme":[1,"modal-theme"],"language":[1],"testMode":[4,"test-mode"],"testDomain":[1,"test-domain"],"badges":[32],"isOpen":[32],"modalPositioning":[32]},[[8,"keydown","handleKeyDown"],[0,"closeDrawer","closeDrawer"],[9,"resize","handleWindowResize"]]]]]], options);
});
