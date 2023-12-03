import { db } from "@/firebase/config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { NextResponse } from "next/server";

const collName = "categories";

export async function GET(request, { params }) {
  try {
    const coll = collection(db, collName);
    const sectionsQueryRef = query(coll, orderBy("order"))
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

    return NextResponse.json(documents, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
