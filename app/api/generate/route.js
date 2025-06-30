import clientPromise from '@/lib/mongodb'

function generateShortCode(length = 6) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < length; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

export async function POST(request) {
    try {
        const body = await request.json();
        const client = await clientPromise;
        const db = client.db("Nexlink");
        const collection = db.collection("url");

        // Check if URL already exists
        const existing = await collection.findOne({ url: body.url });
        if (existing) {
            return Response.json({
                success: true,
                error: false,
                message: 'URL already shortened',
                shorturl: existing.shorturl
            });
        }

        // Generate a short code and store it
        const shortCode = generateShortCode();
        const shorturl = `${process.env.NEW_PUBLIC_HOST || "http://localhost:3000"}/s/${shortCode}`;

        await collection.insertOne({
            url: body.url,
            shorturl: shorturl,
            code: shortCode,
            createdAt: new Date()
        });

        return Response.json({
            success: true,
            error: false,
            message: 'URL generated successfully',
            shorturl: shorturl
        });
    } catch (error) {
        return Response.json({ success: false, error: true, message: error.message }, { status: 500 });
    }
}