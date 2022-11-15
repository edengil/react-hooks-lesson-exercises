import React, { useState } from 'react'

export default function SpotCheck2() {

  const [isLoading ,setIsLoading ] = useState(false)
  const [lesson ,setLesson ] = useState
  ({ name: 'React Hooks', completed: false, started: false })
  
  const updateLesson = key => setLesson({ ...lesson, [key]: !lesson[key] })
  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 2</h4>
      <div className="exercise" id="sc-2">
        {isLoading
          ?<div>Page is loading...</div>
          : <div>
          <p>{lesson.name}</p>
          <p>Lesson status: 
              {lesson.completed 
              ? 'Completed' 
              : lesson.started 
              ? 'In progress' 
              : 'Not started'}
          </p>
          <div className="exercise" id="sc-1">
            <button onClick={() => updateLesson('started')}>Begin Lesson</button>
            <button onClick={() => updateLesson('completed')}>Complete Lesson</button>
          </div>
        </div>}
      </div>
    </div>
  )
}
