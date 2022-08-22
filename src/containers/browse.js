import SelectProfileContainer from "./profiles";
import { FirebaseContext } from '../context/firebase'
import { useContext } from "react";

export default function BrowseContainer({ slides }) {
    // porfile

    // auth
    const { firebase } = useContext(FirebaseContext)

    // content
    const user = firebase.auth().currentUser || {}

    return <SelectProfileContainer user={user} />
}
