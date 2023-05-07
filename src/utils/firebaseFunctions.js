// Saving an item

import { doc, setDoc, getDocs, query, collection, orderBy } from "firebase/firestore"
import { firestore } from "../firebase.config"

// Saving all food
export const saveItem = async (data) => {
    await setDoc(doc(firestore, 'fooditems', `${Date.now()}`), data, { merge: true })
};


// Fetcing all details - get all food items
export const getAllFoodItems = async () => {
    const items = await getDocs(
        //  below code shows the items will be shown as ordered by id in descending order
        query(collection(firestore, 'fooditems'), orderBy("id", "desc"))
    );
    return items.docs.map((doc) => doc.data());
};