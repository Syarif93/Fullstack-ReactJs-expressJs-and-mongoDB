import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
import { useSelector } from 'react-redux'

function ExerciseEdit() {
    const exercise = useSelector(state => state.exercise)
    console.log(exercise)
    const [username, setUsername] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('')
    const [date, setDate] = useState('')

    useEffect(() => {
        setUsername(exercise.username)
        setDescription(exercise.description)
        setDuration(exercise.duration)
        setDate(exercise.date)
    }, [exercise])

    let { id } = useParams()
    const submitEvent = (e) => {
        e.preventDefault()
        let inputs = {
            username: username,
            description: description,
            duration: duration,
            date: date,
        }

        Axios.patch(`http://localhost:5000/exercises/update/${id}`, inputs)
            .then(res => console.log(res.data))
    }

    return (
        <div className="edit">
            <form onSubmit={submitEvent}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
                <label htmlFor="description">Description</label>
                <input type="text" id="description" value={description} onChange={e => setDescription(e.target.value)} />
                <label htmlFor="duration">Duration</label>
                <input type="number" id="duration" value={duration} onChange={e => setDuration(e.target.value)} />
                <label htmlFor="date">Date</label>
                <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ExerciseEdit
