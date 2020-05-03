import React,{useState} from 'react'

import PackageContext from "./Context"

const Provider = props => {
    //state declaration
    const [mission, setmission] = useState({
        name: "Secret_Mission",
        code: "007",
        accepted: "No"
    })
    return(
        <PackageContext.Provider value={{
            data: mission, //Pass all the data
            changeAcceptToYes: () => {
                setmission({...mission, accepted: "Yes"})
            },//...gets all the data declared for a state varibale
            changeAcceptToNo: () => {
                setmission({...mission, accepted: "No"})
            }//...gets all the data declared for a state varibale
        }}>
            {props.children}
        </PackageContext.Provider>//This provider will be used to pass all the mission data
    )
}

export default Provider