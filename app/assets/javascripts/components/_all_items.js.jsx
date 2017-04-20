var AllItems = React.createClass({

  handleDelete(){
    this.props.handleDelete(id);
  },

  handleEdit() {

  },

  render() {
    var items = this.state.items.map((item) => {
      return (
        <div>
          <h1>All items component</h1>
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button onClick={this.handleDelete.bind(this, item.id)}>Delete<button/>
            <button onClick={this.handleEdit()}>Edit</button>
          </div>
        </div>
      )
    });
    return(
      <div>
        {items}
      </div>
    )
  }
})
