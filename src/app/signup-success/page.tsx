"use client"
// pages/success.tsx
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { createClient } from "@supabase/supabase-js";
import { User } from '@supabase/supabase-js';


const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default function SuccessPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [, setUser] = useState<User | null>(null);

    useEffect(() => {
        const checkSession = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            if (session?.user) {
                setUser(session.user);
            } else {
                router.push("/"); // or your login page
            }

            setLoading(false);
        };

        checkSession().then();
    }, [router]);

    if (loading) return <p>Checking session...</p>;

    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center">
            <h1 className="text-3xl font-bold">🎉 You&apos;re signed in!</h1>
            <p className="mt-2">Welcome to NewRaah. You&apos;ve successfully joined the waitlist.</p>
        </div>
    );
}

