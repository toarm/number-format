# number-format
A simple ultra lightweight VanillaJS Webcomponent to display numbers including currencies.

* **No dependencies**
* **1.87 kb Source Code**
* **800 Bytes zipped**

## Usage 
See the [demo.html](https://toarm.github.io/number-format/demo.html) for the results.

### Default - Browser Locale
```html
<number-format number="5.2136"></number-format>
```
`Result depends on your Browser Locale. Please see `[demo.html](https://toarm.github.io/number-format/demo.html)

### British Currency Style
```html
<number-format number="5.2136" locale="en-GB" currency="GBP"></number-format>
```
`£5.21`

### German Style - Using ,
```html
<number-format number="5.2136" locale="de-DE"></number-format>
```
`5,21`

### German Currency Style
```html
<number-format number="5.2136" locale="de-DE" currency="EUR"></number-format>
```
`5,21 €`

### 4 Digits
```html
<number-format number="5.2136" min-digits="4" max-digits="4"></number-format>
```
`Result depends on your Browser Locale. Please see `[demo.html](https://toarm.github.io/number-format/demo.html)
