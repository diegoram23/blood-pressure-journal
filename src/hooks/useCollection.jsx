import { useEffect, useState } from "react";
import { db } from "../firebase/config";

import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'

const useCollection = (col) => {
    const [documents, setDocuments] = useState([])

    useEffect(() => {
        let ref = collection(db, col)

        const q = query(ref, orderBy('when', 'desc'))
        
        const unsub = onSnapshot(q, ref, (snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({ id: doc.id, ...doc.data() })
            })
            setDocuments(results)
        })
        return () => unsub()

    }, [col])
    return { documents }
}

export default useCollection