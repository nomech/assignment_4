export const data = [
  {
    title: "Components",
    components: [
      {
        component: "Buttons",
        types: [
          {
            type: "Primary",
            description:
              "The primary button is used to indicate the main action on a page.",
            code: `<button class="button button--primary">Primary</button>`,
            size: ["Small", "Medium", "Large"],
          },
          {
            type: "Secondary",
            description:
              "The secondary button is used to indicate a secondary action on a page.",
            code: `<button class="button button--secondary">Secondary</button>`,
          },
          {
            type: "Tertiary",
            description:
              "The tertiary button is used to indicate a tertiary action on a page.",
            code: `<button class="button button--tertiary">Tertiary</button>`,
          },
          {
            type: "Disabled",
            description:
              "The disabled button is used to indicate a disabled action on a page.",
            code: `<button class="button button--disabled" disabled>Disabled</button>`,
          },
        ],
      },
      {
        component: "Inputs",
        types: [
          {
            type: "Text",
            description: "The text input is used to collect text data.",
            code: `<input type="text" class="input input--text" placeholder="Text input">`,
          },
          {
            type: "Email",
            description: "The email input is used to collect email data.",
            code: `<input type="email" class="input input--email" placeholder="Email input">`,
          },
          {
            type: "Password",
            description: "The password input is used to collect password data.",
            code: `<input type="password" class="input input--password" placeholder="Password input">`,
          },
          {
            type: "Checkbox",
            description: "The checkbox input is used to collect boolean data.",
            code: `<input type="checkbox" class="input input--checkbox">`,
          },
        ],
      },
      {
        component: "Cards",
        types: [
          {
            type: "Primary",
            description:
              "The primary card is used to display the main content on a page.",
            code: `<div class="card card--primary">Primary card</div>`,
          },
          {
            type: "Secondary",
            description:
              "The secondary card is used to display secondary content on a page.",
            code: `<div class="card card--secondary">Secondary card</div>`,
          },
        ],
      },
      {
        component: "Modals",
        types: [
          {
            type: "Primary",
            description:
              "The primary modal is used to display the main content on a page.",
            code: `<div class="modal modal--primary">Primary modal</div>`,
          },
          {
            type: "Secondary",
            description:
              "The secondary modal is used to display secondary content on a page.",
            code: `<div class="modal modal--secondary">Secondary modal</div>`,
          },
        ],
      },
    ],
  },
];
