export const data = [
  {
    title: "Components",
    data: [
      {
        id: "1",
        component: "Buttons",
        description: "Buttons are used to trigger actions on a page.",
        types: [
          {
            type: "Primary",
            description:
              "The primary button is used to indicate the main action on a page.",
            code: `<button class="button button--primary">Primary</button>`,
            tag: "button",
            class: "button--primary",
            text: "Primary",
            size: ["small", "medium", "large"],
          },
          {
            type: "Secondary",
            description:
              "The secondary button is used to indicate a secondary action on a page.",
            code: `<button class="button button--secondary">Secondary</button>`,
            tag: "button",
            class: "button--secondary",
            text: "Secondary",
            size: ["small", "medium", "large"],
          },
          {
            type: "Disabled",
            description:
              "The disabled button is used to indicate a disabled action on a page.",
            code: `<button class="button button--disabled" disabled>Disabled</button>`,
            tag: "button",
            class: "button--disabled",
            text: "Disabled",
            size: ["small", "medium", "large"],
          },
        ],
      },
      {
        id: "2",
        component: "Dropdowns",
        description: "Dropdowns are used to display a list of options.",
        types: [
          {
            type: "Primary",
            description:
              "The primary dropdown is used to display the main options on a page.",
            code: `
<select name="dropdown" id="" class="dropdown dropdown--primary">
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
                  `,
            tag: "select",
            class: "dropdown--primary",
            text: "Dropdown",
            options: [
              { value: "option1", text: "Option 1" },
              { value: "option2", text: "Option 2" },
              { value: "option3", text: "Option 3" },
            ],
            size: ["small", "medium", "large"],
          },
        ],
      },
      {
        id: "3",
        component: "Cards",
        description: "Cards are used to display content on a page.",
        types: [
          {
            type: "Primary",
            description:
              "The primary card is used to display the main content on a page.",
            code: `<div class="card card--primary">Primary card</div>`,
            tag: "div",
            class: "card--primary",
            text: "Primary card",
            size: ["small", "medium", "large"],
          }
        ],
      },
      {
        id: "4",
        component: "Modals",
        description: "Modals are used to display content on a page.",
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
      {
        id: "5",
        component: "Navigation Bars",
        description: "Navigation bars are used to navigate between pages.",
        types: [
          {
            type: "Primary",
            description:
              "The primary navigation bar is used to navigate between the main pages on a site.",
            code: `<nav class="nav nav--primary">Primary navigation bar</nav>`,
          },
        ],
      },
      {
        id: "6",
        component: "Alerts",
        description: "Alerts are used to display messages on a page.",
        types: [
          {
            type: "Primary",
            description:
              "The primary alert is used to display the main messages on a page.",
            code: `<div class="alert alert--primary">Primary alert</div>`,
          },
        ],
      },
      {
        id: "7",
        component: "Tooltips",
        description:
          "Tooltips are used to display additional information on a page.",
        types: [
          {
            type: "Primary",
            description:
              "The primary tooltip is used to display the main information on a page.",
            code: `<div class="tooltip tooltip--primary">Primary tooltip</div>`,
          },
        ],
      },
      {
        id: "8",
        component: "Loading Spinners",
        description:
          "Loading spinners are used to indicate that a page is loading.",
        types: [
          {
            type: "Primary",
            description:
              "The primary loading spinner is used to indicate the main loading on a page.",
            code: `<div class="loading-spinner loading-spinner--primary">Primary loading spinner</div>`,
          },
        ],
      },
      {
        id: "9",
        component: "Progress Bars",
        description:
          "Progress bars are used to display the progress of an action.",
        types: [
          {
            type: "Primary",
            description:
              "The primary progress bar is used to display the main progress on a page.",
            code: `<div class="progress progress--primary">Primary progress bar</div>`,
          },
        ],
      },
    ],
  },
  {
    title: "Layouts",
    data: [
      {
        id: "5",
        component: "Placeholder",
        description: "Placeholder description",
        types: [],
        size: ["Small", "Medium", "Large"],
      },
    ],
  },
];
