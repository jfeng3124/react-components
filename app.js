var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList groceryItems={['apples', 'pears', 'strawberries']}/>
  </div>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      focus: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onListItemHover() {
    this.setState({
      focus: !this.state.focus
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.focus ? 'bold' : 'normal',
      cursor: this.state.focus ? 'pointer': 'cursor'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} onMouseEnter={this.onListItemHover.bind(this)} 
      onMouseLeave={this.onListItemHover.bind(this)}>{this.props.groceryListItem}</li>
    );

  }

}

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryListItem =>
      <GroceryListItem groceryListItem={groceryListItem} />
    )}
  </ul>
);

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<GroceryList />, document.getElementById('GroceryList'));
ReactDOM.render(<GroceryListItem />, document.getElementById('GroceryListItem'));