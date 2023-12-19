import { getProductById } from "@/app/data/ProductDao";
import { db } from "@/firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

const collName = "purchases";

export async function POST(request, { params }) {
  try {
    const pid = uuidv4();
    const body = await request.json();
    const products = body.products ;

    await setDoc(doc(db, collName, pid), body);

    for (let index = 0; index < products.length; index++) {
      const productSold = products[index];
      
      const product = await getProductById(productSold.productId);
      if(product){

        if(product.stock > 0){
          if(product.stock >= productSold.quantity){
            product.stock = product.stock - productSold.quantity;
          }else{
            product.stock = 0;
          }
          await setDoc(doc(db, "products", product.id), product);
        }
      }
    }

    return NextResponse.json(body, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
