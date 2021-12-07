/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type BlogListQueryVariables = {
    first: number;
};
export type BlogListQueryResponse = {
    readonly blogs: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"BlogListItem">;
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
        ...BlogListItem
      }
    }
  }
}

fragment BlogListItem on Blog {
  name
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
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BlogListQuery",
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
                  (v2/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "BlogListItem"
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
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BlogListQuery",
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
                  (v2/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "fe1672d38633fe305f39af60bedb5b85",
    "id": null,
    "metadata": {},
    "name": "BlogListQuery",
    "operationKind": "query",
    "text": "query BlogListQuery(\n  $first: Int!\n) {\n  blogs(first: $first) {\n    edges {\n      node {\n        id\n        ...BlogListItem\n      }\n    }\n  }\n}\n\nfragment BlogListItem on Blog {\n  name\n}\n"
  }
};
})();
(node as any).hash = '90e8138d1d8df8ef38f517c55412f66d';
export default node;
