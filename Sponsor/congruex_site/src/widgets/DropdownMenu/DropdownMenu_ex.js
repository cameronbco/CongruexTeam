import React from 'react'

export class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [
        { name: 'One', id: 1 },
        { name: 'Two', id: 2 },
        { name: 'Three', id: 3 },
        { name: 'Four', id: 4 },
      ]
    };
  }

  render() {
    let dropdownTemplate = this.state.values.map(v => (
      <option value={v.id}>{v.name}</option>
    ));
    return (
      <label>
        Need To Do
        <select value={this.state.value} onChange={this.handleChange}>
          {dropdownTemplate}
        </select>  
      </label>
    )
  }
}

export default DropdownMenu