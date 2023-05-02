import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "@/lib/prisma";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === 'GET') {
    const employes = await prisma.employee.findMany({
    });

    return res.json(employes)
  }

}