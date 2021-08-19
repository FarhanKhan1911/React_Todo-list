import React from 'react'
import {TodoItem} from './TodoItem'

export const Todos = (props) => {
	let mystyle = {
		minHeight: "70vh"
	}
	return (
		<div className="container my-3" style={mystyle}>
			<h3 className="my-3">Todos List</h3>
			{props.todos.length===0? <div className="alert alert-info text-center">
            <p className="display-4">
                NO TODOS
            </p>
        </div> : 

			props.todos.map((todo)=>{     // for loop
				return <TodoItem todo={todo} key={todo.sno} onDelete = {props.onDelete}/>
				
				// return (
				// <>
				// <h3>This</h3>
				// <TodoItem todo={todo}/>
				// </> )
			})
			}

		</div>
	)
}
