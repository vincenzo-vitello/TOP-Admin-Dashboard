let projectActionsWrapper = document.querySelectorAll(".project_actions");
let project_actions = document.createElement("div");

projectActionsWrapper.forEach((element) => {
  let project_actions = `<image src="./assets/star-plus-outline.svg" />
    <image src="./assets/eye-plus-outline.svg" />
    <image src="./assets/source-branch.svg" />`;
  element.innerHTML = project_actions;
});
