import React from 'react'

export const About = () => {
	return(
		<div className="container my-3">
			<h1>This is About Component</h1>
			<div className="container" style={{"fontSize":"25px"}}>
				ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules. We can add more tasks at any time and delete a task that is completed. 
			</div>
		</div>
	)
}