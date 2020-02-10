# Backwhite

Simple sophisticated styling for blogs and other content-based sites.

_Desktop View_

![Desktop View](./doc-images/desktop.png)

_Mobile Page_

![Mobile Page View](./doc-images/mobile-page.png)

_Mobile Menu_

![Mobile Menu View](./doc-images/mobile-menu.png)

## Installation

Just type `npm install backwhite --save` in your node project

## Usage

### Back and Front Panels

The core of this design is the back panel (appearing on the right on desktop, and appearing behind on mobile), and the front panel.

These panels are created with `<div class='bw-back'>` and `<div class='bw-front>` respectively.

```html
<body>
    <div class='bw-back'>
        <p>Back (menu)</p>
    </div>
    <div class='bw-front'>
        <p>Front (content)</p>
    </div>
</body>
```

![Back Front Panels](./doc-images/back-front-panels.png)

Wrap all the content in these panels with their appropriate containers to provide spacing.

```html
<body>
    <div class='bw-back'>
        <div class='bw-back-container'>
            <p>Back (menu)</p>
        </div>
    </div>
    <div class='bw-front'>
        <div class='bw-front-container'>
            <p>Front (content)</p>
        </div>
    </div>
</body>
```

![Back Front Containers](./doc-images/back-front-containers.png)

### Headers

Both the back and the front panel in the example have headers at the top. Headers have a title and a series of actions (usually icon buttons).

Backwhite comes with fontawesome solid and brand icons. Use them just like you would in any other app.

This is an example of a header in the front panel.

```html
<div class='bw-header'>
    <h1 class='bw-title'>Example Header</h1>
    <button class='bw-action'>
        <span class='fas fa-check'></span>
    </button>
    <button class="bw-action">
        <span class="fas fa-times"></span>
    </button>
</div>
```

![Front Header](./doc-images/front-header.png)

This is an example of a header in the back panel.

```html
<div class='bw-header'>
    <button class="bw-action">
        <span class="fas fa-times"></span>
    </button>
    <button class='bw-action'>
        <span class='fas fa-check'></span>
    </button>
    <h1 class='bw-title'>Example Header</h1>
</div>
```

![Back Header](./doc-images/back-header.png)

_More content will be added below soon_

### Controlling Mobile Sliding

The front and back usually start with main headers. These are what will contain the buttons controlling the sliding on mobile. The front panel header would usually contain the title of the page. The back panel header would contain the title of the site. On each of these there would be one button which handles opening and closing.

```html
<body>
    <div class="bw-back">
        <div class="bw-back-container">
            <div class='bw-header'>
                <button class="bw-action bw-show-on-mobile bw-close">
                    <span class="fas fa-chevron-left"></span>
                </button>
                <h1 class='bw-title'>Example Header</h1>
            </div>
        </div>
    </div>
    <div class="bw-front">
        <div class="bw-front-container">
            <div class='bw-header'>
                <h1 class='bw-title'>Example Header</h1>
                <button class="bw-action bw-show-on-mobile bw-open">
                    <span class="fas fa-chevron-right"></span>
                </button>
            </div>
        </div>
    </div>
</body>
```

_Desktop_

![Header Desktop](./doc-images/header-desktop.png)

_Mobile Page_

![Header Mobile Page](./doc-images/header-mobile-page.png)

_Mobile Menu_

![Header Mobile Menu](./doc-images/header-mobile-menu.png)

`.bw-show-on-mobile` will hide the button on desktop and show it on mobile. `.bw-open` and `.bw-close` are preprogrammed classes which trigger the opening and closing of the menu respectively when clicked. Font awesone's chevron icons are being used here.

### Back Menu Links

### Back Menu Footer

### Responsive Tables

### Cutouts

### Buttons

### Forms

#### Block Forms

#### Cutout Forms

#### Inline Forms

### Customization

#### Colors

#### Spacing

#### Font Scales

#### Controlling Responsiveness