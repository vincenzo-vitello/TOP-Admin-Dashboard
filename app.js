let projectActionsWrapper = document.querySelectorAll(".project_actions");
const themeToggler = document.getElementById("theme_toggler");
const body = document.querySelector("body");
const notificationBell = document.getElementById("notification_bell");
const searchIcon = document.getElementById("search_icon");
projectActionsWrapper.forEach((element) => {
  let project_actions = `
    <image src="./assets/star-plus-outline.svg" />
    <image src="./assets/eye-plus-outline.svg" />
    <image src="./assets/source-branch.svg" />
  `;
  element.innerHTML = project_actions;
});

themeToggler.onclick = () => {
  const currentTheme = body.getAttribute("data-theme");

  if (currentTheme === "dark") {
    body.setAttribute("data-theme", "light");
    themeToggler.setAttribute("src", "./assets/light-mode.svg");
    notificationBell.setAttribute("src", "./assets/notifications.svg");
    searchIcon.setAttribute("src", "./assets/search.svg");
    projectActionsWrapper.forEach((element) => {
      let project_actions = `
        <image src="./assets/star-plus-outline.svg" />
        <image src="./assets/eye-plus-outline.svg" />
        <image src="./assets/source-branch.svg" />
      `;
      element.innerHTML = project_actions;
    });
  } else {
    body.setAttribute("data-theme", "dark");
    themeToggler.setAttribute("src", "./assets/dark-mode.svg");
    notificationBell.setAttribute("src", "./assets/notification-dark-mode.svg");
    searchIcon.setAttribute("src", "./assets/search-dark.svg");
    projectActionsWrapper.forEach((element) => {
      let project_actions = `
        <image src="./assets/star-plus-outline-dark.svg" />
        <image src="./assets/eye-plus-outline-dark.svg" />
        <image src="./assets/source-branch-dark.svg" />
      `;
      element.innerHTML = project_actions;
    });
  }
};
