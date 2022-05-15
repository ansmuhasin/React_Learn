//! ReactJS
//+ In react we work with components.
//+ we can write common code for a component and we can reutilize it.
//+ we can write html coded inside js , which will be converted to javascript in the background. called jsx
<div id="app"></div>;
// .person{
//     display: inline-block;
//     margin: 10px;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 2px #ccc;
//     width: 200px;
//     padding: 20px;
//   }
function Person(props) {
  //+ this function will be used to render general component.
  return (
    //+ we can writ html code here
    <div className="person">
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}
var app = (
  <div>
    <Person name="Max" age="20" />
    <Person name="Manu" age="25" />
  </div>
);
ReactDOM.render(app, document.querySelector("#app")); //+ we can render it like this to dom

//! How to create a local environment
//+ Use Dependency Management Tool npm or yarn
//+ Use Bundler Recommended: Webpack
//+ Use Compiler (Next-Gen JavaScript) Babel + Presets
//+ Use a Development Server

//% how to do it simply
//+ search create react app
//* npm install create-react-app -g   //+ -g for installing globally
//+ create the app in the specific location using following command
//* create-react-app first-react-app

//+ navigate to the folder using cd first-react-app
//* npm start  //+ this will run the local server

//+ package.json will contans the package info
//+ node_modules contsins the modules and should not be modified
//+ public contains the files that can be added by us
//+there is an index.html page we can write the html . manifest contains some meta data

//+ we have a index.js file which renders the app.js file. and the app.js file will have some react code.
//+ we have some other files like css and test.

//+ we can render a root component to the index.js file. root component can have multiple inner components