import React from 'react'
// import PropTypes from 'prop-types'
import Todo from '../components/Todo'
import { toggleTodo } from '../actions'
import { connect } from 'react-redux'

const VisibleTodoList = ({ todos, toggleTodo }) => {
    return (
        <ul>
            {todos.map(todo => 
                <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => toggleTodo(todo.id)}
                />
            )}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
  })
  

// VisibleTodoList.propTypes = {
//     todos: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       completed: PropTypes.bool.isRequired,
//       text: PropTypes.string.isRequired
//     }).isRequired).isRequired,
//     toggleTodo: PropTypes.func.isRequired
//   }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VisibleTodoList)

