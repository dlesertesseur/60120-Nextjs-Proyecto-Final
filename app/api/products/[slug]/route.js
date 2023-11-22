import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";

const collName = "products";

export async function GET(request, { params }) {
  const slug = params.slug;

  try {
    const coll = collection(db, collName);

    const q = query(coll, where("slug", "==", slug));

    const querySnapshot = await getDocs(q);

    const documents = querySnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
    return NextResponse.json(documents[0], { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}