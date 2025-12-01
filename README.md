# 📦 Apii-Shapr - A Request & Response normalizing utility

A lightweight utility for **mapping, shaping, and normalizing request and response payloads** in Node.js/TypeScript applications.

It provides:

- `mapper` – Generic object mapping and transformation
- `requestMapper` – Normalize and sanitize incoming requests
- `responseMapperHelper` – Shape and standardize outgoing responses

---

## ⚡ Installation

```bash
# Assuming you have a module setup
npm install apii-shapr
```

## Usage

### Response

```js
const rawPayload = {
  id: 101,
  fullName: "  Alice Johnson ",
  active_flag: 1
};

const normalized = mapper(rawPayload, {
  id: (x) => String(x.id),
  name: (x) => x.fullName.trim(),
  isActive: (x) => Boolean(x.active_flag)
});

console.log(normalized);
// Output: { id: "101", name: "Alice Johnson", isActive: true }
```

### Request

```js
const reqBody = {
  email: " USER@Example.com ",
  page: "5",
  extraField: "ignore me"
};

const cleanRequest = requestMapper(reqBody, {
  email: (x) => x.email.trim().toLowerCase(),
  page: (x) => Number(x.page) || 1
});

console.log(cleanRequest);
// Output: { email: "user@example.com", page: 5 }
```

## Examples

```js
function handleRequest(rawInput) {
  // 1️⃣ Sanitize input
  const normalizedRequest = requestMapper(rawInput, {
    email: (x) => x.email.trim().toLowerCase(),
    age: (x) => Number(x.age) || null
  });

  // 2️⃣ Business logic (simulate)
  const user = {
    userId: 42,
    name: "Alice",
    active: true
  };

  // 3️⃣ Shape output
  const response = responseMapperHelper(user, {
    id: (x) => x.userId,
    displayName: (x) => x.name,
    isActive: (x) => x.active
  });

  return response;
}
```

### Response Mapper

```js
import { mapper } from 'apii-shapr';
import {getDateMonthYear} from "utils"

const map = {
  displayName: 'display_name',
  balanceValue: 'balance_value',
  expiryDate: 'expiry_date',
  originalLabel: 'original_label',
  balanceDetails: {
    id: 'balance_details',
    getValue: () => ({
      balanceValue: 'value',
      expiryDate: 'expiry_date',
      originalLabel: 'original_label',
      unit: 'unit',
      dateTime: {
        id: 'expiry_date',
        refine: true,
        getValue: (value: any) => {
          const date = getDateMonthYear(value).date;
          return `${date.date}/${date.month}/${date.year} - ${date.hours}:${
            date.minutes < 10 ? `0${date.minutes}` : date.minutes
          } ${date.timeOfDay}`;
        },
      },
    }),
  },
  type: 'type',
  unit: 'unit',
};

const AppBalances = {
  response: (res: any) => {
    console.log('Raw response:', res);
    const mapped = mapper(res, map);
    console.log('Mapped response:', mapped);
    return mapped;
  },
};

export default AppBalances;
```

### Response Mapper 

```js

import config from './config'

export const getCustomerBalances = () => {

  const {api} = config;


  return async () => {

    try {
      const response: any = await api.balances.get('usage');
     
      if (response?.error) {
        return console.log("The error response",error)
      }
     
    
      let customerBalances = AppBalancesModel.response(response.payload?.data); // Normalize response data

      console.log("Normalized Balances",customerBalances)
    
    } catch (error) {
      console.log("Error fetching data",error)
    }
  };
};

```

# Questions & Support

For questions and support please use apii-shaprjs's Suppport page on [Github repo](https://github.com/ntsakosurprise/apii-shapr/development/SUPPORT.md).

# Issues

Please make sure to read the [Issue](https://github.com/ntsakosurprise/apii-shapr/development/ISSUES.md) Reporting Checklist before opening an issue. Issues not conforming to the guidelines may be closed immediately.

# Changelog

Detailed changes for each release are documented in our [Changelog](https://github.com/ntsakosurprise/apii-shapr/development//CHANGELOG.md).

# Release Notes

A summary of release changes can be found in our [Release Notes](https://github.com/ntsakosurprise/apii-shapr/development//RELEASE_NOTES.md).

# Stay In Touch

[Twitter @ntsakosurprise](https://twitter.com/ntsakosurprise).

# Contribution

Please make sure to read the [Contributing Guide](https://github.com/ntsakosurprise/apii-shapr/development/CONTRIBUTING.md) before making a pull request. If you have an apii-shapr plugin, add it with a pull request.

# Licence

[MIT](https://.github.com/) - see the [LICENSE](https://github.com/ntsakosurprise/apii-shapr/development/LICENSE.md) file for details.

copyright (c) 2018-present. Ntsako (Surprise) Mashele




