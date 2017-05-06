# Hack the Ban DC
## Team: Knowledge is Power

Making it easy to get answers to your immigration status questions.

## API Endpoints

| Endpoint | Response |
| ---- | ---- |
| / | Return all questions. |
| /en | Return all questions with an English answer |
| /es | Return all questions with a Spanish answer |
| /search?query=alpha | Return all questions where any field contains "alpha". Not case sensitive. Matches partial words. |
| /search?query=alpha%20beta | Return all questions where a field contains "alpha" and a field contains "beta". Not case sensitive. Matches partial words. |
