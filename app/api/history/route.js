import clientPromise from '@/lib/mongodb';

export async function GET() {
    const client = await clientPromise;
    const db = client.db("Nexlink");
    const collection = db.collection("url");
    const urls = await collection.find({}).sort({ createdAt: -1 }).toArray();
    return Response.json(urls);
}

export async function DELETE() {
    const client = await clientPromise;
    const db = client.db("Nexlink");
    const collection = db.collection("url");
    await collection.deleteMany({});
    return Response.json({ success: true });
}