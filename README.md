# MyMICDS-Mobile
Mobile app for MyMICDS

## Initial Setup
In order to work with the Ionic platform, you must first install Cordova and Ionic. Type this into the command line:
```
$ npm install -g cordova ionic
```

## Testing

### Test on the Web
You can test MyMICDS Mobile using your web browser. To do this, type in:
```
$ ionic serve
```

### Test on Android Emulator
To test MyMICDS Mobile on an Android emulator, you must [install the Android SDK from here](https://developer.android.com/studio/index.html). I haven't gotten the emulator to work, but this is how you _would_ test it:
```
$ ionic platform add android
$ ionic build android
$ ionic emulate android
```

### Test on iOS Emulator
**In order to test on an iOS Emulator, you must be running a Mac.** Once synced and on a Mac, type the following:
```
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios
```

### Test on an actual iOS/Android Device
You can test MyMICDS Mobile on an actually iOS or Android device **without pushing it to the Apple/Android Store** by using Ionic View. It's an app you can download and test applications you've been invited to. Create an Ionic Platform account on [ionic.io](https://ionic.io) and contact Michael in order to use this feature.