import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

const collName = "users";

export async function GET(request, { params }) {
  const email = params.email;

  try {
    const coll = collection(db, collName);

    const q = query(coll, where("email", "==", email));

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
