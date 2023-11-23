import Product from "@/db/models/Product";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  const { id } = request.query;

  await dbConnect();
  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      console.log(product);
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }
  if (request.method === "PUT") {
    try {
      await Product.findByIdAndUpdate(id, { $set: request.body });
      console.log("update: ", request.body);
      response.status(200).json({ status: `Product ${id} is updated!` });
    } catch (err) {
      response.status(500).json({ err: "Interval server error " });
    }
  }
  if (request.method === "DELETE") {
    try {
      await Product.findByIdAndDelete(id);
      response
        .status(200)
        .json({ status: `Product ${id} is successfully deleted!` });
    } catch (err) {
      response.status(500).json({ err: "Interval server error " });
    }
  }
}
