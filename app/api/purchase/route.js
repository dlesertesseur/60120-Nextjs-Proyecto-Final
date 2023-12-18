import { db } from "@/firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

const collName = "purchases";

export async function POST(request, { params }) {
  try {
    const body = await request.json();
    const newDoc = { ...body };

    await setDoc(doc(db, collName), newDoc);

    return NextResponse.json(body, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
