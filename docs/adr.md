# Architecture Decision Records

## 1. React + TypeScript only, no external libraries

The task specifies "React 18+ and TypeScript". The app uses React 19 (which satisfies
"18+") and TypeScript, with no external runtime dependencies. Data fetching, filtering,
sorting, and editing are simple enough that a state-management or data-fetching library
would add complexity without benefit.

## 2. No tests

Tests were not specified in the requirements, so none are included.

## 3. Vehicles without a price are not displayed

Requirement 1 asks to "display a list of all the vehicles that includes the make model
year and price". We interpret this as: only vehicles that have all four fields are shown.
`price: null` means the vehicle has no price, so vehicles with `price: null` (ids 1
and 4) are filtered out and, as a consequence, cannot be edited (the edit button only
exists on rendered rows). This trade-off was raised in code review and deliberately
kept: a vehicle enters the list once it has a price.

## 4. Error handling despite an always-resolving mock

`fetchVehicles` in the task never rejects, but the component still handles the error
path with a small error state. In the real world a server call can fail, and the cost of
handling it here is minimal.

## 5. TypeScript `strict` mode enabled

The scaffold shipped without `"strict": true`. It was enabled in `tsconfig.app.json`
since all feature code is new and strictness is essential for quality TypeScript.

## 6. Minimal styling with existing CSS tokens

Styling is intentionally minimal: plain CSS in `App.css` built on the design tokens
already defined in `index.css` (`--text`, `--text-h`, `--border`). No UI libraries.
