import { db } from "@/firebase/config";
import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

const collName = "products";
export async function GET(request, { params }) {
  try {  
    const coll = collection(db, collName);
    const sectionsQueryRef = query(coll, orderBy("description"))
    const querySnapshot = await getDocs(sectionsQueryRef);
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

export async function PUT(request, { params }) {
  try {
    const body = await request.json();

    const docRef = doc(db, collName, body.id);

    const updatedDoc = {
      sku: body.sku,
      category: body.category,
      ean: body.ean,
      stock: body.stock,
      price: body.price,
      description: body.description,
      brand: body.brand,
      situation: body.situation
    };

    await updateDoc(docRef, updatedDoc);

    return NextResponse.json(updatedDoc, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const body = await request.json();

    const docRef = doc(db, collName, body.id); 
    deleteDoc(docRef)

    return NextResponse.json(body.id, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

