# Hack the Ban DC
## Team: Knowledge is Power

Making it easy to get answers to your immigration status questions.

## Usage
1. Run `node api.js`
2. Visit `http://localhost:3000/` in your browser
3. `curl` an endpoint for questions as JSON objects.
  * Ex: `curl localhost:3000/search?query=law`

### API Endpoints

| Endpoint | Response |
| ---- | ---- |
| / | Return all questions. |
| /en | Return all questions with an English answer |
| /es | Return all questions with a Spanish answer |
| /search?query=alpha | Return all questions where any field contains "alpha". Not case sensitive. Matches partial words. |
| /search?query=alpha%20beta | Return all questions where a field contains "alpha" and a field contains "beta". Not case sensitive. Matches partial words. |

## Content
Lawyers: Want to add to our database of answers? Submit a pull request. All submissions will be vetted by a second lawyer before inclusion in the database.
