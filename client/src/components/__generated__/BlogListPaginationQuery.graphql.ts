/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type BlogListPaginationQueryVariables = {
    after?: string | null | undefined;
    first: number;
};
export type BlogListPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"BlogList">;
};
export type BlogListPaginationQuery = {
    readonly response: BlogListPaginationQueryResponse;
    readonly variables: BlogListPaginationQueryVariables;
};



/*
query BlogListPaginationQuery(
  $after: String = ""
  $first: Int! = 10
) {
  ...BlogList_2HEEH6
}

fragment BlogListItem on Blog {
  name
}

fragment BlogList_2HEEH6 on Query {
  blogs(first: $first, after: $after) {
    edges {
      node {
        id
        ...BlogListItem
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": "",
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": 10,
    "kind": "LocalArgument",
    "name": "first"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BlogListPaginationQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "BlogList"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BlogListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "BlogConnection",
        "kind": "LinkedField",
        "name": "blogs",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BlogEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Blog",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "BlogList_blogs",
        "kind": "LinkedHandle",
        "name": "blogs"
      }
    ]
  },
  "params": {
    "cacheID": "f9c4c4673ee1e8ef1f3c6243ffcbd682",
    "id": null,
    "metadata": {},
    "name": "BlogListPaginationQuery",
    "operationKind": "query",
    "text": "query BlogListPaginationQuery(\n  $after: String = \"\"\n  $first: Int! = 10\n) {\n  ...BlogList_2HEEH6\n}\n\nfragment BlogListItem on Blog {\n  name\n}\n\nfragment BlogList_2HEEH6 on Query {\n  blogs(first: $first, after: $after) {\n    edges {\n      node {\n        id\n        ...BlogListItem\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '1ff8acad6c65a1013f37f4677f8609a8';
export default node;
