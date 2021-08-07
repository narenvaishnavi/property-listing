# Getting Started

- Please read the INSTRUCTIONS.md first
- For any questions around Create React App (CRA), reference
  CRA_DOCUMENTATION.md

# Code and Design Decisions

<!-- Please document your code & design decisions here. -->
1. The architecture of React app is based on the principle of View of MV*.
   - Component folder will have UI widgets like - Card, Header  etc (to scale it in future).
   - View folder will have controllers to upadte the view. This is implemented using React Hooks (UseState and useEffect).
   - Routing is achieved using react-router-dom which makes the app scaleable if added some new screens in the future.
2. Utilization of CSS Pre-processor SASS to implement the concept of DRY (Don't repeat Yourself) by using @mixins.
3. I have taken the liberty of calculating total bathrooms as - d.property.bathsFull + d.property.bathsHalf / 2 based on the example in the instructions (ex: 1 full + 3 half = 2.5)
4. Used Enzyme to write some test cases which is a great fit for react library.

Steps to follow -
1. To download all the dependencies to run local, type `npm install`
2. To start the application, type - `npm start` in the terminal. You should be able to access it on `http://localhost:3000`
3. To create the build,type - `npm run build` in the terminal

