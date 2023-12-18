import { db } from "@/firebase/config";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { NextResponse } from "next/server";

const collName = "products";
export async function GET(request, { params }) {
  try {
    const coll = collection(db, collName);
    const sectionsQueryRef = query(coll, orderBy("description"));
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
    const newDoc = { ...body };
    delete newDoc.id;

    await setDoc(doc(db, collName, body.id), newDoc);

    return NextResponse.json(body, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const body = await request.json();
    const id = body.id;

    delete body.id;

    const docRef = doc(db, collName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const product = docSnap.data();
      product.sku = body.sku;
      product.category = body.category;
      product.ean = body.ean;
      product.stock = body.stock;
      product.slug = body.slug;
      product.price = body.price;
      product.description = body.description;
      product.brand = body.brand;
      product.situation = body.situation ? body.situation : "NORMAL";
      product.image = body.image ? body.image : product.image;

      await setDoc(doc(db, collName, id), product);
    } else {
      throw new Error(`No such document! id = ${id}`) 
    }

    return NextResponse.json(body, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const body = await request.json();

    const docRef = doc(db, collName, body.id);
    deleteDoc(docRef);

    return NextResponse.json(body.id, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
