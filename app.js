import { Hono } from "https://deno.land/x/hono/mod.ts";
import client from "./db/db.js";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts"; // For password hashing
import { serveStatic } from "https://deno.land/x/hono/middleware.ts"; // Middleware to serve static files

const app = new Hono();

// Serve static files (e.g., CSS, JS, images) from the "static" directory
app.use('/static/*', serveStatic({ root: './static' }));

// Serve the registration form
app.get('/register', async (c) => {
  return c.html(await Deno.readTextFile('./views/register.html'));
});

// Handle user registration (form submission)
app.post('/register', async (c) => {
  const body = await c.req.parseBody();

  const username = body.username;
  const password = body.password;
  const birthdate = body.birthdate;
  const role = body.role;

  try {
    // Hash the user's password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert the new user into the database
    await client.queryArray(
      `INSERT INTO zephyr_users (username, password_hash, role, birthdate)
       VALUES ($1, $2, $3, $4)`,
      [username, hashedPassword, role, birthdate]
    );

    // Success response
    return c.text('User registered successfully!');
  } catch (error) {
    console.error(error);
    return c.text('Error during registration', 500);
  }
});

// Serve the login page
app.get('/login', async (c) => {
  return c.html(await Deno.readTextFile('./views/login.html')); // Assumes you have a login.html file
});

// Handle login form submission
app.post('/login', async (c) => {
  const body = await c.req.parseBody();

  const username = body.username;
  const password = body.password;

  try {
    // Query database for user by username
    const result = await client.queryObject(
      `SELECT password_hash FROM zephyr_users WHERE username = $1`,
      [username]
    );

    if (result.rows.length === 0) {
      return c.text('Invalid username or password', 401);
    }

    const user = result.rows[0];

    // Compare the submitted password with the stored hashed password
    const isValidPassword = await bcrypt.compare(password, user.password_hash);

    if (!isValidPassword) {
      return c.text('Invalid username or password', 401);
    }

    // Success response
    return c.text('Login successful!');
  } catch (error) {
    console.error(error);
    return c.text('Error during login', 500);
  }
});

// Start the server
app.listen({ port: 3000 });
console.log('Server running on http://localhost:3000');
