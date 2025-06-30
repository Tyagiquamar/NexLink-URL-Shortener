import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function DELETE(request, { params }) {
    const { id } = params;
    const client = await clientPromise;
    const db = client.db("Nexlink");
    const collection = db.collection("url");
    await collection.deleteOne({ _id: new ObjectId(id) });
    return Response.json({ success: true });
}