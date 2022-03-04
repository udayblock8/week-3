import Prismic from 'prismic-javascript'

export const repoName = 'uday'


// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = `https://${repoName}.cdn.prismic.io/api/v2`

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private

// Never use access tokens and private token directly into code.
// Store them into environment variables and use it from there. 
// Look around how to use env variables from .env in js project
export const accessToken = 'MC5ZaUJNTUJFQUFDY0FCZlI1.77-9d2zvv71ZB--_vS8r77-9bn7vv71UAzQHMu-_vR3vv73vv73vv70i77-9Te-_ve-_ve-_ve-_vT7vv70'

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {

    if (doc.type === 'dashboard') {
        return `/`
    }
}

export const client = Prismic.client(apiEndpoint, {accessToken})

// -- Route Resolver rules
// Manages the url links to internal Prismic documents two levels deep (optionals)
export const routeResolver = {
  routes: [
    {
      "type":"dashboard",
      "path":"/"
    },
  ]
};