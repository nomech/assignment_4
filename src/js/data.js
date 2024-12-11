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
            type: "Default",
            description: "",
            code: `<button class="button button--default">Button</button>`,
            sizes: ["large", "medium", "small"],
          },
          {
            type: "Hover",
            description:
              "Hover buttons are used to indicate that a button can be clicked.",
            code: `<button class="button button--hover">Hover</button>`,
            sizes: ["large", "medium", "small"],
          },
          {
            type: "Active",
            description:
              "Active buttons are used to indicate that a button is currently being clicked.",
            code: `<button class="button button--active" disabled>Active</button>`,
            sizes: ["large", "medium", "small"],
          },
          {
            type: "Disabled",
            description:
              "Disabled buttons are used to indicate that a button cannot be clicked.",
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
            type: "Default",
            description: "",
            code: `
<select name="dropdown" id="" class="dropdown dropdown--default">
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
          {
            type: "Hover",
            description: "",
            code: `
<select name="dropdown" id="" class="dropdown dropdown--hover">
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
          {
            type: "Active",
            description: "",
            code: `
<select name="dropdown" id="" class="dropdown dropdown--active">
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
            type: "Default",
            description: "",

            code: `<div class="card card--default" tabindex="0">
    <div class="card__title-box">
        </h2>Card title</h2>
    </div>
    <div class="card__content">
        <p>
          Card content
        </p>
    </div>
</div>`,
            sizes: ["medium", "small"],
          },
          {
            type: "Hover",
            description: "",

            code: `<div class="card card--hover">
 <div class="card__title-box">
        </h2>Card title</h2>
    </div>
    <div class="card__content">
        <p>
          Card content
        </p>
    </div>
</div>`,
            sizes: ["medium", "small"],
          },
          {
            type: "Focus",
            description: "",

            code: `<div class="card card--focus">
 <div class="card__title-box">
        </h2>Card title</h2>
    </div>
    <div class="card__content">
        <p>
          Card content
        </p>
    </div>
</div>`,
            sizes: ["medium", "small"],
          },
        ],
      },
      {
        id: "4",
        component: "Checkbox",
        description: "Modals are used to display content on a page.",
        block: "checkbox",
        types: [
          {
            type: "Default",
            description: "",
            code: `<input class="checkbox checkbox--default" type="checkbox"
                  id="checkbox" name="checkbox" checked />`,
            text: "Default checkbox",
            sizes: ["medium"],
          },
          {
            type: "Hover",
            description: "",
            code: `
              <input class="checkbox checkbox--hover" type="checkbox" class="checkbox__input" />`,
            text: "Default checkbox",
            sizes: ["medium"],
          },
          {
            type: "Checked",
            description: "",
            code: `<input class="checkbox checkbox--checked" type="checkbox" class="checkbox__input" checked />`,
            text: "Default checkbox",
            sizes: ["medium"],
          },
          {
            type: "Disabled",
            description: "",
            code: `  <input class="checkbox checkbox--disabled" type="checkbox" class="checkbox__input" disabled />`,
            text: "Default checkbox",
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
            type: "Default",
            description: "",
            code: `
<nav class="nav-component nav-component">
  <ul class="nav-component__list">
    <li class="nav-component__item nav-component__item--default">
      <a href="#" class="nav-component__link">
        Home
      </a>
    </li>
    <li class="nav-component__item nav-component__item--default">
      <a href="#" class="nav-component__link">
        About
      </a>
    </li>
    <li class="nav-component__item nav-component__item--default">
      <a href="#" class="nav-component__link">
        Contact
      </a>
    </li>
  </ul>
</nav>`,
            sizes: ["medium"],
          },
          {
            type: "Hover",
            description: "",
            code: `
<nav class="nav-component nav-component">
  <ul class="nav-component__list">
    <li class="nav-component__item nav-component__item--hover"><a href="#" class="nav-component__link">Home</a></li>
    <li class="nav-component__item"><a href="#" class="nav-component__link">About</a></li>
    <li class="nav-component__item"><a href="#" class="nav-component__link">Contact</a></li>
  </ul>
</nav>`,
            sizes: ["medium"],
          },
          {
            type: "Active",
            description: "",
            code: `
<nav class="nav-component nav-component">
  <ul class="nav-component__list">
    <li class="nav-component__item nav-component__item--active"><a href="#" class="nav-component__link">Home</a></li>
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
            type: "Default",
            description: "",
            code: `
            <div class="alert alert--default">
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
                Default alert
              </p>
            </div>`,
            sizes: ["medium"],
          },
          {
            type: "Success",
            description: "",
            code: `
            <div class="alert alert--success">
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
                Success alert
              </p>
            </div>`,
            sizes: ["medium"],
          },
          {
            type: "Error",
            description: "",
            code: `
            <div class="alert alert--error">
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
                Error alert
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
            type: "Default",
            description: "",
            code: `<input class="input input--default" type="text" placeholder="input text">`,
            sizes: ["medium"],
          },
          {
            type: "Hover",
            description: "",
            code: `<input class="input input--hover" type="text" placeholder="input text">`,
            sizes: ["medium"],
          },
          {
            type: "Focus",
            description: "",
            code: `<input class="input input--focus" type="text" placeholder="input text">`,
            sizes: ["medium"],
          },
        ],
      },
      {
        id: "8",
        component: "Badge",
        description:
          "Badges are used to display status or additional contextual information.",
        block: "badge",
        types: [
          {
            type: "Default",
            description: "The default badge for general use.",
            code: `<div class="badge badge--default">Default</div>`,
            sizes: ["medium", "small"],
          },
          {
            type: "Success",
            description:
              "The success badge indicates a successful operation or status.",
            code: `<div class="badge badge--success">Success</div>`,
            sizes: ["medium", "small"],
          },
          {
            type: "Error",
            description:
              "The error badge indicates an error or critical issue.",
            code: `<div class="badge badge--error">Error</div>`,
            sizes: ["medium", "small"],
          },
          {
            type: "Warning",
            description:
              "The warning badge indicates a potential issue or alert.",
            code: `<div class="badge badge--warning">Warning</div>`,
            sizes: ["medium", "small"],
          },
          {
            type: "Disabled",
            description:
              "The disabled badge is used for inactive or unavailable items.",
            code: `<div class="badge badge--disabled">Disabled</div>`,
            sizes: ["medium", "small"],
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
