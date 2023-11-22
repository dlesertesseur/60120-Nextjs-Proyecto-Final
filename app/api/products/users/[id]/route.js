import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";

const collName = "products";

export async function GET(request, { params }) {
  const id = params.category;

  try {
    const coll = collection(db, collName);

    const q = query(coll, where("user", "==", id));

    const querySnapshot = await getDocs(q);

    const documents = querySnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
    return NextResponse.json(documents, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}