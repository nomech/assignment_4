export const data = [
  {
    title: "Components",
    data: [
      {
        id: "1",
        component: "Buttons",
        description: "Buttons are used to trigger actions on a page.",
        block: "button",
        types: [
          {
            type: "Primary",
            description:
              "The primary button is used to indicate the main action on a page.",
            code: `<button class="button button--primary">Primary</button>`,
            sizes: ["large", "medium", "small"],
          },
          {
            type: "Secondary",
            description:
              "The secondary button is used to indicate a secondary action on a page.",
            code: `<button class="button button--secondary">Secondary</button>`,
            sizes: ["large", "medium", "small"],
          },
          {
            type: "Disabled",
            description:
              "The disabled button is used to indicate a disabled action on a page.",
            code: `<button class="button button--disabled" disabled>Disabled</button>`,
            sizes: ["large", "medium", "small"],
          },
        ],
      },
      {
        id: "2",
        component: "Dropdowns",
        description: "Dropdowns are used to display a list of options.",
        block: "dropdown",
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
            options: [
              { value: "option1", text: "Option 1" },
              { value: "option2", text: "Option 2" },
              { value: "option3", text: "Option 3" },
            ],
            sizes: ["large", "medium", "small"],
          },
        ],
      },
      {
        id: "3",
        component: "Cards",
        description: "Cards are used to display content on a page.",
        block: "card",
        types: [
          {
            type: "Primary",
            description:
              "The primary card is used to display the main content on a page.",

            code: `<div class="card card--primary">
                      <div class="card__title-box">
                        </h2>Card title</h2>
                      </div>
                      <div class="card__content">
                      <p>
                        Primary card
                      </p>
                      </div>
                    </div>`,
            sizes: ["small", "medium"],
          },
        ],
      },
      {
        id: "4",
        component: "Modals",
        description: "Modals are used to display content on a page.",
        block: "button",
        types: [
          {
            type: "Primary",
            description:
              "The primary modal is used to display the main content on a page.",
            code: `<div class="modal modal--primary">Primary modal</div>`,
            text: "Primary modal",
            sizes: ["medium"],
          },
        ],
      },
      {
        id: "5",
        component: "Navigation Bars",
        description: "Navigation bars are used to navigate between pages.",
        block: "button",
        types: [
          {
            type: "Primary",
            description:
              "The primary navigation bar is used to navigate between the main pages on a site.",
            code: `<nav class="nav nav--primary">Primary navigation bar</nav>`,
            sizes: ["small", "medium", "large"],
          },
        ],
      },
      {
        id: "6",
        component: "Alerts",
        description: "Alerts are used to display messages on a page.",
        block: "button",
        types: [
          {
            type: "Primary",
            description:
              "The primary alert is used to display the main messages on a page.",
            code: `<div class="alert alert--primary">Primary alert</div>`,
            sizes: ["small", "medium", "large"],
          },
        ],
      },
      {
        id: "7",
        component: "Tooltips",
        description:
          "Tooltips are used to display additional information on a page.",
        block: "button",
        types: [
          {
            type: "Primary",
            description:
              "The primary tooltip is used to display the main information on a page.",
            code: `<div class="tooltip tooltip--primary">Primary tooltip</div>`,
            sizes: ["small", "medium", "large"],
          },
        ],
      },
      {
        id: "8",
        component: "Loading Spinners",
        description:
          "Loading spinners are used to indicate that a page is loading.",
        block: "button",
        types: [
          {
            type: "Primary",
            description:
              "The primary loading spinner is used to indicate the main loading on a page.",
            code: `<svg class="spinner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--!Font Awesome Free 6.7.0 by @fontawesome - 
            https://fontawesome.com License - 
            https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 
            -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 
            -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 
            437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/>
            </svg>`,
            sizes: ["medium"],
          },
        ],
      },
      {
        id: "9",
        component: "Progress Bars",
        description:
          "Progress bars are used to display the progress of an action.",
        block: "button",
        element: "progress",
        types: [
          {
            type: "Primary",
            description:
              "The primary progress bar is used to display the main progress on a page.",
            code: `<div class="progress progress--primary">Primary progress bar</div>`,
            sizes: ["small", "medium", "large"],
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
