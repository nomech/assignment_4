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
              "",
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
              "",

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
        block: "modal",
        types: [
          {
            type: "Primary",
            description:
              "",
            code: `<button class="button button--primary modal__button">Click me</button>
  <div class="modal modal--hidden">
    <div class="modal__content">
      <p class="modal__text">This is a modal</p>
      <button class="button button--primary button--medium modal__button">OK</button>
    </div>
  </div>
  `,
            text: "Primary modal",
            sizes: ["medium"],
          },
        ],
      },
      {
        id: "5",
        component: "Navigation Bars",
        description: "Navigation bars are used to navigate between pages.",
        block: "navbar",
        types: [
          {
            type: "Primary",
            description:
              "",
            code: `
<nav class="nav-component nav-component--primary">
  <ul class="nav-component__list">
    <li class="nav-component__item"><a href="#" class="nav-component__link">Home</a></li>
    <li class="nav-component__item"><a href="#" class="nav-component__link">About</a></li>
    <li class="nav-component__item"><a href="#" class="nav-component__link">Contact</a></li>
  </ul>
</nav>`,
            sizes: ["medium"],
          },
        ],
      },
      {
        id: "6",
        component: "Alerts",
        description: "Alerts are used to display messages on a page.",
        block: "alert",
        types: [
          {
            type: "Primary",
            description:
              "",
            code: `
            <div class="alert alert--primary">
              <svg class="alert__icon"xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512">
                  <!--!Font Awesome Free 6.7.1 by @fontawesome - 
                  https://fontawesome.com License - 
                  https://fontawesome.com/license/free 
                  Copyright 2024 Fonticons, Inc.-->
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 
                  512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 
                  24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 
                  32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
              </svg>
              <p class="alert__text">
                Primary alert
              </p>
            </div>`,
            sizes: ["medium"],
          },
          {
            type: "Secondary",
            description:
              "",
            code: `
            <div class="alert alert--secondary">
              <svg class="alert__icon"xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512">
                  <!--!Font Awesome Free 6.7.1 by @fontawesome - 
                  https://fontawesome.com License - 
                  https://fontawesome.com/license/free 
                  Copyright 2024 Fonticons, Inc.-->
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 
                  512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 
                  24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 
                  32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
              </svg>
              <p class="alert__text">
                Secondary alert
              </p>
            </div>`,
            sizes: ["medium"],
          },
        ],
      },
      {
        id: "7",
        component: "Input",
        description:
          "Tooltips are used to display additional information on a page.",
        block: "input",
        types: [
          {
            type: "Primary",
            description:
              "",
            code: `<input class="input input--primary" type="text" placeholder="input text">`,
            sizes: ["medium"],
          },          {
            type: "Secondary",
            description:
              "",
            code: `<input class="input input--secondary" type="text" placeholder="input text">`,
            sizes: ["medium"],
          }
        ],
      },
      {
        id: "8",
        component: "Loading Spinners",
        description:
          "Loading spinners are used to indicate that a page is loading.",
        block: "spinner",
        types: [
          {
            type: "Primary",
            description:
              "The primary loading spinner is used to indicate the main loading on a page.",
            code: `
            <svg class="spinner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <!--!Font Awesome Free 6.7.0 by @fontawesome - 
              https://fontawesome.com License - 
              https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 
              -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 
              48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 
              437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 
              369.1 48 48 0 1 0 369.1 437z"/>
            </svg>`,
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
        sizes: ["small", "medium", "large"],
      },
    ],
  },
];
