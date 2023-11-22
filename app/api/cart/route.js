import { db } from "@/firebase/config";
import { NextResponse } from "next/server";

const collName = "cart";

export async function POST(request, { params }) {
  const body = await request.json()

  try {
    const coll = collection(db, collName);
    const newDoc = await addDoc(coll, body);

    return NextResponse.json({ success: "ok", data:newDoc }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message}, { status: 500 });
  }
}
