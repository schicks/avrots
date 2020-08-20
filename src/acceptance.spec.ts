import { Record, Field } from "./record";
import { Array } from "./array";
import { String, Boolean, Int, Long, Double } from "./primitives";
import { LogicalType } from "./logicalType";
import { Named } from "./named";

const resultsForType = Record("resultsForType", {
  type: Field(String()),
  items: Field(Array(String())),
});
const mixedContentItem = Record("mixedContentItem", {
  type: Field(String()),
  id: Field(String()),
  progress: Field({ default: null, type: Double() }),
});
const userQuery = Record("userQuery", {
  id: Field(String()),
  userHandle: Field({ type: String(), default: null }),
  query: Field(String()),
  requestUrl: Field(String()),
  resultsCount: Field(Int()),
  isAutoSuggested: Field({
    type: Boolean(),
    default: null,
    doc:
      "represents whether the user seleted a query suggested by autocomplete",
  }),
  apiClientId: Field({
    type: String(),
    doc: "Unique identifier for the bounded context that the query came from",
  }),
  createdAt: Field(LogicalType(Long(), "timestamp-millis" as any)),
  eventName: Field(String()),
  eventDate: Field(LogicalType(String(), "iso-datetime" as any)),
  queryVariant: Field({
    type: String(),
    default: null,
    doc: "template variant used for this query",
  }),
  queryId: Field({
    type: String(),
    default: null,
    doc: "Unique identifier for Search BC concept of a session",
  }),
  previousQueryId: Field({
    type: String(),
    default: null,
    doc:
      "ID of the query that generated this search session (used with source field)",
  }),
  queryIdResultsHash: Field({
    type: String(),
    default: null,
    doc:
      "Hash of concatenated queryId and topResults['mixed']['results'][*]['id'] fields",
  }),
  topResults: Field({
    default: null,
    type: Record("searchResults", {
      results: Field({
        default: null,
        type: Array(resultsForType),
      }),
      newest: Field({
        default: null,
        type: Array(Named(resultsForType)),
      }),
      mixed: Field({
        default: null,
        type: Record("mixedContent", {
          newest: Field({
            default: null,
            type: Array(mixedContentItem),
          }),
          results: Field(Array(Named(mixedContentItem))),
        }),
      }),
    }),
  }),
  source: Field({ default: null, type: String() }),
});

test("It should generate a sane schema", () => {
  expect(userQuery).toMatchInlineSnapshot(`
    Object {
      "fields": Array [
        Object {
          "name": "id",
          "type": "string",
        },
        Object {
          "default": null,
          "name": "userHandle",
          "type": Array [
            "null",
            "string",
          ],
        },
        Object {
          "name": "query",
          "type": "string",
        },
        Object {
          "name": "requestUrl",
          "type": "string",
        },
        Object {
          "name": "resultsCount",
          "type": "int",
        },
        Object {
          "default": null,
          "doc": "represents whether the user seleted a query suggested by autocomplete",
          "name": "isAutoSuggested",
          "type": Array [
            "null",
            "boolean",
          ],
        },
        Object {
          "doc": "Unique identifier for the bounded context that the query came from",
          "name": "apiClientId",
          "type": "string",
        },
        Object {
          "name": "createdAt",
          "type": Object {
            "logicalType": "timestamp-millis",
            "type": "long",
          },
        },
        Object {
          "name": "eventName",
          "type": "string",
        },
        Object {
          "name": "eventDate",
          "type": Object {
            "logicalType": "iso-datetime",
            "type": "string",
          },
        },
        Object {
          "default": null,
          "doc": "template variant used for this query",
          "name": "queryVariant",
          "type": Array [
            "null",
            "string",
          ],
        },
        Object {
          "default": null,
          "doc": "Unique identifier for Search BC concept of a session",
          "name": "queryId",
          "type": Array [
            "null",
            "string",
          ],
        },
        Object {
          "default": null,
          "doc": "ID of the query that generated this search session (used with source field)",
          "name": "previousQueryId",
          "type": Array [
            "null",
            "string",
          ],
        },
        Object {
          "default": null,
          "doc": "Hash of concatenated queryId and topResults['mixed']['results'][*]['id'] fields",
          "name": "queryIdResultsHash",
          "type": Array [
            "null",
            "string",
          ],
        },
        Object {
          "default": null,
          "name": "topResults",
          "type": Array [
            "null",
            Object {
              "fields": Array [
                Object {
                  "default": null,
                  "name": "results",
                  "type": Array [
                    "null",
                    Object {
                      "items": Object {
                        "fields": Array [
                          Object {
                            "name": "type",
                            "type": "string",
                          },
                          Object {
                            "name": "items",
                            "type": Object {
                              "items": "string",
                              "type": "array",
                            },
                          },
                        ],
                        "name": "resultsForType",
                        "type": "record",
                      },
                      "type": "array",
                    },
                  ],
                },
                Object {
                  "default": null,
                  "name": "newest",
                  "type": Array [
                    "null",
                    Object {
                      "items": "resultsForType",
                      "type": "array",
                    },
                  ],
                },
                Object {
                  "default": null,
                  "name": "mixed",
                  "type": Array [
                    "null",
                    Object {
                      "fields": Array [
                        Object {
                          "default": null,
                          "name": "newest",
                          "type": Array [
                            "null",
                            Object {
                              "items": Object {
                                "fields": Array [
                                  Object {
                                    "name": "type",
                                    "type": "string",
                                  },
                                  Object {
                                    "name": "id",
                                    "type": "string",
                                  },
                                  Object {
                                    "default": null,
                                    "name": "progress",
                                    "type": Array [
                                      "null",
                                      "double",
                                    ],
                                  },
                                ],
                                "name": "mixedContentItem",
                                "type": "record",
                              },
                              "type": "array",
                            },
                          ],
                        },
                        Object {
                          "name": "results",
                          "type": Object {
                            "items": "mixedContentItem",
                            "type": "array",
                          },
                        },
                      ],
                      "name": "mixedContent",
                      "type": "record",
                    },
                  ],
                },
              ],
              "name": "searchResults",
              "type": "record",
            },
          ],
        },
        Object {
          "default": null,
          "name": "source",
          "type": Array [
            "null",
            "string",
          ],
        },
      ],
      "name": "userQuery",
      "type": "record",
    }
  `);
});
