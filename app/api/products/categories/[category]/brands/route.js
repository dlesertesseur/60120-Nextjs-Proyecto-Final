import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";

const collName = "products";

export async function GET(request, { params }) {
  const category = params.category;
  const brands = new Set();

  try {
    const coll = collection(db, collName);

    const q = query(coll, where("category", "==", category.toUpperCase()));

    const querySnapshot = await getDocs(q);

    querySnapshot.docs.forEach((doc) => {
      brands.add(doc.data().brand);
    });

    const ret = Array.from(brands);
    ret.sort();

    return NextResponse.json(ret, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
