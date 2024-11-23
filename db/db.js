import { Client } from "https://deno.land/x/postgres/mod.ts";

// Set up PostgreSQL client connection
const client = new Client({
  user: "postgres",
  database: "postgres",
  hostname: "localhost",
  password: "12345678",
  port: 5432,
  //tls: false,
});

await client.connect();

export default client;


