import "dotenv/config";
import { client } from "@/db";

await client.sync();
