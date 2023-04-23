import {TOKEN} from './notion_token.js';

import { Client } from "./node_modules/@notionhq/client";

// Initializing a client
const notion = new Client({
  auth: TOKEN,
})

console.log(TOKEN)