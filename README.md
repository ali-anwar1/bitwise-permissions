# File Permissions System (Bitmask Explanation)

## Overview

This project demonstrates a simple permission system using **bitmasks** in JavaScript.

Each permission is represented by a unique power of two.  
This allows combining permissions using bitwise OR (`|`) and checking them using bitwise AND (`&`).

---

## Permission Structure

Each permission must occupy a unique bit position.

| Permission | Binary | Decimal |
|------------|--------|----------|
| Create     | 1000   | 8        |
| Read       | 0100   | 4        |
| Update     | 0010   | 2        |
| Delete     | 0001   | 1        |

```js
const createPermission = 8;   // 1000
const readPermission = 4;     // 0100
const updatePermission = 2;   // 0010
const deletePermission = 1;   // 0001

## For testing
run

```
node index.js
``` 

