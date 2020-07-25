import React from 'react'
import { useRouteMatch, Link, Switch, Route } from 'react-router-dom'
import ExerciseEdit from './ExerciseEdit'

function Exercise() {
    

    let {path, url} = useRouteMatch()

    return (
        <div>
            <table border="1px">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <ul>
                                <li><Link to={`${url}/edit`}>Edit</Link></li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Switch>
                <Route path={`${path}/edit`}>
                    <ExerciseEdit  />
                </Route>
            </Switch>
        </div>
    )
}

export default Exercise
