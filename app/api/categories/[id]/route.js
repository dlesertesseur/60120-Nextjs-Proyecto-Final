import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

const collName = "categories";

export async function GET(request, { params }) {
  const id = params.id;

  try {
    const docRef = doc(db, collName, id);
    const docSnap = await getDoc(docRef);

    return NextResponse.json(docSnap.data(), { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
