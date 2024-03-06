import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Admin from "@/app/admin/page";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== "ADMIN") {
  }
  const body = await request.json();
  const { name, email, password } = body;
  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  return NextResponse.json(user);
}
