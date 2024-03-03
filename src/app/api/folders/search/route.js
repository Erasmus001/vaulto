export async function GET(request, response) {
  const searchParams = await request?.searchParams();

  console.log(searchParams);

  return Response.json({
    status: 200,
    message: "Search successful",
    data: {},
  });
}
