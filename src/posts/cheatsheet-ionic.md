---
title: 'Cheatsheet - Ionic'
date: 2022-11-20
tags:
  - cheatsheet
---

## Icon and Splash Screen

https://capacitorjs.com/docs/guides/splash-screens-and-icons

```
npm install -g cordova-res
```

Put `icon.png` and `splash.png` in resources folder.

```
cordova-res ios --skip-config --copy
cordova-res android --skip-config --copy
```

## Deploy on iOS

```
ionic build

# if first time
ionic cap add ios

ionic cap copy

ionic cap sync
```

In MacOS:

```
# to open in XCode
ionic cap open ios
```

Select simulated device and press the play button.

If ready to publish, select 'any iOS device'. Then click 'Product > Archive'.

https://ionicframework.com/docs/vue/your-first-app/deploying-mobile
