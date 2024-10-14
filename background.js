/**
 * Sets up context menu items when the extension is installed.
 * These menu items allow the user to clear saved data, navigate to a GitHub page, or view the creator's profile.
 */
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "clearData",
    title: "Clear All Saved Data",
    contexts: ["action"],
  });

  chrome.contextMenus.create({
    id: "navigateGitHub",
    title: "How to use?",
    contexts: ["action"],
  });

  chrome.contextMenus.create({
    id: "creator",
    title: "Goto Developer Profile",
    contexts: ["action"],
  });
});

/**
 * Handles clicks on context menu items by performing actions such as clearing saved data
 * or opening specific URLs.
 *
 * @param {chrome.contextMenus.OnClickData} info - Information about the context menu click event.
 */
chrome.contextMenus.onClicked.addListener((info) => {
  switch (info.menuItemId) {
    case "clearData":
      chrome.storage.local.clear(() => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError);
        } else {
          console.log("All saved data cleared.");
        }
      });
      break;

    case "navigateGitHub":
      chrome.tabs.create({
        url: "https://github.com/atj393/promt-save-reuse-chatgpt-and-gemini/wiki/Prompt-Save-Reuse:-ChatGPT-&-Gemini-%E2%80%90-User-Guide",
      });
      break;

    case "creator":
      chrome.tabs.create({
        url: "https://www.linkedin.com/in/atj393/",
      });
      break;

    default:
      console.warn("Unhandled menu item:", info.menuItemId);
  }
});
