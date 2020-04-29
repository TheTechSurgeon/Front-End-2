import React, {useState} from "react"
import {useHistory, Route} from "react-router-dom"

//Components
import EditForm from "./EditForm"
import EditProfile from "./EditProfile"

const HomePage = () => {
    // const [plantList, setPlantList] = useState()
    const {push} = useHistory()
    return(

        <div>
        <div>
            <img></img>
        </div>
            <div>
                <Route path="/update-plant/:id" render={props => <EditForm {...props} plantList={plantList}/>} />
            </div>
            <div>
                <Route path="/update-profile/:id" component={EditProfile}/>
            </div>
            <div>
                <Route path="/add-plant" component={AddPlantForm}/>
            </div>
            

            <button onClick={() => push("/add-plant")}>Add Plant</button>
        </div>
    )
}

export default HomePage
