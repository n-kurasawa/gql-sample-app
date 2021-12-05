/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type BlogListQueryVariables = {
    first: number;
};
export type BlogListQueryResponse = {
    readonly blogs: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly name: string;
            } | null;
        } | null> | null;
    };
};
export type BlogListQuery = {
    readonly response: BlogListQueryResponse;
    readonly variables: BlogListQueryVariables;
};



/*
query BlogListQuery(
  $first: Int!
) {
  blogs(first: $first) {
    edges {
      node {
        id
        name
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "first",
        "variableName": "first"
      }
    ],
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
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BlogListQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BlogListQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9472ef63a65c9ffc3fd0c62b7a24e7bd",
    "id": null,
    "metadata": {},
    "name": "BlogListQuery",
    "operationKind": "query",
    "text": "query BlogListQuery(\n  $first: Int!\n) {\n  blogs(first: $first) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3ffed7babc8d4aa3f51c3fa1979847b3';
export default node;
