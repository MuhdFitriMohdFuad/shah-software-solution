# Estimate AI (optional)

Lets the "Describe the system you want" box on the site use your OpenRouter model instead of the built-in keyword reader.
Without it the box still works, using the keyword reader in `main.js`.

GitHub Pages cannot keep a secret, so the OpenRouter key lives in this small Cloudflare Worker (free plan is enough).
Never put the key in `main.js`: anyone can read the site's code.

## How the price is decided

Your minimum and maximum come from the price lists in `main.js` and never leave the site.
The model only returns a complexity level from 0 to 1 with its reasons, and the site places the
estimate at that point between your minimum and maximum. A wrong or strange answer can never
quote below your minimum or above your maximum.

## Set up

1. `wrangler.toml` already names two free models (a main one and a backup). Change them only if OpenRouter removes them.
2. In this folder:

   ```
   npm install
   npx wrangler login
   npx wrangler secret put OPENROUTER_API_KEY
   npx wrangler deploy
   ```

3. Copy the URL wrangler prints (like `https://sss-estimate-ai.<you>.workers.dev`).
4. In `main.js`, set `const AI_ENDPOINT = 'that URL';` and upload `main.js` again.
   The button then reads "Estimate with AI" and results show an AI tag.

Free models have daily request limits and are sometimes busy. When that happens the worker returns an error
and the site quietly falls back to the keyword reader, so visitors always get an estimate.

`ALLOWED_ORIGIN` in `wrangler.toml` limits browser calls to your domain.
