export async function GET(req, {params}) {

    const {id} = await params;
    console.log(id)

  return Response.json({ id});
}