/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type BlogListItem = {
    readonly name: string;
    readonly " $refType": "BlogListItem";
};
export type BlogListItem$data = BlogListItem;
export type BlogListItem$key = {
    readonly " $data"?: BlogListItem$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"BlogListItem">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BlogListItem",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Blog",
  "abstractKey": null
};
(node as any).hash = '2c1df6dbf7f94c604bf1d97f744e0223';
export default node;
