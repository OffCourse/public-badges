curl 'https://api.publicbadges.com/pilot/graphql' -H 'Accept-Encoding: gzip,
deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json'
-H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin:
https://api.publicbadges.com/pilot/graphql'--data-binary '{"query":"mutation Register($input: OrganizationInput!){\n  registerOrganization(input: $input) {\n    domainName\n  }\n}","variables":{"input":{"name":"offcourse","domainName":"https://offcourse.io","contact":{"name":"yeehaa","email":"contact@offcourse.io"},"admin":{"name":"yeehaa","email":"contact@offcourse.io"}}}}' --compressed
