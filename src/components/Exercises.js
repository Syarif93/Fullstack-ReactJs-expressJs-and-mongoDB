import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useRouteMatch, Switch, Route, useParams } from 'react-router-dom'
import Exercise from './Exercise'
import Axios from 'axios'
import { useActions } from '../useActions'
import { addExercise } from '../reducer/reducer'
import uuid from 'uuid/v4'

function Exercises() {
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        const fetchExercises = async () => {
            const result = await axios('http://localhost:5000/exercises')
            
            setExercises(result.data)
        }
        fetchExercises()
    }, [])

    const addExerciseToGlobalState = useActions(exercise => addExercise(exercise))

    const [exercise, setExercise] = useState({})
    
    let { id } = useParams()
    
    useEffect(() => {
        const fetchExercise = async () => {
            const result = await Axios.get(`http://localhost:5000/exercises/${id}`)

            setExercise(result.data)
        }

        fetchExercise()
    }, [])

    const sendToRedux = () => {
        addExerciseToGlobalState({
            id: uuid(),
            data: exercise,
        })
    }

    let {path, url} = useRouteMatch()

    return (
        <div>
            {exercises.map(exercise => (
                <h3 key={exercise._id}><Link to={`${url}/${exercise._id}`} onClick={sendToRedux}>{exercise.username}</Link></h3>
            ))}
            <Switch>
                <Route path={`${path}/:id`}>
                    <Exercise />
                </Route>
            </Switch>
        </div>
    )
}

export default Exercises
