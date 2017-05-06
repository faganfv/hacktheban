# Immigration Rights Hub

## Team: Knowledge is Power from Hack the Ban DC

Making it easy to get answers to your immigration status questions.

## About

The Immigration Rights Hub is a free, comprehensive guide to laws that uniquely affect immigrants. These laws are often hard to find and more difficult to understand, and the Immigration Rights Hubs is designed to help immigrants and advocates easily access information about immigrant rights. Written in plain language for all users to understand, the Immigration Rights Hub provides information in both English and Spanish, and support for additional languages will be added in the future. Each piece of information in the Immigration Rights Hub is sourced and dated, allowing users to know when the information was last updated and to access the source itself.

The Immigration Rights Hub is a project of the Hack The Ban DC team "Knowledge is Power." 

## Content
Lawyers: want to add to our database of answers? Submit a pull request. All submissions will be thoroughly vetted before inclusion in the database.

## Usage
1. Run `npm install`
2. Run `node js/api.js`
3. Visit `http://localhost:3000/` in your browser
4. `curl` an endpoint for questions as JSON objects.
  * Ex: `curl localhost:3000/search?query=law`

### API Endpoints

| Endpoint | Response |
| ---- | ---- |
| /q | Return all questions. |
| /en | Return all questions with an English answer |
| /es | Return all questions with a Spanish answer |
| /search?query=alpha | Return all questions where any field contains "alpha". Not case sensitive. Matches partial words. |
| /search?query=alpha%20beta | Return all questions where a field contains "alpha" and a field contains "beta". Not case sensitive. Matches partial words. |

## Disclaimer
The information provided in the Immigration Rights Hub should not be construed as legal advice. The information is provided for general guidance only, and it is not intended to be comprehensive of all rules and regulations. The Immigration Rights Hub is not a substitute for consultation with an attorney. Knowledge is Power and others who contribute to the Immigration Rights Hub are not responsible for any errors or omissions or for the results obtained from using this information.
