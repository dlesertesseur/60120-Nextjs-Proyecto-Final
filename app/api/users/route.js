import { db } from "@/firebase/config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

const collName = "users";

export async function GET(request, { params }) {
  try {
    const coll = collection(db, collName);
    const querySnapshot = await getDocs(coll);

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

export async function POST(request, { params }) {
  try {
    const body = await request.json();

    const coll = collection(db, collName);

    const newDoc = await addDoc(coll, body);

    return NextResponse.json(newDoc.id, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}
