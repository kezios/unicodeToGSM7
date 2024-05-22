# unicodeToGSM7

Typescript unicode string to GSM7 string conversion for SMS messaging

## Installation

```bash
yarn add unicodeToGSM7
```

## Usage

```typescript
import { unicodeToGSM7 } from 'unicodeToGSM7';

const unicodeString = 'Hello, World!';

const gsm7StringWithExtended = unicodeToGSM7(unicodeString);
const gsm7StringWithoutExtended = unicodeToGSM7(unicodeString, false);
```


## Contributors

Special thanks to :
    - @Wissotsky for writing [py-smsify](https://github.com/Wissotsky/py-smsify)
    - @jasonsturges for writing this package template (vite-typescript-npm-package)[https://github.com/jasonsturges/vite-typescript-npm-package]

## License

[https://www.apache.org/licenses/LICENSE-2.0](https://www.apache.org/licenses/LICENSE-2.0).