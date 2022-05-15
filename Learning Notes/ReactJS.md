# React JS
In react we work with components.
we can write common code for a component and we can reutilize it.
we can write html coded inside js , which will be converted to javascript in the background. called jsx
```jsx
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

ReactDOM.render(app, document.querySelector("#app"));
```