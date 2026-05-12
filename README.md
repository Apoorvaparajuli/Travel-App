# Travel App 🌍
A multi-language travel application built with React Native CLI for CSE3MAD Assessment 3 at La Trobe University.

## About This Project
This app helps users discover and book travel destinations across Nepal and India.
It was built using React Native CLI (not Expo) with TypeScript.

## New Features (Assessment 3)
### 🌐 Translation System
- Switches the entire app between English, Nepali and Hindi
- Uses the **i18next** and **react-i18next** NPM packages
- All 4 screens are fully translated

### 💾 Language Memory
- Remembers the user's chosen language between sessions
- Uses **@react-native-async-storage/async-storage**
- Language is restored automatically when the app reopens

## Screens
| Screen | Description |
|--------|-------------|
| 🏠 Home | Search destinations + language switcher |
| 🔭 Explore | Filter by mountains, beaches, cities |
| 📋 Booking | Select travelers, nights, confirm booking |
| 👤 Profile | User profile + language settings |

## Tech Stack
- React Native CLI 0.85.3
- TypeScript
- i18next + react-i18next
- @react-native-async-storage
- react-native-safe-area-context

## Installation
```bash
# Install dependencies
npm install

# Run on Android
npx react-native run-android
```

## Third-Party Libraries Acknowledged
| Library | Licence | Link |
|---------|---------|------|
| i18next | MIT | [github.com/i18next/i18next](https://github.com/i18next/i18next) |
| react-i18next | MIT | [github.com/i18next/react-i18next](https://github.com/i18next/react-i18next) |
| @react-native-async-storage | MIT | [github.com/react-native-async-storage](https://github.com/react-native-async-storage/async-storage) |
| react-native-safe-area-context | MIT | [github.com/th3rdwave/react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) |

## Author
**Apoorva** — CSE3MAD — La Trobe University — 2025
