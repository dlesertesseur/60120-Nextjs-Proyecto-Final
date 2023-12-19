import { db } from "@/firebase/config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

const collName = "categories";

export const getCategories = async () => {
  const coll = collection(db, collName);
  const sectionsQueryRef = query(coll, orderBy("order"));
  const querySnapshot = await getDocs(sectionsQueryRef);

  const documents = querySnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  documents.sort((a, b) => {
    return a.order - b.order;
  });

  return documents;
};
