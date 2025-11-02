import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const { id } = await params;
  console.log(id);
  const singleData = await dbConnect("practice_data").findOne({
    _id: new ObjectId(id),
  });
  return Response.json(singleData);
}
export async function DELETE(req, { params }) {
  const { id } = await params;
  console.log(id);
  const response= await dbConnect("practice_data").deleteOne({
    _id: new ObjectId(id),
  });
  return Response.json(response);
}
export async function PATCH(req, { params }) {
  const { id } = await params;
  console.log(id);
  const postedData = await req.json();
  const filter = {_id: new ObjectId(id)};
  const updatedResponse = await dbConnect("practice_data").updateOne(filter,{$set: {...postedData}},{upsert: true});
  return Response.json(updatedResponse);
}
