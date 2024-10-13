# js-parcel-react-antd

Project structure

```
/js-parcel-react-antd
├── src 
│  ├── App.js 
│  ├── index.html 
│  └── index.js
├── styles 
│  ├── App.less 
│  └── theme-overrides.less
├── .gitignore 
├── package-lock.json 
├── package.json 
└── Readme.md
```

`src/App.js`
```js
import "../styles/App.less";

import { Button as AntButton } from 'antd';

export function App() {
    return (
        <div className="landing-main-text">
            <h1>Welcome to Labs Basic SPA</h1>
            <div className="landing-main-text">
                <p>
                This is an example of how we&apos;d like for you to use <span>antd</span>.
                </p>

                <AntButton type="primary">Primary Button</AntButton>

            </div>
        </div>
    );
  }
```

`src/index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My Parcel App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="index.js"></script>
  </body>
</html>
```

`src/index.js`
```js
import { createRoot } from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);
```

`styles/App.less`
```less
@import "./theme-overrides";

h1 {
    //color: red;
    color: @primary-color;
}

h2 {
    color: red;
}

.landing-main-title {
    font-family: @text__font-family, @text__font-family--header;
  }
  
.landing-main-text {
  margin: 5% 0;
  text-align: center;
  font-family: @text__font-family--header;
  font-size: 1.25rem;
}
  
  /* Example usage of primary color */
  span {
    color: @primary-color;
    font-size: 2.25rem;
  }
```

`styles/theme-overrides.less`
```less
// General
@primary-color: #ff1856;
@link-color: #1890ff;
@success-color: #52c41a;
@warning-color: #faad14;
@error-color: #f5222d;
// Text
@font-size-base: 14px;
@heading-color: rgba(0, 0, 0, 0.85);
@text-color: rgba(0, 0, 0, 0.65);
@text-color-secondary: rgba(0, 0, 0, 0.45);
// Border
@border-radius-base: 2px;
@border-color-base: #d9d9d9;
// Effect
@disabled-color: rgba(0, 0, 0, 0.25);
// Shadow
@box-shadow-base:
        0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
// Backgrounds
@header__bg: #FEAD2A;
@header__bg--dark: #263E47;
@footer__bg: #6A0C49;
@body__bg: #EEEDD9;
@body__bg--green: #9FB222;
@body__bg--blue: #096A70;
@body__bg--peach: #FCDFAA;
@body__bg--concrete: #F2F2F2;
@body__bg--white: #FAF9F8;
@body__bg--yellow: #F2CE60;
@badge-card__bg--white:  #EDEED7;
@classroom__feedback__bg--clay: #8D8950;
@il__bg--Allsports: #1E6A70;
@il__bottom__leftCircle--cream-can: #F2C35F;
@il__top__bottomContent--white: #FFFFFF;
@iac__section__bg--snow: #FBFBFB;
@badge-capital__bg--pattens-blue: #DAF4FF;
@instuctor-calendar-style__bg--blue-lagoon: #006C72;
@instructor-calendar-style__bg--white: #FFFFFF;
@instructor-calendar-style__bg--white-smoke: #F2F2F2;
@stat-icon-wrapper__bg--varden: #FBECD1;
@landing-container__bg--blue-stone: #156A70;
@news__bg--white: #FFFFFF;
@pl_na__bg--tarawera: #263E47;
@parent-navbar__bg--white: #FFFFFF;
@student-db__bg--teal: #008080;
@teacher-db__bg--purple: 800080;
@student-story-card__bg--white: #FFFFFF;
@student-styles__bg--light-cyan: #E0FFFF;
@calendar__bg--cream-can: #F1C461;
@success-class-event__bg--robins-egg-blue: rgba(0, 202, 183, 0.25);
@warning-class-event__bg--dark-tangerine: #FAAD14;
@error-class-event__bg--salmon: #FA8072;
@ant-picker__bg--varden: #FBECD1;
@ant-menu__bg--supernova: #FEAE28;
@header__bg--light-sea-green: #21C5B5;
@header__bg--white: #FFFFFF;
@login__bg--blue-lagoon: #006C72;
@login__bg--dew: #F4F8F5;
@login__bg--white: #FFFFFF;
@reg-content__bg--white: #FFFFFF;
@reg-content__bg--blue-lagoon: #006C72;
@reg-conent__bg--dew: #F4F8F5;
@registration-progress__bg--light-sea-green: #21C5b5;
@registration-progress__bg--white: #FFFFFF;
// Buttons
@btn__bg--blue: #21C5B5;
@btn__bg--white: #EEEDD9;
@btn__bg--red: #EC2C4E;
@btn__bg--maroon: #6A0C49;
@btn__bg--yellow: #F2CE60;
@btn__bg--orange: #F66721;
@btn__bg__hover--golden-poppy: #FDC312;
@btn__bg__peach: #FCDFAA;
@insturctor-calendar-style__btn__bg--turquoise: #34D4C5;
@btn__bg--safety-orange: #F26602;
@landing__btn__bg--sunglow: #FBC740;
@navbar__btn__bg--white: #EDEED7;
@navbar__btn__bg--blue-lagoon: #006C72;
@news__btn__bg--licorice: #2E3646;
@news__btn__bg--black: #000000;
@pl__na__top__btn__bg--amaranth: #DF294A;
@pl__na__top_-btn_-bg--tyrian-purple: #5D0B40;
@login__btn__bg--blue-lagoon: #006C72;
@reg-content__btn__bg--blue-lagoon: #006C72;
// Borders
@btn__border-radius: 6px;
// Fonts
@text__font-family: 'Montserrat', sans-serif;
@text__font-family--header: 'Staatliches', cursive;

@text__font-size--h1: 2.375rem;
@text__font-size--h2: 1.875rem;
@text__font-size--h3: 1.5rem;
@text__font-size--h4: 1.25rem;
@text__font-size--h5: 1rem;
@text__font-size--body: 0.875rem;
@text__font-size--footer: 0.75rem;

@text__line-height--h1: 2.875rem;
@text__line-height--h2: 2.5rem;
@text__line-height--h3: 2rem;
@text__line-height--h4: 1.75rem;
@text__line-height--h5: 1.5rem;
@text__line-height--body: 1.375rem;
@text__line-height--footer: 1;
```

```package.json```
```json
{
"scripts": {
  "start": "parcel src/index.html",
  "build": "parcel build src/index.html"
  },
  "devDependencies": {
    "@parcel/transformer-less": "^2.12.0",
    "parcel": "^2.12.0",
    "process": "^0.11.10"
  },
  "dependencies": {
    "antd": "^5.20.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```
