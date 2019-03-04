var GroceryList = (props) => {
  var itemClick = (event) => {
    console.log('click');
  };
  return (
    <ul>
      <li onClick = {itemClick}> {props.item[0]}</li>
      <li>{props.item[1]}</li>
      <li>{props.item[2]}</li>
    </ul>
  );
}

var GroceryListItem = () => (
  <div>
  <h2>Grocery List</h2>
  <GroceryList item={['apples', 'pears', 'strawberries']} />
  </div>
)

ReactDOM.render(<GroceryListItem />, document.getElementById("app"));

// var TodoList = (props) => (
//   <ul>
//     <li>{props.todos[0]}</li>
//     <li>{props.todos[1]}</li>
//     <li>{props.todos[2]}</li>
//   </ul>
// );

// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById("app"));
