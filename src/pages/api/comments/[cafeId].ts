import { prisma } from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cafeId = parseInt(req.query.cafeId as string);

  if (req.method === "GET") {
    const comments = await prisma.comment.findMany({
      where: { cafeId },
      orderBy: { createdAt: "desc" },
    });
    return res.status(200).json(comments);
  }

  if (req.method === "POST") {
    const { user, text, rating } = req.body;
    const comment = await prisma.comment.create({
      data: { user, text, rating, cafeId },
    });
    return res.status(201).json(comment);
  }

  res.status(405).end();
}
