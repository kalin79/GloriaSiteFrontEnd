// next-auth.d.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Session, User, JWT } from "next-auth";
import type { JWT } from "next-auth/jwt";
declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            email?: string | null;
            name?: string | null;
            image?: string | null; // Opcional, si usas AdapterUser
        };
    }

    interface User {
        id: string;
        email?: string | null;
        name?: string | null;
        image?: string | null; // Opcional, si usas AdapterUser
    }

    interface AdapterUser {
        id: string;
        email: string;
        emailVerified: Date | null;
        name?: string | null;
        image?: string | null;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string; // Asegúrate de que id sea obligatorio
    }
}