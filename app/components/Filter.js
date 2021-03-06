import React from 'react';

class Filter extends React.Component {
  componentDidMount() {
    /* eslint-disable no-undef */
    $('#boardSelectWrap').on('change', '#boardSelect', this.props.handleSelect);
    $('#userSelectWrap').on('change', '#userSelect', this.props.handleSelect);
  }
  render() {
    return (
      <div>
        <div id="boardSelectWrap" className="card-panel white row">
          <label htmlFor="boardSelect">Boards</label>
          <select id="boardSelect" multiple>
            <option value="selected" disabled>Choose board</option>
            {this.props.boards.map(board => (
              <option value={board.boardId} key={board._id}>
                {board.title}
              </option>
            )
          )}
          </select>
        </div>
        <div id="userSelectWrap" className="card-panel white row">
          <label htmlFor="userSelect">Users</label>
          <select id="userSelect" multiple>
            <option value="selected" disabled>Choose user</option>
            {this.props.users.map(user => (
              <option value={user.id} key={user.id}>
                {user.fullName}
              </option>
            )
          )}
          </select>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  handleSelect: React.PropTypes.func,
  boards: React.PropTypes.array.isRequired,
  users: React.PropTypes.array.isRequired,
};

export default Filter;
