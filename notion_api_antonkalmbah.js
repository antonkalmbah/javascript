import { TOKEN } from './notion_token';

import { Client } from "@notionhq/client";

// Initializing a client
const notion = new Client({
  auth: TOKEN,
})

console.log(TOKEN)