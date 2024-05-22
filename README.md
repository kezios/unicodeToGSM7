# unicodeToGSM7
## Typescript unicode string to GSM7 string conversion for SMS messaging


### Usage
```typescript
import { unicodeToGSM7 } from 'unicodeToGSM7';

const unicodeString = 'Hello, World!';

const gsm7StringWithExtended = unicodeToGSM7(unicodeString);
const gsm7StringWithoutExtended = unicodeToGSM7(unicodeString, false);
```