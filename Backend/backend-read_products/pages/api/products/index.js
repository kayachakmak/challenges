import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const products = await Product.find();
  if (request.method === "GET") {
    console.log("data ", products);
    return response.status(200).json(products);
  }
  return response.status(405).json({ message: "Method not allowed" });
}
