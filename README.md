### Installing and Running
`npm i && npm start`

### Notes
- Bootstrapped with create-react-app to save a little time.
- The commit history is obviously a good place to check out.
- This incorporates:
  - Async state management with redux + redux-saga and setup with redux dev tools.
  - enzyme + snapshot testing.
  - Demonstration of my React/state managment testing in `./src/components/FilterForm/*` and `./src/state/hotels/*` respectively.
  - A script for test data generation (run using `npm run generate:data`).
  - Access of the test data via simple ajax client rather than just statically embedding.
  - The full action > async data call > state update > render, process.
  - eslint (run using `npm run lint`).
  - Of course the React components to display the data.
  - A much simplified project structure similar to what I'd use in prodcution,
- If I had more time:
  - Obviously the UI is godawful so I'd love to pretty that up.
  - Comprehensive unit tests for everything.
  - The latest React with hooks.
  - Far better UI around the hotel filtering, especially filtering on facilities (e.g. checkboxes)

Thanks!
