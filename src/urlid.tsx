import React from 'react'
import { useParams, Route } from "react-router-dom";


function resId() {
    const { resId } = useParams()

}

export default function urlid() {


    return (
        <div>
            <Route path="/p/:id">
                <resId />
            </Route>
        </div>
    )
}
