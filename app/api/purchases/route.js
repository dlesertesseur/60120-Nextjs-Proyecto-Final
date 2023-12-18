import { db } from "@/firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

const collName = "purchases";

export async function POST(request, { params }) {
  try {
    const pid = uuidv4();
    const body = await request.json();
    const newDoc = { ...body };

    await setDoc(doc(db, collName, pid), newDoc);

    return NextResponse.json(body, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
