import clientPromise from '@/lib/mongodb';

export async function GET(request, { params }) {
    const { code } = params;
    const client = await clientPromise;
    const db = client.db("Nexlink");
    const collection = db.collection("url");

    const doc = await collection.findOne({ code });
    if (doc) {
        return Response.redirect(doc.url, 302);
    } else {
        return new Response("Not found", { status: 404 });
    }
}