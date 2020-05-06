# Expo Android bug with video sound

**Note: it's the latest expo v37 project ejected 06.05.2020. Check the commits to understand what has been done.**

Steps to reproduce:

1. `yarn start`
2. Run the project in Android Studio on emulator
3. The first video won't appear, the second video will play with no sound (it won't work on a real device either)

If you'll open this video on iOS or in browser, it will play sound.

**Update:** Added react-native-video, doesn't show up at all. Tested this on another Expo project - it worked
