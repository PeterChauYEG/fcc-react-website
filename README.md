# React.js - Part 2
## Building a Frontend-only Website with Routing and Tests
### Oct 1 - Coffee-and-Code

We will be building on last month's React.js introduction by exploring [Tachyons; a modular CSS library](http://tachyons.io/), [Jest; a React testing tool](https://facebook.github.io/jest/), and [React-Router Version 4](https://github.com/ReactTraining/react-router/tree/v4).
Together, we will build a small, responsive, frontend-only website with routing, and tests.

https://www.meetup.com/startupedmonton/events/233852908/

## Using this repo
1. Start with: `npm start`
2. Run Tests with: `npm test`

## Setting up our development environment
1. Install our boilerplate generator: `npm -g create-react-app`
2. Create a React app: `create-react-app website`
3. Change to our new directory and make sure the app runs: `cd website/ && npm start`
4. Clean up our project
5. Rewrite our smoke test with enzyme's shallow and react-addons-test-utils: `npm i --save-dev enzyme react-addons-test-utils`
6. Install Tachyons: `npm i --save-dev tachyons@4.5.3`
7. Require Tachyons
8. Create Home view using "[Pages Double](http://tachyons.io/components/pages/double/index.html)"
9. Change `class` to `className`
10. Extract `style` into it's own css sheet
11. Set up git, commit, and push
12. Extract Home from App
13. Install react-router
14. Set up Home route
15. Set up 404 route
16. Set up picture routes
17. Create Links to picture routes
18. Create picture component
19. Utilize route parameter
20. Handle undefined id
21. Abstract data
22. Allow full bleed image
23. Vertically center image (Done)
