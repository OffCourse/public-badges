curl 'https://api.publicbadges.com/pilot/graphql' -H
'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H
'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H
'Origin: https://api.publicbadges.com/pilot/graphql' --data-binary '{"query":"mutation Apply($input: PublicBadgeInput!){\n  applyForBadge(input: $input){\n    badgeId\n    name\n    valueCase {\n      valueCaseId\n    }\n    recipient {\n      organizationId\n      domainName\n      urls\n      name\n      contact {\n        name\n        email\n      }\n      admin {\n        name\n        email\n      }\n    }\n  }\n}","variables":{"input":{"valueCaseId":"88c7a930-3181-11ea-9858-b312ce22102d","domainName":"https://offcurse.io"}}}' --compressed
