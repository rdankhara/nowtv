# NowTV React Interview

![NowTV](./logo.png)

## Commands

- **npm start**: Runs the web application in developer mode
- **npm test**: Executes Jest tests that have the `.test.js` extension

## Tasks

Feel free to create new files to help you complete these tasks. Please ask before downloading any external libraries, most will be fine.

1. In `service.js`, utilise the 'APIs' provided by `data.js` to create a promise resolving to an array of chatlog messages in the following format, sorted by time.

```json
[
  {
    "messageId": "12356",
    "userId": "613651251",
    "fullName": "Robin Balmforth",
    "timestamp": "2017-02-23T14:57:20.629Z",
    "email": "robin@example.com",
    "message": "Hello, World!",
    "avatar": null
  },
  ...
]
```
(Do not modify `data.js` to achieve this, but if you think there's an issue ask the developer helping you!)

2. Create a view of this dataset, with the root of your React application starting in `App.js`. Including:
  - Display the `avatar` where applicable
  - Display the `email` on hover
  - Format the timestamp to be human readable

3. Zip test back up and send it back to recruiter.

4. Bonus Questions:
  - How would you achieve this with Redux?
  (
    add packages redux and react-redux
    use provider component and set root state
    use redux-thunk or redux-observable as middleware to handle async operation. (used redux thunk as you are not using redux observable)
  )
  - How would you handle an error from the API?
  - If you were to continue this application, what would you add?
   (
      - make it responsive to adapt different screen size
      - might extract avatar to its own functional component
      - I would add busy loader for async actions,
      - stylename should be defined as const 
      - I would use sass for css
      - paging or virtulisation to limit amount of data,
      - filter functionality
      - more nicer UI, 
      - organise files and folder nicely.
      automated end to end tests,
      I would use redux observable as it allows cancelling which helps saving rendering thread cpu cycle from rendering unwanted UI.
    )
  - If you were to deploy this application (or any web application) to production, how would you personally do it?
  (ideally it should be web pack command npm run build and should create prod build file which should be then copied to prod bin folder by CI TeamCity or Jenkin)
  - Finally, what did you think of the test? 😀
(Test is good, covers react, javascript, css, unit testing skills)
