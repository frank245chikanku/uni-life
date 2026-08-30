import "dotenv/config";

import readline from "readline";

import bcrypt from "bcryptjs";

import prisma from "./lib/prisma";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (question: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
};

const createAdmin = async (): Promise<void> => {
  try {
    console.log("");
    console.log("==========================================");
    console.log("       UNI LIFE GUIDE ADMIN SETUP");
    console.log("==========================================");
    console.log("");

    const username = await ask(
      "Enter administrator username: "
    );

    if (!username) {
      console.log("Username cannot be empty.");
      return;
    }

    const password = await ask(
      "Enter administrator password: "
    );

    if (!password) {
      console.log("Password cannot be empty.");
      return;
    }

    if (password.length < 8) {
      console.log(
        "Password must be at least 8 characters long."
      );
      return;
    }

    const existingAdmin =
      await prisma.admin.findUnique({
        where: {
          username,
        },
      });

    if (existingAdmin) {
      console.log("");
      console.log(
        `An administrator with the username "${username}" already exists.`
      );
      console.log(
        "Choose another username."
      );
      return;
    }

    const passwordHash =
      await bcrypt.hash(password, 12);

    const admin =
      await prisma.admin.create({
        data: {
          username,
          passwordHash,
        },

        select: {
          id: true,
          username: true,
          createdAt: true,
        },
      });

    console.log("");
    console.log("==========================================");
    console.log("       ADMINISTRATOR CREATED");
    console.log("==========================================");
    console.log("");
    console.log(`Username: ${admin.username}`);
    console.log(`ID:       ${admin.id}`);
    console.log(
      `Created:  ${admin.createdAt.toISOString()}`
    );
    console.log("");
    console.log(
      "The password has been securely hashed."
    );
    console.log(
      "You can now use this account on the admin sign-in page."
    );
    console.log("");
  } catch (error) {
    console.error("");
    console.error(
      "Unable to create administrator:"
    );
    console.error(error);
  } finally {
    await prisma.$disconnect();
    rl.close();
  }
};

createAdmin();