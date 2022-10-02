# Dark-Mode Theme

Dark-Mode theme using localStorage and CSS Variables.

### Initialization

Tabs are divided into 2 main sections - `Tabs Nav` and `Tabs Panels`.

Create the CSS Variables

```css
:root {
  --bg: #ffffff;
  --text-color: #141414;
}

body {
  max-width: 600px;
  margin: 3rem auto;
  background-color: var(--bg);
  color: var(--text-color);
}

body.dark-mode {
  --bg: #141414;
  --text-color: #eeeeee;
}
```

Use id to target the theme toggle button.

```javascript
toggleTheme('#toggle-theme');
```

---

### Browser Compatibility

Tested in the following browsers/versions:

- Google Chrome 104.0.5112
- Firefox 105.0b4
- Safari 15.6.1