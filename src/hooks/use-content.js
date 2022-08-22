import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useContent(target) {
    const [content, setContent] = useState([])
    const { firebase } = useContext(FirebaseContext)

    console.log(content);

    useEffect(() => {
        firebase
            .firestore()
            .collection(target)
            .get()
            .then(snapshot => {
                console.log(snapshot.docs);
                const allContent = snapshot.docs.map(contentObj => ({
                    ...contentObj.data(),
                    docId: contentObj.id // to use as key
                }))

                setContent(allContent)
            })
            .catch(error => console.log(error.message))
    }, [firebase, target])

    return { [target]: content }
};

