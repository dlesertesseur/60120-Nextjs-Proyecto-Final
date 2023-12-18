import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";

const collName = "users";

// export async function POST(request, { params }) {
//   const body = await request.json();

//   try {
//     const coll = collection(db, collName);

//     const q = query(coll, where("email", "==", body.email));

//     const querySnapshot = await getDocs(q);

//     const documents = querySnapshot.docs.map((doc) => {
//       return {
//         ...doc.data(),
//         id: doc.id,
//       };
//     });

//     if (documents && documents.length > 0) {
//       const user = documents[0];
//       if (user.password === body.password) {

//         const obj = {
//           lastName: user.lastName,
//           name: user.name,
//           email: user.email,
//           id: user.id,
//         }
        
//         return NextResponse.json(obj, { status: 200 });
//       } else {
//         return NextResponse.json(
//           { error: "password incorrect" },
//           { status: 401 }
//         );
//       }
//     } else {
//       return NextResponse.json(
//         { error: "User does not exist" },
//         { status: 404 }
//       );
//     }
//   } catch (error) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
