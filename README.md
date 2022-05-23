# Stephen Wilson - Color Scheme Picker

## Purpose
This app is meant to be a self directed exercise in vanilla asynchronous javascript, but something simple that could still help with every day development. The objective is to get a selection of 6 colors for the user in a color scheme they specify and allow the user to copy the color to the clipboard by clicking on the colored box or corresponding hex code key.

## General Use
[Repository](https://github.com/wilso663/color-scheme)  
[Live Solution](https://wilso663.github.io/color-scheme/)

![image](/images/colors.png)

Users can
1) Select a color scheme type from the drop down menu for one of the 7 following schemes
  - Monochrome
  - Monochrome Dark
  - Monochrome Light
  - Analogic
  - Complementary
  - Analogic-Complementary
  - Triad
2) After selecting the desired color scheme, press the get scheme button to get 6 new colors of that color scheme
3) Click on any of the 6 color boxes in the grid to copy the hex code to the clipboard
4) Click on any of the 6 hex code boxes below the grid to copy the hex code to the clipboard


## Other Notes
While this app is meant for use on a desktop, it is responsive and will work on modern phone sizes and layouts. 
The API used in retrieving the colors is a public API called thecolorapi
A link to the API and documentation can be found [here](https://www.thecolorapi.com)