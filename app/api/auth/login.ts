import { NextApiRequest, NextApiResponse } from 'next';
import { setAuthCookies, SetAuthCookies } from "next-firebase-auth";
import initAuth from "@/initAuth";

initAuth()

export default async function handler (req:any, res:any) {
    try {
        await setAuthCookies(req, res);
    } catch (e) {
        return res.status(500).json({ error: "Unexpected error." });
    }
    return res.status(200).json({ success: true });
}