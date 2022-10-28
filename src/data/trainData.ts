export type TrainStop = {
  id: string;
  stopName: string;
  stationName: string;
  lat: number;
  lng: number;
}

export type TrainLine = {
  id: string;
  friendlyName: string;
  trainStops: Array<TrainStop>;
  color: string;
}

const rawTrainData = {
  "meta" : {
    "view" : {
      "id" : "8pix-ypme",
      "name" : "CTA - System Information - List of 'L' Stops",
      "assetType" : "dataset",
      "attribution" : "Chicago Transit Authority",
      "attributionLink" : "http://www.transitchicago.com",
      "averageRating" : 0,
      "category" : "Transportation",
      "createdAt" : 1312487600,
      "description" : "This list of 'L' stops provides location and basic service availability information for each place on the CTA system where a train stops, along with formal station names and stop descriptions.",
      "displayType" : "table",
      "downloadCount" : 323467,
      "hideFromCatalog" : false,
      "hideFromDataJson" : false,
      "indexUpdatedAt" : 1526408799,
      "newBackend" : true,
      "numberOfComments" : 0,
      "oid" : 28823540,
      "provenance" : "official",
      "publicationAppendEnabled" : false,
      "publicationDate" : 1526408672,
      "publicationGroup" : 239173,
      "publicationStage" : "published",
      "rowsUpdatedAt" : 1657730155,
      "rowsUpdatedBy" : "6bsn-5494",
      "tableId" : 15202894,
      "totalTimesRated" : 0,
      "viewCount" : 19084,
      "viewLastModified" : 1657730154,
      "viewType" : "tabular",
      "approvals" : [ {
        "reviewedAt" : 1526408672,
        "reviewedAutomatically" : true,
        "state" : "approved",
        "submissionId" : 950207,
        "submissionObject" : "public_audience_request",
        "submissionOutcome" : "change_audience",
        "submittedAt" : 1526408672,
        "workflowId" : 2226,
        "submissionDetails" : {
          "permissionType" : "READ"
        },
        "submissionOutcomeApplication" : {
          "failureCount" : 0,
          "status" : "success"
        },
        "submitter" : {
          "id" : "6bsn-5494",
          "displayName" : "CTA"
        }
      } ],
      "clientContext" : {
        "clientContextVariables" : [ ],
        "inheritedVariables" : { }
      },
      "columns" : [ {
        "id" : -1,
        "name" : "sid",
        "dataTypeName" : "meta_data",
        "fieldName" : ":sid",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : { },
        "flags" : [ "hidden" ]
      }, {
        "id" : -1,
        "name" : "id",
        "dataTypeName" : "meta_data",
        "fieldName" : ":id",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : { },
        "flags" : [ "hidden" ]
      }, {
        "id" : -1,
        "name" : "position",
        "dataTypeName" : "meta_data",
        "fieldName" : ":position",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : { },
        "flags" : [ "hidden" ]
      }, {
        "id" : -1,
        "name" : "created_at",
        "dataTypeName" : "meta_data",
        "fieldName" : ":created_at",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : { },
        "flags" : [ "hidden" ]
      }, {
        "id" : -1,
        "name" : "created_meta",
        "dataTypeName" : "meta_data",
        "fieldName" : ":created_meta",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : { },
        "flags" : [ "hidden" ]
      }, {
        "id" : -1,
        "name" : "updated_at",
        "dataTypeName" : "meta_data",
        "fieldName" : ":updated_at",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : { },
        "flags" : [ "hidden" ]
      }, {
        "id" : -1,
        "name" : "updated_meta",
        "dataTypeName" : "meta_data",
        "fieldName" : ":updated_meta",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : { },
        "flags" : [ "hidden" ]
      }, {
        "id" : -1,
        "name" : "meta",
        "dataTypeName" : "meta_data",
        "fieldName" : ":meta",
        "position" : 0,
        "renderTypeName" : "meta_data",
        "format" : { },
        "flags" : [ "hidden" ]
      }, {
        "id" : 359679198,
        "name" : "STOP_ID",
        "dataTypeName" : "number",
        "fieldName" : "stop_id",
        "position" : 1,
        "renderTypeName" : "number",
        "tableColumnId" : 1504365,
        "width" : 103,
        "cachedContents" : {
          "largest" : "30386",
          "non_null" : "300",
          "average" : "30156.94",
          "null" : "0",
          "top" : [ {
            "item" : "30079",
            "count" : "1"
          }, {
            "item" : "30215",
            "count" : "1"
          }, {
            "item" : "30181",
            "count" : "1"
          }, {
            "item" : "30095",
            "count" : "1"
          }, {
            "item" : "30044",
            "count" : "1"
          }, {
            "item" : "30065",
            "count" : "1"
          }, {
            "item" : "30022",
            "count" : "1"
          }, {
            "item" : "30207",
            "count" : "1"
          }, {
            "item" : "30019",
            "count" : "1"
          }, {
            "item" : "30159",
            "count" : "1"
          }, {
            "item" : "30047",
            "count" : "1"
          }, {
            "item" : "30223",
            "count" : "1"
          }, {
            "item" : "30049",
            "count" : "1"
          }, {
            "item" : "30222",
            "count" : "1"
          }, {
            "item" : "30249",
            "count" : "1"
          }, {
            "item" : "30187",
            "count" : "1"
          }, {
            "item" : "30050",
            "count" : "1"
          }, {
            "item" : "30284",
            "count" : "1"
          }, {
            "item" : "30015",
            "count" : "1"
          }, {
            "item" : "30162",
            "count" : "1"
          } ],
          "smallest" : "30001",
          "count" : "300",
          "sum" : "9047082",
          "cardinality" : "300"
        },
        "format" : {
          "precisionStyle" : "standard",
          "noCommas" : "true",
          "align" : "right",
          "aggregate" : "count"
        }
      }, {
        "id" : 359679199,
        "name" : "DIRECTION_ID",
        "dataTypeName" : "text",
        "description" : "Normal direction of train traffic at platform.",
        "fieldName" : "direction_id",
        "position" : 2,
        "renderTypeName" : "text",
        "tableColumnId" : 2617630,
        "width" : 100,
        "cachedContents" : {
          "largest" : "W",
          "non_null" : "300",
          "null" : "0",
          "top" : [ {
            "item" : "N",
            "count" : "104"
          }, {
            "item" : "S",
            "count" : "104"
          }, {
            "item" : "E",
            "count" : "46"
          }, {
            "item" : "W",
            "count" : "46"
          } ],
          "smallest" : "E",
          "count" : "300",
          "cardinality" : "4"
        },
        "format" : { }
      }, {
        "id" : 359679200,
        "name" : "STOP_NAME",
        "dataTypeName" : "text",
        "fieldName" : "stop_name",
        "position" : 3,
        "renderTypeName" : "text",
        "tableColumnId" : 1504367,
        "width" : 208,
        "cachedContents" : {
          "largest" : "Wilson (Loop-bound)",
          "non_null" : "300",
          "null" : "0",
          "top" : [ {
            "item" : "Kedzie (Loop-bound)",
            "count" : "3"
          }, {
            "item" : "Western (Loop-bound)",
            "count" : "3"
          }, {
            "item" : "Pulaski (Loop-bound)",
            "count" : "2"
          }, {
            "item" : "Howard (Terminal arrival)",
            "count" : "2"
          }, {
            "item" : "Damen (Loop-bound)",
            "count" : "2"
          }, {
            "item" : "43rd (63rd-bound)",
            "count" : "1"
          }, {
            "item" : "35th/Archer (Midway-bound)",
            "count" : "1"
          }, {
            "item" : "35-Bronzeville-IIT (63rd-bound)",
            "count" : "1"
          }, {
            "item" : "47th (Harlem-bound)",
            "count" : "1"
          }, {
            "item" : "47th (95th-bound)",
            "count" : "1"
          }, {
            "item" : "47th (Howard-bound)",
            "count" : "1"
          }, {
            "item" : "51st (63rd-bound)",
            "count" : "1"
          }, {
            "item" : "51st (Harlem-bound)",
            "count" : "1"
          }, {
            "item" : "54th/Cermak (Loop-bound)",
            "count" : "1"
          }, {
            "item" : "35th/Archer (Loop-bound)",
            "count" : "1"
          }, {
            "item" : "69th (95th-bound)",
            "count" : "1"
          }, {
            "item" : "63rd (Howard-bound)",
            "count" : "1"
          }, {
            "item" : "47th (63rd-bound)",
            "count" : "1"
          }, {
            "item" : "69th (Howard-bound)",
            "count" : "1"
          }, {
            "item" : "63rd (95th-bound)",
            "count" : "1"
          } ],
          "smallest" : "18th (54th/Cermak-bound)",
          "count" : "300",
          "cardinality" : "293"
        },
        "format" : { }
      }, {
        "id" : 359679201,
        "name" : "STATION_NAME",
        "dataTypeName" : "text",
        "fieldName" : "station_name",
        "position" : 4,
        "renderTypeName" : "text",
        "tableColumnId" : 1504368,
        "width" : 201,
        "cachedContents" : {
          "largest" : "Wilson",
          "non_null" : "300",
          "null" : "0",
          "top" : [ {
            "item" : "Western",
            "count" : "10"
          }, {
            "item" : "Pulaski",
            "count" : "8"
          }, {
            "item" : "Kedzie",
            "count" : "8"
          }, {
            "item" : "Damen",
            "count" : "6"
          }, {
            "item" : "California",
            "count" : "6"
          }, {
            "item" : "Addison",
            "count" : "6"
          }, {
            "item" : "Chicago",
            "count" : "6"
          }, {
            "item" : "Cicero",
            "count" : "6"
          }, {
            "item" : "Belmont",
            "count" : "6"
          }, {
            "item" : "Harlem",
            "count" : "4"
          }, {
            "item" : "Jackson",
            "count" : "4"
          }, {
            "item" : "Grand",
            "count" : "4"
          }, {
            "item" : "Halsted",
            "count" : "4"
          }, {
            "item" : "Ashland",
            "count" : "4"
          }, {
            "item" : "Wilson",
            "count" : "4"
          }, {
            "item" : "Austin",
            "count" : "4"
          }, {
            "item" : "47th",
            "count" : "4"
          }, {
            "item" : "Oak Park",
            "count" : "4"
          }, {
            "item" : "Irving Park",
            "count" : "4"
          }, {
            "item" : "Howard",
            "count" : "4"
          } ],
          "smallest" : "18th",
          "count" : "300",
          "cardinality" : "108"
        },
        "format" : { }
      }, {
        "id" : 359679202,
        "name" : "STATION_DESCRIPTIVE_NAME",
        "dataTypeName" : "text",
        "description" : "A more fully descriptive name of a station.",
        "fieldName" : "station_descriptive_name",
        "position" : 5,
        "renderTypeName" : "text",
        "tableColumnId" : 2898204,
        "width" : 405,
        "cachedContents" : {
          "largest" : "Wilson (Red & Purple lines)",
          "non_null" : "300",
          "null" : "0",
          "top" : [ {
            "item" : "Sheridan (Red Line)",
            "count" : "4"
          }, {
            "item" : "Belmont (Red, Brown & Purple lines)",
            "count" : "4"
          }, {
            "item" : "Howard (Red, Purple & Yellow lines)",
            "count" : "4"
          }, {
            "item" : "Wilson (Red & Purple lines)",
            "count" : "4"
          }, {
            "item" : "Roosevelt (Red, Orange & Green lines)",
            "count" : "4"
          }, {
            "item" : "Clark/Lake (Blue, Brown, Green, Orange, Purple & Pink lines)",
            "count" : "4"
          }, {
            "item" : "Fullerton (Red, Brown & Purple lines)",
            "count" : "4"
          }, {
            "item" : "54th/Cermak (Pink Line)",
            "count" : "2"
          }, {
            "item" : "63rd (Red Line)",
            "count" : "2"
          }, {
            "item" : "69th (Red Line)",
            "count" : "2"
          }, {
            "item" : "79th (Red Line)",
            "count" : "2"
          }, {
            "item" : "87th (Red Line)",
            "count" : "2"
          }, {
            "item" : "95th/Dan Ryan (Red Line)",
            "count" : "2"
          }, {
            "item" : "Adams/Wabash (Brown, Green, Orange, Pink & Purple lines)",
            "count" : "2"
          }, {
            "item" : "Addison (Blue Line)",
            "count" : "2"
          }, {
            "item" : "Addison (Brown Line)",
            "count" : "2"
          }, {
            "item" : "Addison (Red Line)",
            "count" : "2"
          }, {
            "item" : "Argyle (Red Line)",
            "count" : "2"
          }, {
            "item" : "Armitage (Brown & Purple lines)",
            "count" : "2"
          }, {
            "item" : "Ashland/63rd (Green Line)",
            "count" : "2"
          } ],
          "smallest" : "18th (Pink Line)",
          "count" : "300",
          "cardinality" : "144"
        },
        "format" : { }
      }, {
        "id" : 359679203,
        "name" : "MAP_ID",
        "dataTypeName" : "number",
        "fieldName" : "map_id",
        "position" : 6,
        "renderTypeName" : "number",
        "tableColumnId" : 1504369,
        "width" : 103,
        "cachedContents" : {
          "largest" : "41700",
          "non_null" : "300",
          "average" : "40788.46666666667",
          "null" : "0",
          "top" : [ {
            "item" : "41220",
            "count" : "4"
          }, {
            "item" : "40080",
            "count" : "4"
          }, {
            "item" : "41400",
            "count" : "4"
          }, {
            "item" : "41320",
            "count" : "4"
          }, {
            "item" : "40540",
            "count" : "4"
          }, {
            "item" : "40900",
            "count" : "4"
          }, {
            "item" : "40380",
            "count" : "4"
          }, {
            "item" : "40690",
            "count" : "2"
          }, {
            "item" : "41260",
            "count" : "2"
          }, {
            "item" : "40100",
            "count" : "2"
          }, {
            "item" : "40040",
            "count" : "2"
          }, {
            "item" : "41290",
            "count" : "2"
          }, {
            "item" : "40170",
            "count" : "2"
          }, {
            "item" : "41020",
            "count" : "2"
          }, {
            "item" : "40150",
            "count" : "2"
          }, {
            "item" : "40720",
            "count" : "2"
          }, {
            "item" : "41430",
            "count" : "2"
          }, {
            "item" : "41160",
            "count" : "2"
          }, {
            "item" : "41040",
            "count" : "2"
          }, {
            "item" : "40600",
            "count" : "2"
          } ],
          "smallest" : "40010",
          "count" : "300",
          "sum" : "12236540",
          "cardinality" : "143"
        },
        "format" : {
          "precisionStyle" : "standard",
          "noCommas" : "true",
          "align" : "right"
        }
      }, {
        "id" : 359679204,
        "name" : "ADA",
        "dataTypeName" : "checkbox",
        "fieldName" : "ada",
        "position" : 7,
        "renderTypeName" : "checkbox",
        "tableColumnId" : 1504370,
        "width" : 136,
        "cachedContents" : {
          "non_null" : "300",
          "null" : "0",
          "top" : [ {
            "item" : true,
            "count" : "214"
          }, {
            "item" : false,
            "count" : "86"
          } ],
          "count" : "300",
          "cardinality" : "2"
        },
        "format" : { }
      }, {
        "id" : 359679205,
        "name" : "RED",
        "dataTypeName" : "checkbox",
        "fieldName" : "red",
        "position" : 8,
        "renderTypeName" : "checkbox",
        "tableColumnId" : 1504371,
        "width" : 136,
        "cachedContents" : {
          "non_null" : "300",
          "null" : "0",
          "top" : [ {
            "item" : false,
            "count" : "234"
          }, {
            "item" : true,
            "count" : "66"
          } ],
          "count" : "300",
          "cardinality" : "2"
        },
        "format" : { }
      }, {
        "id" : 359679206,
        "name" : "BLUE",
        "dataTypeName" : "checkbox",
        "fieldName" : "blue",
        "position" : 9,
        "renderTypeName" : "checkbox",
        "tableColumnId" : 1504372,
        "width" : 148,
        "cachedContents" : {
          "non_null" : "300",
          "null" : "0",
          "top" : [ {
            "item" : false,
            "count" : "234"
          }, {
            "item" : true,
            "count" : "66"
          } ],
          "count" : "300",
          "cardinality" : "2"
        },
        "format" : { }
      }, {
        "id" : 359679207,
        "name" : "G",
        "dataTypeName" : "checkbox",
        "fieldName" : "g",
        "position" : 10,
        "renderTypeName" : "checkbox",
        "tableColumnId" : 1504373,
        "width" : 112,
        "cachedContents" : {
          "non_null" : "300",
          "null" : "0",
          "top" : [ {
            "item" : false,
            "count" : "240"
          }, {
            "item" : true,
            "count" : "60"
          } ],
          "count" : "300",
          "cardinality" : "2"
        },
        "format" : { }
      }, {
        "id" : 359679208,
        "name" : "BRN",
        "dataTypeName" : "checkbox",
        "fieldName" : "brn",
        "position" : 11,
        "renderTypeName" : "checkbox",
        "tableColumnId" : 1504374,
        "width" : 136,
        "cachedContents" : {
          "non_null" : "300",
          "null" : "0",
          "top" : [ {
            "item" : false,
            "count" : "254"
          }, {
            "item" : true,
            "count" : "46"
          } ],
          "count" : "300",
          "cardinality" : "2"
        },
        "format" : { }
      }, {
        "id" : 359679209,
        "name" : "P",
        "dataTypeName" : "checkbox",
        "fieldName" : "p",
        "position" : 12,
        "renderTypeName" : "checkbox",
        "tableColumnId" : 1504375,
        "width" : 112,
        "cachedContents" : {
          "non_null" : "300",
          "null" : "0",
          "top" : [ {
            "item" : false,
            "count" : "282"
          }, {
            "item" : true,
            "count" : "18"
          } ],
          "count" : "300",
          "cardinality" : "2"
        },
        "format" : { }
      }, {
        "id" : 359679210,
        "name" : "Pexp",
        "dataTypeName" : "checkbox",
        "fieldName" : "pexp",
        "position" : 13,
        "renderTypeName" : "checkbox",
        "tableColumnId" : 1504376,
        "width" : 148,
        "cachedContents" : {
          "non_null" : "300",
          "null" : "0",
          "top" : [ {
            "item" : false,
            "count" : "256"
          }, {
            "item" : true,
            "count" : "44"
          } ],
          "count" : "300",
          "cardinality" : "2"
        },
        "format" : { }
      }, {
        "id" : 359679211,
        "name" : "Y",
        "dataTypeName" : "checkbox",
        "fieldName" : "y",
        "position" : 14,
        "renderTypeName" : "checkbox",
        "tableColumnId" : 1504377,
        "width" : 112,
        "cachedContents" : {
          "non_null" : "300",
          "null" : "0",
          "top" : [ {
            "item" : false,
            "count" : "294"
          }, {
            "item" : true,
            "count" : "6"
          } ],
          "count" : "300",
          "cardinality" : "2"
        },
        "format" : { }
      }, {
        "id" : 359679213,
        "name" : "Pnk",
        "dataTypeName" : "checkbox",
        "fieldName" : "pnk",
        "position" : 15,
        "renderTypeName" : "checkbox",
        "tableColumnId" : 1504378,
        "width" : 136,
        "cachedContents" : {
          "non_null" : "300",
          "null" : "0",
          "top" : [ {
            "item" : false,
            "count" : "264"
          }, {
            "item" : true,
            "count" : "36"
          } ],
          "count" : "300",
          "cardinality" : "2"
        },
        "format" : { }
      }, {
        "id" : 359679214,
        "name" : "O",
        "dataTypeName" : "checkbox",
        "fieldName" : "o",
        "position" : 16,
        "renderTypeName" : "checkbox",
        "tableColumnId" : 1504379,
        "width" : 112,
        "cachedContents" : {
          "non_null" : "300",
          "null" : "0",
          "top" : [ {
            "item" : false,
            "count" : "276"
          }, {
            "item" : true,
            "count" : "24"
          } ],
          "count" : "300",
          "cardinality" : "2"
        },
        "format" : { }
      }, {
        "id" : 359679215,
        "name" : "Location",
        "dataTypeName" : "location",
        "fieldName" : "location",
        "position" : 17,
        "renderTypeName" : "location",
        "tableColumnId" : 1504380,
        "width" : 196,
        "format" : { },
        "subColumnTypes" : [ "human_address", "latitude", "longitude", "machine_address", "needs_recoding" ]
      }, {
        "id" : 203619840,
        "name" : "Historical Wards 2003-2015",
        "dataTypeName" : "number",
        "fieldName" : ":@computed_region_awaf_s7ux",
        "position" : 22,
        "renderTypeName" : "number",
        "tableColumnId" : 28002087,
        "computationStrategy" : {
          "source_columns" : [ "location" ],
          "type" : "georegion_match_on_point",
          "parameters" : {
            "region" : "_awaf-s7ux",
            "primary_key" : "_feature_id"
          }
        },
        "format" : { }
      }, {
        "id" : 203619841,
        "name" : "Zip Codes",
        "dataTypeName" : "number",
        "fieldName" : ":@computed_region_6mkv_f3dw",
        "position" : 23,
        "renderTypeName" : "number",
        "tableColumnId" : 28002088,
        "computationStrategy" : {
          "source_columns" : [ "location" ],
          "type" : "georegion_match_on_point",
          "parameters" : {
            "region" : "_6mkv-f3dw",
            "primary_key" : "_feature_id"
          }
        },
        "format" : { }
      }, {
        "id" : 203619842,
        "name" : "Community Areas",
        "dataTypeName" : "number",
        "fieldName" : ":@computed_region_vrxf_vc4k",
        "position" : 24,
        "renderTypeName" : "number",
        "tableColumnId" : 28002089,
        "computationStrategy" : {
          "source_columns" : [ "location" ],
          "type" : "georegion_match_on_point",
          "parameters" : {
            "region" : "_vrxf-vc4k",
            "primary_key" : "_feature_id"
          }
        },
        "format" : { }
      }, {
        "id" : 203619843,
        "name" : "Census Tracts",
        "dataTypeName" : "number",
        "fieldName" : ":@computed_region_bdys_3d7i",
        "position" : 25,
        "renderTypeName" : "number",
        "tableColumnId" : 28002090,
        "computationStrategy" : {
          "source_columns" : [ "location" ],
          "type" : "georegion_match_on_point",
          "parameters" : {
            "region" : "_bdys-3d7i",
            "primary_key" : "_feature_id"
          }
        },
        "format" : { }
      }, {
        "id" : 203619844,
        "name" : "Wards",
        "dataTypeName" : "number",
        "fieldName" : ":@computed_region_43wa_7qmu",
        "position" : 26,
        "renderTypeName" : "number",
        "tableColumnId" : 28002092,
        "computationStrategy" : {
          "source_columns" : [ "location" ],
          "type" : "georegion_match_on_point",
          "parameters" : {
            "region" : "_43wa-7qmu",
            "primary_key" : "_feature_id"
          }
        },
        "format" : { }
      } ],
      "grants" : [ {
        "inherited" : false,
        "type" : "viewer",
        "flags" : [ "public" ]
      } ],
      "metadata" : {
        "rdfSubject" : "0",
        "jsonQuery" : {
          "order" : [ {
            "columnFieldName" : "station_name",
            "ascending" : true
          } ]
        },
        "custom_fields" : {
          "Metadata" : {
            "Last Updated Date via Automated Load" : "",
            "Time Period" : "",
            "Frequency" : "",
            "Data Owner" : "Chicago Transit Authority "
          }
        },
        "availableDisplayTypes" : [ "table", "fatrow", "page" ],
        "renderTypeConfig" : {
          "visible" : {
            "table" : true
          }
        }
      },
      "owner" : {
        "id" : "6bsn-5494",
        "displayName" : "CTA",
        "profileImageUrlLarge" : "/api/users/6bsn-5494/profile_images/LARGE",
        "profileImageUrlMedium" : "/api/users/6bsn-5494/profile_images/THUMB",
        "profileImageUrlSmall" : "/api/users/6bsn-5494/profile_images/TINY",
        "screenName" : "CTA",
        "type" : "interactive",
        "flags" : [ "acceptedEula" ]
      },
      "query" : {
        "orderBys" : [ {
          "ascending" : true,
          "expression" : {
            "columnId" : 359679201,
            "type" : "column"
          }
        } ]
      },
      "rights" : [ "read" ],
      "tableAuthor" : {
        "id" : "6bsn-5494",
        "displayName" : "CTA",
        "profileImageUrlLarge" : "/api/users/6bsn-5494/profile_images/LARGE",
        "profileImageUrlMedium" : "/api/users/6bsn-5494/profile_images/THUMB",
        "profileImageUrlSmall" : "/api/users/6bsn-5494/profile_images/TINY",
        "screenName" : "CTA",
        "type" : "interactive",
        "flags" : [ "acceptedEula" ]
      },
      "tags" : [ "cta", "public transit", "rail", "stations", "sustainability" ],
      "flags" : [ "default", "ownerMayBeContacted", "restorable", "restorePossibleForType", "unsaved" ]
    }
  },
  "data" : [ [ "row-iy3n.zuvk~ztp5", "00000000-0000-0000-D89E-5B06E3875EDA", 0, 1657730154, null, 1657730159, null, "{ }", "30082", "E", "Cicero (Loop-bound)", "Cicero", "Cicero (Pink Line)", "40420", true, false, false, false, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.85182", "-87.745336", null, false ], null, "4458", null, null, null ]
, [ "row-wusu.4gbu~t2ab", "00000000-0000-0000-9AAF-1B64DCDA2D22", 0, 1657730154, null, 1657730159, null, "{ }", "30151", "E", "Central Park (Loop-bound)", "Central Park", "Central Park (Pink Line)", "40780", true, false, false, false, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.853839", "-87.714842", null, false ], "36", "21569", "30", "157", "14" ]
, [ "row-y3us_jmnz~39m6", "00000000-0000-0000-E9EA-8BA88373CC6D", 0, 1657730154, null, 1657730159, null, "{ }", "30184", "W", "Halsted/63rd (Ashland-bound)", "Halsted", "Halsted (Green Line)", "40940", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.778943", "-87.644244", null, false ], "53", "21559", "66", "435", "4" ]
, [ "row-8n6b.sg4a.gzqr", "00000000-0000-0000-BAFA-327674BD6E66", 0, 1657730154, null, 1657730159, null, "{ }", "30044", "N", "Cumberland (O'Hare-bound)", "Cumberland", "Cumberland (Blue Line)", "40230", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.984246", "-87.838028", null, false ], "34", "22243", "75", "64", "29" ]
, [ "row-34tw-w7mc~6t9p", "00000000-0000-0000-F00A-13E7EE3BAA5D", 0, 1657730154, null, 1657730159, null, "{ }", "30092", "E", "Racine (O'Hare-bound)", "Racine", "Racine (Blue Line)", "40470", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.87592", "-87.659458", null, false ], "48", "14917", "29", "88", "23" ]
, [ "row-hyhe.ebyg~dkk6", "00000000-0000-0000-2A0E-58180EF84297", 0, 1657730154, null, 1657730159, null, "{ }", "30253", "N", "Paulina (Kimball-bound)", "Paulina", "Paulina (Brown Line)", "41310", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.943623", "-87.670907", null, false ], "16", "4449", "57", "239", "18" ]
, [ "row-8qi8~59n3-ffup", "00000000-0000-0000-85F6-592AD1325701", 0, 1657730154, null, 1657730159, null, "{ }", "30162", "W", "18th (54th/Cermak-bound)", "18th", "18th (Pink Line)", "40830", true, false, false, false, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.857908", "-87.669147", null, false ], "8", "14920", "33", "343", "26" ]
, [ "row-ggu9_yqg7~2gqk", "00000000-0000-0000-30D7-7EBDBCA687C5", 0, 1657730154, null, 1657730159, null, "{ }", "30374", "S", "Clark/Lake (Forest Pk-bound)", "Clark/Lake", "Clark/Lake (Blue, Brown, Green, Orange, Purple & Pink lines)", "40380", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.885737", "-87.630886", null, false ], "22", "14309", "38", "92", "36" ]
, [ "row-vjew~8es2_92im", "00000000-0000-0000-F056-CBCD001BAD3C", 0, 1657730154, null, 1657730159, null, "{ }", "30248", "S", "Jefferson Park (Forest Pk-bound)", "Jefferson Park", "Jefferson Park (Blue Line)", "41280", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.970634", "-87.760892", null, false ], "20", "21869", "11", "129", "50" ]
, [ "row-i7xb-cnxz-kca8", "00000000-0000-0000-69B4-571875090F22", 0, 1657730154, null, 1657730159, null, "{ }", "30104", "S", "Diversey (Loop-bound)", "Diversey", "Diversey (Brown & Purple lines)", "40530", true, false, false, false, true, false, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.932732", "-87.653131", null, false ], "38", "21190", "57", "681", "25" ]
, [ "row-2pji_yqvr.hcri", "00000000-0000-0000-4AF9-D5262042533C", 0, 1657730154, null, 1657730159, null, "{ }", "30287", "N", "Montrose (Kimball-bound)", "Montrose", "Montrose (Brown Line)", "41500", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.961756", "-87.675047", null, false ], "13", "22616", "6", "225", "18" ]
, [ "row-scvj~s4up-cqk7", "00000000-0000-0000-E33E-381386A25D3A", 0, 1657730154, null, 1657730159, null, "{ }", "30068", "E", "UIC-Halsted (O'Hare-bound)", "UIC-Halsted", "UIC-Halsted (Blue Line)", "40350", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.875474", "-87.649707", null, false ], "48", "14917", "29", "97", "26" ]
, [ "row-nt8m.339d.fapr", "00000000-0000-0000-0C6F-E6BFD4500B91", 0, 1657730154, null, 1657730159, null, "{ }", "30214", "S", "35-Bronzeville-IIT (63rd-bound)", "35th-Bronzeville-IIT", "35th-Bronzeville-IIT (Green Line)", "41120", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.831677", "-87.625826", null, false ], "12", "21194", "1", "25", "9" ]
, [ "row-ih5r-yecp~qck6", "00000000-0000-0000-9BDC-AC66D2481A22", 0, 1657730154, null, 1657730159, null, "{ }", "30102", "S", "Foster (Howard-Loop-bound)", "Foster", "Foster (Purple Line)", "40520", false, false, false, false, false, true, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.05416", "-87.68356", null, false ], null, "26293", null, null, null ]
, [ "row-tjrw~hd6p.enik", "00000000-0000-0000-61FF-35112E5204CC", 0, 1657730154, null, 1657730159, null, "{ }", "30008", "S", "Quincy/Wells (Outer Loop)", "Quincy/Wells", "Quincy/Wells (Brown, Orange, Purple & Pink lines)", "40040", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.878723", "-87.63374", null, false ], "22", "14912", "38", "92", "36" ]
, [ "row-gh8p_v8pe-9r4f", "00000000-0000-0000-1644-BC61AC98C75E", 0, 1657730154, null, 1657730159, null, "{ }", "30070", "N", "Southport (Kimball-bound)", "Southport", "Southport (Brown Line)", "40360", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.943744", "-87.663619", null, false ], "38", "4449", "57", "729", "25" ]
, [ "row-6i3x-e9kf-sqk4", "00000000-0000-0000-A76E-84D2F0B37C21", 0, 1657730154, null, 1657730159, null, "{ }", "30252", "S", "Loyola (95th-bound)", "Loyola", "Loyola (Red Line)", "41300", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.001073", "-87.661061", null, false ], "3", "21853", "10", "48", "5" ]
, [ "row-ix34-8yhy.afry", "00000000-0000-0000-5062-92893D6C9995", 0, 1657730154, null, 1657730159, null, "{ }", "30237", "N", "47th (Howard-bound)", "47th", "47th (Red Line)", "41230", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.810318", "-87.63094", null, false ], "12", "14924", "3", "189", "9" ]
, [ "row-n2yx~upff_khxb", "00000000-0000-0000-98ED-CF83B87295DC", 0, 1657730154, null, 1657730159, null, "{ }", "30267", "N", "Bryn Mawr (Howard-bound)", "Bryn Mawr", "Bryn Mawr (Red Line)", "41380", false, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.983504", "-87.65884", null, false ], "40", "22616", "76", "145", "16" ]
, [ "row-hbrh~gpjk-zruk", "00000000-0000-0000-F47E-1C81AAF2A570", 0, 1657730154, null, 1657730159, null, "{ }", "30190", "W", "Harlem (Forest Pk Branch) (Terminal arrival)", "Harlem", "Harlem (Blue Line - Forest Park Branch)", "40980", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.87349", "-87.806961", null, false ], null, "15606", null, null, null ]
, [ "row-dmmh~94an_ngi3", "00000000-0000-0000-6C82-EF5874735ADB", 0, 1657730154, null, 1657730159, null, "{ }", "30173", "N", "Howard (Terminal arrival)", "Howard", "Howard (Red, Purple & Yellow lines)", "40900", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.019063", "-87.672892", null, false ], "3", "21853", "10", "489", "5" ]
, [ "row-sz9b_7vrt-fc76", "00000000-0000-0000-479D-10A314EB2177", 0, 1657730154, null, 1657730159, null, "{ }", "30207", "E", "Kedzie (63rd-bound)", "Kedzie", "Kedzie (Green Line)", "41070", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.884321", "-87.706155", null, false ], "41", "21184", "28", "50", "46" ]
, [ "row-r8hp~deha~ss53", "00000000-0000-0000-76B5-8FD3CABDF903", 0, 1657730154, null, 1657730159, null, "{ }", "30218", "W", "King Drive (Harlem-bound)", "King Drive", "King Drive (Green Line)", "41140", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.78013", "-87.615546", null, false ], "53", "22260", "9", "332", "4" ]
, [ "row-78xb_uvya_iyn9", "00000000-0000-0000-5079-6F4215C78B2E", 0, 1657730154, null, 1657730159, null, "{ }", "30057", "W", "Ashland/63rd (Terminal arrival)", "Ashland/63rd", "Ashland/63rd (Green Line)", "40290", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.77886", "-87.663766", null, false ], "19", "22257", "65", "279", "2" ]
, [ "row-ege3.qjkm.se29", "00000000-0000-0000-CA63-053383425166", 0, 1657730154, null, 1657730159, null, "{ }", "30088", "N", "95th/Dan Ryan (Howard-bound)", "95th/Dan Ryan", "95th/Dan Ryan (Red Line)", "40450", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.722377", "-87.624342", null, false ], "18", "21861", "45", "187", "13" ]
, [ "row-xuf5.iv9w_nv3h", "00000000-0000-0000-4F74-31B8DE998266", 0, 1657730154, null, 1657730159, null, "{ }", "30129", "N", "Western (O'Hare Branch) (O'Hare-bound)", "Western", "Western (Blue Line - O'Hare Branch)", "40670", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.916157", "-87.687364", null, false ], "24", "22535", "23", "373", "40" ]
, [ "row-rrfu.v9h2.x822", "00000000-0000-0000-31BD-25CBAEF80B0F", 0, 1657730154, null, 1657730159, null, "{ }", "30128", "S", "Armitage (Loop-bound)", "Armitage", "Armitage (Brown & Purple lines)", "40660", true, false, false, false, true, false, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.918217", "-87.652644", null, false ], "51", "21190", "68", "744", "34" ]
, [ "row-ys56~3str.frt4", "00000000-0000-0000-DD30-B7AD415E8674", 0, 1657730154, null, 1657730159, null, "{ }", "30089", "S", "95th/Dan Ryan (95th-bound)", "95th/Dan Ryan", "95th/Dan Ryan (Red Line)", "40450", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.722377", "-87.624342", null, false ], "18", "21861", "45", "187", "13" ]
, [ "row-wmmv.twsf.r8g4", "00000000-0000-0000-285A-97FCA8D5E60B", 0, 1657730154, null, 1657730159, null, "{ }", "30269", "N", "Roosevelt (Howard-bound)", "Roosevelt", "Roosevelt (Red, Orange & Green lines)", "41400", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.867368", "-87.627402", null, false ], "48", "14913", "34", "374", "9" ]
, [ "row-5c3w.bk8n~2ayd", "00000000-0000-0000-2216-6EA9D183AB45", 0, 1657730154, null, 1657730159, null, "{ }", "30256", "S", "Belmont (95th-bound)", "Belmont", "Belmont (Red, Brown & Purple lines)", "41320", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.939751", "-87.65338", null, false ], "38", "4449", "57", "681", "25" ]
, [ "row-5whz~th6w.9473", "00000000-0000-0000-2356-7A0F8991BA62", 0, 1657730154, null, 1657730159, null, "{ }", "30114", "W", "54th/Cermak (Terminal arrival)", "54th/Cermak", "54th/Cermak (Pink Line)", "40580", true, false, false, false, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.85177331", "-87.75669201", null, false ], null, "4458", null, null, null ]
, [ "row-ibmi~yzqf-vdas", "00000000-0000-0000-1492-C8EC2F7CE790", 0, 1657730154, null, 1657730159, null, "{ }", "30217", "E", "King Drive (Cottage Grove-bound)", "King Drive", "King Drive (Green Line)", "41140", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.78013", "-87.615546", null, false ], "53", "22260", "9", "332", "4" ]
, [ "row-8c5j.vzev.n8m5", "00000000-0000-0000-3BDE-1BC1BB5C217E", 0, 1657730154, null, 1657730159, null, "{ }", "30134", "S", "Dempster (Howard-Loop-bound)", "Dempster", "Dempster (Purple Line)", "40690", false, false, false, false, false, true, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.041655", "-87.681602", null, false ], null, "26293", null, null, null ]
, [ "row-5v7w~gpc4-zpqb", "00000000-0000-0000-8D8D-57D95257FAB6", 0, 1657730154, null, 1657730159, null, "{ }", "30236", "S", "Fullerton (Loop-bound)", "Fullerton", "Fullerton (Red, Brown & Purple lines)", "41220", true, false, false, false, true, false, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.925051", "-87.652866", null, false ], "51", "21190", "68", "744", "34" ]
, [ "row-qjwg_y9cb-mn3n", "00000000-0000-0000-238C-CCBF78B1BE6E", 0, 1657730154, null, 1657730159, null, "{ }", "30149", "N", "Lawrence (Howard-bound)", "Lawrence", "Lawrence (Red Line)", "40770", false, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.969139", "-87.658493", null, false ], "40", "22616", "31", "634", "39" ]
, [ "row-gq4z~g8ja-uh4s", "00000000-0000-0000-79A6-65E94D1A6BEC", 0, 1657730154, null, 1657730159, null, "{ }", "30158", "W", "Illinois Medical District (Forest Pk-bound)", "Illinois Medical District", "Illinois Medical District (Blue Line)", "40810", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.875706", "-87.673932", null, false ], "48", "21184", "29", "90", "46" ]
, [ "row-f8r8_98v2~c5rx", "00000000-0000-0000-220A-FD984DF83E66", 0, 1657730154, null, 1657730159, null, "{ }", "30290", "S", "Lake (95th-bound)", "Lake", "Lake (Red Line)", "41660", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.884809", "-87.627813", null, false ], "22", "14309", "38", "580", "36" ]
, [ "row-wzuk_fjbd.bfqs", "00000000-0000-0000-D393-2ED96992FBAF", 0, 1657730154, null, 1657730159, null, "{ }", "30047", "S", "79th (95th-bound)", "79th", "79th (Red Line)", "40240", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.750419", "-87.625112", null, false ], "31", "21554", "40", "1", "32" ]
, [ "row-usxj_vufv.y7ci", "00000000-0000-0000-D405-ABD49708F1ED", 0, 1657730154, null, 1657730159, null, "{ }", "30243", "E", "Austin (63rd-bound)", "Austin", "Austin (Green Line)", "41260", false, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.887293", "-87.774135", null, false ], "52", "22216", "26", "672", "7" ]
, [ "row-2h2u_m2fq-zctz", "00000000-0000-0000-A7E0-97755041D00E", 0, 1657730154, null, 1657730159, null, "{ }", "30084", "E", "Clinton (O'Hare-bound)", "Clinton", "Clinton (Blue Line)", "40430", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.875539", "-87.640984", null, false ], "48", "14917", "29", "97", "26" ]
, [ "row-xx5a~iy7z_fjeb", "00000000-0000-0000-99CE-BB9A6D173AAB", 0, 1657730154, null, 1657730159, null, "{ }", "30231", "N", "Wellington (Kimball-Linden-bound)", "Wellington", "Wellington (Brown & Purple lines)", "41210", true, false, false, false, true, false, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.936033", "-87.653266", null, false ], "38", "4449", "57", "681", "25" ]
, [ "row-878x.g32s.kd9x", "00000000-0000-0000-1560-56EADA4C1CCB", 0, 1657730154, null, 1657730159, null, "{ }", "30175", "N", "Howard (Linden, Skokie-bound)", "Howard", "Howard (Red, Purple & Yellow lines)", "40900", true, false, false, false, false, true, true, true, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.019063", "-87.672892", null, false ], "3", "21853", "10", "489", "5" ]
, [ "row-2xew~znum-hfmj", "00000000-0000-0000-DB9E-B684F2AC230A", 0, 1657730154, null, 1657730159, null, "{ }", "30263", "E", "Oak Park (63rd-bound)", "Oak Park", "Oak Park (Green Line)", "41350", false, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.886988", "-87.793783", null, false ], null, "26611", null, null, null ]
, [ "row-3fu9-vgqe_kpca", "00000000-0000-0000-5A9B-06A38DDC4D8F", 0, 1657730154, null, 1657730159, null, "{ }", "30130", "S", "Western (O'Hare Branch) (Forest Pk-bound)", "Western", "Western (Blue Line - O'Hare Branch)", "40670", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.916157", "-87.687364", null, false ], "24", "22535", "23", "373", "40" ]
, [ "row-xv3d.jzzg_ndnk", "00000000-0000-0000-B866-D8D9B8D8465F", 0, 1657730154, null, 1657730159, null, "{ }", "30268", "S", "Bryn Mawr (95th-bound)", "Bryn Mawr", "Bryn Mawr (Red Line)", "41380", false, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.983504", "-87.65884", null, false ], "40", "22616", "76", "145", "16" ]
, [ "row-7pku.rph2_pcht", "00000000-0000-0000-E165-6B8B76E99F43", 0, 1657730154, null, 1657730159, null, "{ }", "30279", "N", "Chicago (Howard-bound)", "Chicago", "Chicago (Red Line)", "41450", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.896671", "-87.628176", null, false ], "22", "21182", "37", "626", "36" ]
, [ "row-xxkq-w7t9.jr7h", "00000000-0000-0000-0249-CC3221407C7F", 0, 1657730154, null, 1657730159, null, "{ }", "30155", "N", "Sedgwick (Kimball-Linden-bound)", "Sedgwick", "Sedgwick (Brown & Purple lines)", "40800", true, false, false, false, true, false, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.910409", "-87.639302", null, false ], "51", "14926", "37", "309", "11" ]
, [ "row-mksv_44sy~xfxh", "00000000-0000-0000-1CEA-20A99F1BEA11", 0, 1657730154, null, 1657730159, null, "{ }", "30239", "N", "Addison (O'Hare-bound)", "Addison", "Addison (Blue Line)", "41240", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.94738", "-87.71906", null, false ], "15", "21538", "16", "326", "50" ]
, [ "row-ppaw-7rsg.ni6q", "00000000-0000-0000-9D08-C85726C364BD", 0, 1657730154, null, 1657730159, null, "{ }", "30288", "S", "Montrose (Loop-bound)", "Montrose", "Montrose (Brown Line)", "41500", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.961756", "-87.675047", null, false ], "13", "22616", "6", "225", "18" ]
, [ "row-kvkp-6wqr~fiqw", "00000000-0000-0000-8114-7EB800269284", 0, 1657730154, null, 1657730159, null, "{ }", "30015", "S", "Jackson/Dearborn (Forest Pk-bound)", "Jackson", "Jackson (Blue Line)", "40070", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.878183", "-87.629296", null, false ], "22", "14912", "38", "92", "36" ]
, [ "row-x5ab.iai7.7wq4", "00000000-0000-0000-EE61-93C81277B034", 0, 1657730154, null, 1657730159, null, "{ }", "30202", "W", "Kedzie (54th/Cermak-bound)", "Kedzie", "Kedzie (Pink Line)", "41040", true, false, false, false, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.853964", "-87.705408", null, false ], "36", "21569", "30", "202", "14" ]
, [ "row-grmj-vihc-ujte", "00000000-0000-0000-C49A-7B2CD1102126", 0, 1657730154, null, 1657730159, null, "{ }", "30154", "S", "Monroe (Forest Pk-bound)", "Monroe", "Monroe (Blue Line)", "40790", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.880703", "-87.629378", null, false ], "22", "14311", "38", "92", "36" ]
, [ "row-7bhn.2cbe~wd2c", "00000000-0000-0000-E76B-4EF6CA8EFBE9", 0, 1657730154, null, 1657730159, null, "{ }", "30195", "N", "Rockwell (Kimball-bound)", "Rockwell", "Rockwell (Brown Line)", "41010", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.966115", "-87.6941", null, false ], "13", "21849", "6", "666", "18" ]
, [ "row-u2v8.yunt_mf67", "00000000-0000-0000-E2E6-664DFE1080EF", 0, 1657730154, null, 1657730159, null, "{ }", "30041", "W", "Damen (54th/Cermak-bound)", "Damen", "Damen (Pink Line)", "40210", true, false, false, false, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.854517", "-87.675975", null, false ], "8", "14920", "33", "366", "26" ]
, [ "row-mp7w.wthj.tkhd", "00000000-0000-0000-1FE9-D60614636715", 0, 1657730154, null, 1657730159, null, "{ }", "30180", "W", "Pulaski (Forest Pk-bound)", "Pulaski", "Pulaski (Blue Line)", "40920", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.873797", "-87.725663", null, false ], "36", "21572", "27", "675", "14" ]
, [ "row-3pwg~bsp7~ci52", "00000000-0000-0000-BE9E-25B59CF16B3A", 0, 1657730154, null, 1657730159, null, "{ }", "30101", "N", "Foster (Linden-bound)", "Foster", "Foster (Purple Line)", "40520", false, false, false, false, false, true, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.05416", "-87.68356", null, false ], null, "26293", null, null, null ]
, [ "row-pc84.c8g9-pg4i", "00000000-0000-0000-3A1C-48154CDF331C", 0, 1657730154, null, 1657730159, null, "{ }", "30004", "W", "Harlem (Terminal arrival)", "Harlem/Lake", "Harlem/Lake (Green Line)", "40020", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.886848", "-87.803176", null, false ], null, "26611", null, null, null ]
, [ "row-phzr_satj.3a5f", "00000000-0000-0000-BB01-B1A755E8CEBF", 0, 1657730154, null, 1657730159, null, "{ }", "30384", "S", "Washington/Wabash (Inner Loop)", "Washington/Wabash", "Washington/Wabash (Brown, Green, Orange, Purple & Pink lines)", "41700", true, false, false, true, false, false, true, false, true, true, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.88322", "-87.626189", null, false ], "22", "14310", "38", "580", "36" ]
, [ "row-vwsf.ztb4~audw", "00000000-0000-0000-F7E6-C0A0E0B0A58A", 0, 1657730154, null, 1657730159, null, "{ }", "30266", "W", "California (Harlem-bound)", "California", "California (Green Line)", "41360", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.88422", "-87.696234", null, false ], "41", "21184", "28", "50", "46" ]
, [ "row-vpyi_jnku.nd89", "00000000-0000-0000-7FAD-A14A0B962A6C", 0, 1657730154, null, 1657730159, null, "{ }", "30021", "S", "Morse (95th-bound)", "Morse", "Morse (Red Line)", "40100", false, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.008362", "-87.665909", null, false ], "3", "21853", "10", "358", "5" ]
, [ "row-4msi.98pu~4pig", "00000000-0000-0000-5C8F-3AB676200769", 0, 1657730154, null, 1657730159, null, "{ }", "30060", "N", "Western (Loop-bound)", "Western", "Western (Orange Line)", "40310", true, false, false, false, false, false, false, false, false, true, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.804546", "-87.684019", null, false ], "19", "14924", "61", "775", "3" ]
, [ "row-4ctm-imtm.q8z3", "00000000-0000-0000-3D07-A5B6978033C0", 0, 1657730154, null, 1657730159, null, "{ }", "30096", "S", "Grand/Milwaukee (Forest Pk-bound)", "Grand", "Grand (Blue Line)", "40490", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.891189", "-87.647578", null, false ], "41", "4446", "25", "109", "46" ]
, [ "row-ayqy~dxqt.a2my", "00000000-0000-0000-FD04-B9478BE97EE7", 0, 1657730154, null, 1657730159, null, "{ }", "30375", "N", "Clark/Lake (O'Hare-bound)", "Clark/Lake", "Clark/Lake (Blue, Brown, Green, Orange, Purple & Pink lines)", "40380", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.885737", "-87.630886", null, false ], "22", "14309", "38", "92", "36" ]
, [ "row-3gxs_3b5s~6m85", "00000000-0000-0000-D9C4-3F4E79B085A1", 0, 1657730154, null, 1657730159, null, "{ }", "30095", "N", "Grand/Milwaukee (O'Hare-bound)", "Grand", "Grand (Blue Line)", "40490", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.891189", "-87.647578", null, false ], "41", "4446", "25", "109", "46" ]
, [ "row-e7w5.qbya~trhg", "00000000-0000-0000-745F-C845B60EC455", 0, 1657730154, null, 1657730159, null, "{ }", "30062", "N", "Division (O'Hare-bound)", "Division", "Division (Blue Line)", "40320", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.903355", "-87.666496", null, false ], "24", "22620", "25", "484", "11" ]
, [ "row-r8py-ifqv-rf3w", "00000000-0000-0000-CF53-AD84DC9BF2BC", 0, 1657730154, null, 1657730159, null, "{ }", "30185", "N", "Pulaski (Loop-bound)", "Pulaski", "Pulaski (Orange Line)", "40960", true, false, false, false, false, false, false, false, false, true, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.799756", "-87.724493", null, false ], "35", "22248", "60", "793", "6" ]
, [ "row-47b4~4apj~4hbm", "00000000-0000-0000-0EED-8F5DE39308E4", 0, 1657730154, null, 1657730159, null, "{ }", "30161", "E", "18th (Loop-bound)", "18th", "18th (Pink Line)", "40830", true, false, false, false, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.857908", "-87.669147", null, false ], "8", "14920", "33", "343", "26" ]
, [ "row-f2n8_6hj9_gvyr", "00000000-0000-0000-B39A-647036487A6D", 0, 1657730154, null, 1657730159, null, "{ }", "30293", "N", "Sheridan (Howard-Linden-bound)", "Sheridan", "Sheridan (Red Line)", "40080", false, false, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.953775", "-87.654929", null, false ], "38", "21186", "57", "83", "39" ]
, [ "row-n3wm_62aj~d6v8", "00000000-0000-0000-50EA-00AE86C131F3", 0, 1657730154, null, 1657730159, null, "{ }", "30272", "S", "Chicago (Forest Pk-bound)", "Chicago", "Chicago (Blue Line)", "41410", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.896075", "-87.655214", null, false ], "41", "22620", "25", "522", "46" ]
, [ "row-t8i6.8c7a_m4kh", "00000000-0000-0000-1C0B-C59F4318F663", 0, 1657730154, null, 1657730159, null, "{ }", "30090", "N", "Merchandise Mart (Kimball-Linden-bound)", "Merchandise Mart", "Merchandise Mart (Brown & Purple lines)", "40460", true, false, false, false, true, false, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.888969", "-87.633924", null, false ], "22", "4446", "37", "670", "36" ]
, [ "row-bhvj.jqet_8mc6", "00000000-0000-0000-E23D-44B0E7916777", 0, 1657730154, null, 1657730159, null, "{ }", "30061", "S", "Western (Midway-bound)", "Western", "Western (Orange Line)", "40310", true, false, false, false, false, false, false, false, false, true, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.804546", "-87.684019", null, false ], "19", "14924", "61", "775", "3" ]
, [ "row-egy2_z2zv~jq2w", "00000000-0000-0000-619D-E1A780AC2671", 0, 1657730154, null, 1657730159, null, "{ }", "30171", "N", "O'Hare (Terminal Arrival)", "O'Hare", "O'Hare (Blue Line)", "40890", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.97766526", "-87.90422307", null, false ], "34", "16197", "75", "668", "29" ]
, [ "row-q9va-n5xx-mxav", "00000000-0000-0000-A6E8-266615C76D7E", 0, 1657730154, null, 1657730159, null, "{ }", "30245", "N", "43rd (Harlem-bound)", "43rd", "43rd (Green Line)", "41270", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.816462", "-87.619021", null, false ], "12", "4301", "4", "162", "9" ]
, [ "row-i3fm~cxv3~46b2", "00000000-0000-0000-8B39-E00D1AAA2F0B", 0, 1657730154, null, 1657730159, null, "{ }", "30093", "W", "Racine (Forest Pk-bound)", "Racine", "Racine (Blue Line)", "40470", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.87592", "-87.659458", null, false ], "48", "14917", "29", "88", "23" ]
, [ "row-xzvy.qe4x~i9nq", "00000000-0000-0000-F6B0-621B18D31CC5", 0, 1657730154, null, 1657730159, null, "{ }", "30265", "E", "California (63rd-bound)", "California", "California (Green Line)", "41360", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.88422", "-87.696234", null, false ], "41", "21184", "28", "50", "46" ]
, [ "row-q77p~s8mz-3fhu", "00000000-0000-0000-BC52-035712256555", 0, 1657730154, null, 1657730159, null, "{ }", "30063", "S", "Division (Forest Pk-bound)", "Division", "Division (Blue Line)", "40320", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.903355", "-87.666496", null, false ], "24", "22620", "25", "484", "11" ]
, [ "row-wgdp~hwav-9m9e", "00000000-0000-0000-9515-A8D051E81D4A", 0, 1657730154, null, 1657730159, null, "{ }", "30036", "N", "Sox-35th (Howard-bound)", "Sox-35th", "Sox-35th (Red Line)", "40190", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.831191", "-87.630636", null, false ], "26", "21194", "35", "376", "48" ]
, [ "row-6y7w-mmhg_5t98", "00000000-0000-0000-B859-C493AAE81792", 0, 1657730154, null, 1657730159, null, "{ }", "30083", "W", "Cicero (54th/Cermak-bound)", "Cicero", "Cicero (Pink Line)", "40420", true, false, false, false, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.85182", "-87.745336", null, false ], null, "4458", null, null, null ]
, [ "row-9yse.8dy3_vgn7", "00000000-0000-0000-8B4B-38C4E8369CDB", 0, 1657730154, null, 1657730159, null, "{ }", "30198", "S", "Logan Square (Forest Pk-bound)", "Logan Square", "Logan Square (Blue Line)", "41020", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.929728", "-87.708541", null, false ], "15", "22535", "23", "72", "12" ]
, [ "row-qev6.pqni~fv6c", "00000000-0000-0000-8E02-FDD36EF49F59", 0, 1657730154, null, 1657730159, null, "{ }", "30020", "N", "Morse (Howard-bound)", "Morse", "Morse (Red Line)", "40100", false, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.008362", "-87.665909", null, false ], "3", "21853", "10", "358", "5" ]
, [ "row-dfvh-hnc7.vihk", "00000000-0000-0000-3627-9BA86B77DBB5", 0, 1657730154, null, 1657730159, null, "{ }", "30115", "N", "Damen/Milwaukee (O'Hare-bound)", "Damen", "Damen (Blue Line)", "40590", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.909744", "-87.677437", null, false ], "24", "21560", "25", "481", "41" ]
, [ "row-xfc2-6ty3.rwhe", "00000000-0000-0000-8208-FEADFCC1C07E", 0, 1657730154, null, 1657730159, null, "{ }", "30156", "S", "Sedgwick (Loop-bound)", "Sedgwick", "Sedgwick (Brown & Purple lines)", "40800", true, false, false, false, true, false, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.910409", "-87.639302", null, false ], "51", "14926", "37", "309", "11" ]
, [ "row-djsd~yjxg-ct5r", "00000000-0000-0000-41EA-F2E9F37545C7", 0, 1657730154, null, 1657730159, null, "{ }", "30240", "S", "Addison (Forest Pk-bound)", "Addison", "Addison (Blue Line)", "41240", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.94738", "-87.71906", null, false ], "15", "21538", "16", "326", "50" ]
, [ "row-i3wm_7ye7~cqh8", "00000000-0000-0000-2A0D-0EAFDF0577BE", 0, 1657730154, null, 1657730159, null, "{ }", "30032", "E", "Ashland (Loop-63rd-bound)", "Ashland", "Ashland (Green & Pink lines)", "40170", true, false, false, true, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.885269", "-87.666969", null, false ], "41", "14917", "29", "579", "46" ]
, [ "row-vwr3_ma4k.xmb6", "00000000-0000-0000-A25A-BFC185D015B4", 0, 1657730154, null, 1657730159, null, "{ }", "30108", "S", "Irving Park (O'Hare Branch) (Forest Pk-bound)", "Irving Park", "Irving Park (Blue Line)", "40550", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.952925", "-87.729229", null, false ], "28", "22618", "16", "295", "50" ]
, [ "row-r9hm-s8rv.rp42", "00000000-0000-0000-70ED-68B3601EF04B", 0, 1657730154, null, 1657730159, null, "{ }", "30386", "N", "Wilson (Linden-bound)", "Wilson", "Wilson (Red & Purple lines)", "40540", true, false, false, false, false, false, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.964273", "-87.657588", null, false ], "37", "22616", "31", "241", "39" ]
, [ "row-ip87.ga8s.druv", "00000000-0000-0000-5AEA-C3D0AED8950F", 0, 1657730154, null, 1657730159, null, "{ }", "30193", "N", "Cermak-Chinatown (Howard-bound)", "Cermak-Chinatown", "Cermak-Chinatown (Red Line)", "41000", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.853206", "-87.630968", null, false ], "8", "21194", "35", "3", "26" ]
, [ "row-6d2a.sywj_k5i8", "00000000-0000-0000-F63A-16541D6493B5", 0, 1657730154, null, 1657730159, null, "{ }", "30262", "W", "LaSalle (Forest Pk-bound)", "LaSalle", "LaSalle (Blue Line)", "41340", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.875568", "-87.631722", null, false ], "48", "14913", "38", "92", "10" ]
, [ "row-8tsn~i8n9_xwvu", "00000000-0000-0000-3309-72131DF75F02", 0, 1657730154, null, 1657730159, null, "{ }", "30169", "N", "Thorndale (Howard-bound)", "Thorndale", "Thorndale (Red Line)", "40880", false, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.990259", "-87.659076", null, false ], "40", "4451", "76", "213", "16" ]
, [ "row-b4v2~ek2s~jp8e", "00000000-0000-0000-85F4-475B47732F34", 0, 1657730154, null, 1657730159, null, "{ }", "30046", "N", "79th (Howard-bound)", "79th", "79th (Red Line)", "40240", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.750419", "-87.625112", null, false ], "31", "21554", "40", "1", "32" ]
, [ "row-4d6j.iu28-hb9m", "00000000-0000-0000-814E-7CA0FAD1CD42", 0, 1657730154, null, 1657730159, null, "{ }", "30147", "N", "Granville (Howard-bound)", "Granville", "Granville (Red Line)", "40760", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.993664", "-87.659202", null, false ], "40", "4451", "76", "46", "16" ]
, [ "row-p7zm~cpt5_gphg", "00000000-0000-0000-94E0-435590F5C227", 0, 1657730154, null, 1657730159, null, "{ }", "30014", "N", "Jackson/Dearborn (O'Hare-bound)", "Jackson", "Jackson (Blue Line)", "40070", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.878183", "-87.629296", null, false ], "22", "14912", "38", "92", "36" ]
, [ "row-drvh-45s3.7htp", "00000000-0000-0000-EB7B-4F5FFAB94E73", 0, 1657730154, null, 1657730159, null, "{ }", "30274", "S", "Addison (95th-bound)", "Addison", "Addison (Red Line)", "41420", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.947428", "-87.653626", null, false ], "38", "21186", "57", "727", "25" ]
, [ "row-q536.ng7u.txvj", "00000000-0000-0000-7DA7-D315274A4CD0", 0, 1657730154, null, 1657730159, null, "{ }", "30085", "W", "Clinton (Forest Pk-bound)", "Clinton", "Clinton (Blue Line)", "40430", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.875539", "-87.640984", null, false ], "48", "14917", "29", "97", "26" ]
, [ "row-2ufk_svz2.8hcc", "00000000-0000-0000-F469-36F63ACE49E5", 0, 1657730154, null, 1657730159, null, "{ }", "30264", "W", "Oak Park (Harlem-bound)", "Oak Park", "Oak Park (Green Line)", "41350", false, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.886988", "-87.793783", null, false ], null, "26611", null, null, null ]
, [ "row-bmwn-3bzs_tw8h", "00000000-0000-0000-A3BA-87A04F9804E1", 0, 1657730154, null, 1657730159, null, "{ }", "30196", "S", "Rockwell (Loop-bound)", "Rockwell", "Rockwell (Brown Line)", "41010", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.966115", "-87.6941", null, false ], "13", "21849", "6", "666", "18" ]
, [ "row-zzn6-rj6g_78uv", "00000000-0000-0000-FAD3-B2AD3F267775", 0, 1657730154, null, 1657730159, null, "{ }", "30150", "S", "Lawrence (95th-bound)", "Lawrence", "Lawrence (Red Line)", "40770", false, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.969139", "-87.658493", null, false ], "40", "22616", "31", "634", "39" ]
, [ "row-mpwr.khd5_adss", "00000000-0000-0000-CD29-A7030250C45C", 0, 1657730154, null, 1657730159, null, "{ }", "30054", "E", "Central (63rd-bound)", "Central", "Central (Green Line)", "40280", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.887389", "-87.76565", null, false ], "52", "22216", "26", "672", "7" ]
, [ "row-2z37_7pak~yc2d", "00000000-0000-0000-1829-0B7EE86EC30A", 0, 1657730154, null, 1657730159, null, "{ }", "30292", "W", "Conservatory (Harlem-bound)", "Conservatory", "Conservatory (Green Line)", "41670", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.884904", "-87.716523", null, false ], "11", "21572", "28", "176", "23" ]
, [ "row-t2z4~nvzs~e6gi", "00000000-0000-0000-F96B-2A8C2984787E", 0, 1657730154, null, 1657730159, null, "{ }", "30232", "S", "Wellington (Loop-bound)", "Wellington", "Wellington (Brown & Purple lines)", "41210", true, false, false, false, true, false, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.936033", "-87.653266", null, false ], "38", "4449", "57", "681", "25" ]
, [ "row-cq8j-pyqt.gz6z", "00000000-0000-0000-F602-E52E723C9429", 0, 1657730154, null, 1657730159, null, "{ }", "30078", "N", "Noyes (Linden-bound)", "Noyes", "Noyes (Purple Line)", "40400", false, false, false, false, false, true, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.058282", "-87.683337", null, false ], null, "26293", null, null, null ]
, [ "row-tfbi_fakr_xpia", "00000000-0000-0000-7B07-C97CE268E476", 0, 1657730154, null, 1657730159, null, "{ }", "30157", "E", "Illinois Medical District (O'Hare-bound)", "Illinois Medical District", "Illinois Medical District (Blue Line)", "40810", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.875706", "-87.673932", null, false ], "48", "21184", "29", "90", "46" ]
, [ "row-7ezw~tgx6_c69s", "00000000-0000-0000-7C30-59DB1A582F4E", 0, 1657730154, null, 1657730159, null, "{ }", "30209", "N", "47th (Harlem-bound)", "47th", "47th (Green Line)", "41080", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.809209", "-87.618826", null, false ], "12", "21192", "4", "448", "9" ]
, [ "row-nhwn~hm2x-t99e", "00000000-0000-0000-C48C-5F60DC3F6E1B", 0, 1657730154, null, 1657730159, null, "{ }", "30289", "N", "Lake (Howard-bound)", "Lake", "Lake (Red Line)", "41660", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.884809", "-87.627813", null, false ], "22", "14309", "38", "580", "36" ]
, [ "row-28et-bfvm-9yh8", "00000000-0000-0000-8696-35771689CFA5", 0, 1657730154, null, 1657730159, null, "{ }", "30257", "N", "Belmont (Kimball-Linden-bound)", "Belmont", "Belmont (Red, Brown & Purple lines)", "41320", true, false, false, false, true, false, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.939751", "-87.65338", null, false ], "38", "4449", "57", "681", "25" ]
, [ "row-yhan~vg5d~3asb", "00000000-0000-0000-2E1F-4A8AABCDAA52", 0, 1657730154, null, 1657730159, null, "{ }", "30228", "S", "Jarvis (95th-bound)", "Jarvis", "Jarvis (Red Line)", "41190", false, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.015876", "-87.669092", null, false ], "3", "21853", "10", "357", "5" ]
, [ "row-pgjr-nd25.zibp", "00000000-0000-0000-EF1E-FD98B14074B3", 0, 1657730154, null, 1657730159, null, "{ }", "30216", "S", "Halsted (Midway-bound)", "Halsted", "Halsted (Orange Line)", "41130", true, false, false, false, false, false, false, false, false, true, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.84678", "-87.648088", null, false ], "26", "14920", "58", "59", "48" ]
, [ "row-rtx3.rggj_wgmi", "00000000-0000-0000-20A4-4B188FAB8BE9", 0, 1657730154, null, 1657730159, null, "{ }", "30011", "S", "Davis (Howard-Loop-bound)", "Davis", "Davis (Purple Line)", "40050", true, false, false, false, false, true, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.04771", "-87.683543", null, false ], null, "26293", null, null, null ]
, [ "row-jq4s.saap-j7gw", "00000000-0000-0000-D382-59766AA48AC2", 0, 1657730154, null, 1657730159, null, "{ }", "30270", "S", "Roosevelt (95th-bound)", "Roosevelt", "Roosevelt (Red, Orange & Green lines)", "41400", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.867368", "-87.627402", null, false ], "48", "14913", "34", "374", "9" ]
, [ "row-qexc.tfsq_43pc", "00000000-0000-0000-3735-741D3A5B96BC", 0, 1657730154, null, 1657730159, null, "{ }", "30233", "N", "Fullerton (Howard-bound)", "Fullerton", "Fullerton (Red, Brown & Purple lines)", "41220", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.925051", "-87.652866", null, false ], "51", "21190", "68", "744", "34" ]
, [ "row-zdnj-q7wy_7tp7", "00000000-0000-0000-34B8-358394F9C15D", 0, 1657730154, null, 1657730159, null, "{ }", "30079", "S", "Noyes (Howard-Loop-bound)", "Noyes", "Noyes (Purple Line)", "40400", false, false, false, false, false, true, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.058282", "-87.683337", null, false ], null, "26293", null, null, null ]
, [ "row-ry3j.ct3t_t55p", "00000000-0000-0000-AA11-F3A78FD8539B", 0, 1657730154, null, 1657730159, null, "{ }", "30137", "N", "Chicago (Kimball-Linden-bound)", "Chicago", "Chicago (Brown & Purple lines)", "40710", true, false, false, false, true, false, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.89681", "-87.635924", null, false ], "41", "14926", "37", "652", "46" ]
, [ "row-pakp.s867~hndn", "00000000-0000-0000-88DB-B3A2CD50620E", 0, 1657730154, null, 1657730159, null, "{ }", "30261", "E", "LaSalle (O'Hare-bound)", "LaSalle", "LaSalle (Blue Line)", "41340", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.875568", "-87.631722", null, false ], "48", "14913", "38", "92", "10" ]
, [ "row-pc4v.9ezv.3dic", "00000000-0000-0000-6580-FEAF87DF56DA", 0, 1657730154, null, 1657730159, null, "{ }", "30211", "N", "Monroe (Howard-bound)", "Monroe", "Monroe (Red Line)", "41090", false, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.880745", "-87.627696", null, false ], "22", "14311", "38", "367", "36" ]
, [ "row-8x5b.c4h4.9ft3", "00000000-0000-0000-AC9C-A5D4FDABE819", 0, 1657730154, null, 1657730159, null, "{ }", "30291", "E", "Conservatory (63rd-bound)", "Conservatory", "Conservatory (Green Line)", "41670", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.884904", "-87.716523", null, false ], "11", "21572", "28", "176", "23" ]
, [ "row-u5mw.g4sg.g673", "00000000-0000-0000-15E2-52BDDDE5A87E", 0, 1657730154, null, 1657730159, null, "{ }", "30225", "N", "Kedzie (Kimball-bound)", "Kedzie", "Kedzie (Brown Line)", "41180", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.965996", "-87.708821", null, false ], "2", "21849", "14", "118", "20" ]
, [ "row-qf9y_54w4~5hq2", "00000000-0000-0000-0A45-B53C8AD25FAD", 0, 1657730154, null, 1657730159, null, "{ }", "30024", "N", "51st (Harlem-bound)", "51st", "51st (Green Line)", "40130", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.80209", "-87.618487", null, false ], "12", "21192", "4", "449", "9" ]
, [ "row-ewes~emte_i2qr", "00000000-0000-0000-B902-5BE922449FB6", 0, 1657730154, null, 1657730159, null, "{ }", "30099", "N", "Garfield (Harlem-bound)", "Garfield", "Garfield (Green Line)", "40510", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.795172", "-87.618327", null, false ], "12", "21192", "7", "401", "9" ]
, [ "row-yib6.pc64~qp2q", "00000000-0000-0000-D214-16C4A18EF994", 0, 1657730154, null, 1657730159, null, "{ }", "30206", "S", "Ashland (Midway-bound)", "Ashland", "Ashland (Orange Line)", "41060", true, false, false, false, false, false, false, false, false, true, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.839234", "-87.665317", null, false ], "26", "14920", "33", "126", "26" ]
, [ "row-zx48-rtzf.ba2b", "00000000-0000-0000-3FCF-03DF94B6F5BE", 0, 1657730154, null, 1657730159, null, "{ }", "30064", "N", "Grand/State (Howard-bound)", "Grand", "Grand (Red Line)", "40330", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.891665", "-87.628021", null, false ], "22", "21182", "37", "626", "36" ]
, [ "row-6vt4.z98g-ipix", "00000000-0000-0000-0DF0-B82CC2E40C0B", 0, 1657730154, null, 1657730159, null, "{ }", "30381", "N", "Cermak-McCormick Place (Harlem-bound)", "Cermak-McCormick Place", "Cermak-McCormick Place (Green Line)", "41690", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.853115", "-87.626402", null, false ], "12", "21194", "34", "374", "9" ]
, [ "row-zw4n.2cfq_xqub", "00000000-0000-0000-3A2D-6586D2E5EAFB", 0, 1657730154, null, 1657730159, null, "{ }", "30100", "S", "Garfield (63rd-bound)", "Garfield", "Garfield (Green Line)", "40510", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.795172", "-87.618327", null, false ], "12", "21192", "7", "401", "9" ]
, [ "row-ugze.euvb.xbnq", "00000000-0000-0000-D4F9-904255530A06", 0, 1657730154, null, 1657730159, null, "{ }", "30200", "W", "Polk (54th/Cermak-bound)", "Polk", "Polk (Pink Line)", "41030", true, false, false, false, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.871551", "-87.66953", null, false ], "48", "21184", "29", "5", "46" ]
, [ "row-ww9e_3r2m.3era", "00000000-0000-0000-7A3F-6310B12FD4AF", 0, 1657730154, null, 1657730159, null, "{ }", "30018", "N", "Damen (Kimball-bound)", "Damen", "Damen (Brown Line)", "40090", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.966286", "-87.678639", null, false ], "13", "21849", "6", "225", "18" ]
, [ "row-eyzn_gswu~4gdc", "00000000-0000-0000-2E5C-AD1A384BF756", 0, 1657730154, null, 1657730159, null, "{ }", "30029", "W", "Pulaski (54th/Cermak-bound)", "Pulaski", "Pulaski (Pink Line)", "40150", true, false, false, false, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.853732", "-87.724311", null, false ], "36", "21569", "30", "752", "14" ]
, [ "row-tyrr~fc2g-nj3e", "00000000-0000-0000-8927-4597A160FECF", 0, 1657730154, null, 1657730159, null, "{ }", "30022", "N", "35th/Archer (Loop-bound)", "35th/Archer", "35th/Archer (Orange Line)", "40120", true, false, false, false, false, false, false, false, false, true, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.829353", "-87.680622", null, false ], "26", "14924", "56", "719", "1" ]
, [ "row-6ym2_s85r~njqu", "00000000-0000-0000-5070-FA0777FCC161", 0, 1657730154, null, 1657730159, null, "{ }", "30164", "S", "South Blvd (Howard-Loop-bound)", "South Boulevard", "South Boulevard (Purple Line)", "40840", false, false, false, false, false, true, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.027612", "-87.678329", null, false ], null, "26609", null, null, null ]
, [ "row-sp45_mxsf.cskj", "00000000-0000-0000-425A-EEA8EC3244EB", 0, 1657730154, null, 1657730159, null, "{ }", "30052", "N", "Main (Linden-bound)", "Main", "Main (Purple Line)", "40270", false, false, false, false, false, true, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.033456", "-87.679538", null, false ], null, "26609", null, null, null ]
, [ "row-f8dz~96jv~rrs5", "00000000-0000-0000-9D97-85401A1EFA1A", 0, 1657730154, null, 1657730159, null, "{ }", "30106", "S", "Wilson (95th-bound)", "Wilson", "Wilson (Red & Purple lines)", "40540", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.964273", "-87.657588", null, false ], "37", "22616", "31", "241", "39" ]
, [ "row-dinz-jieh-hkft", "00000000-0000-0000-ED73-DFF77494F2A9", 0, 1657730154, null, 1657730159, null, "{ }", "30110", "S", "Jackson/State (95th-bound)", "Jackson", "Jackson (Red Line)", "40560", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.878153", "-87.627596", null, false ], "48", "14912", "38", "367", "10" ]
, [ "row-8yju_5hg5_rfqk", "00000000-0000-0000-51A5-065E604C0584", 0, 1657730154, null, 1657730159, null, "{ }", "30273", "N", "Addison (Howard-bound)", "Addison", "Addison (Red Line)", "41420", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.947428", "-87.653626", null, false ], "38", "21186", "57", "727", "25" ]
, [ "row-b5gw-hv9v_2mmf", "00000000-0000-0000-68D9-22DCF3B17E92", 0, 1657730154, null, 1657730159, null, "{ }", "30229", "N", "Argyle (Howard-bound)", "Argyle", "Argyle (Red Line)", "41200", false, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.973453", "-87.65853", null, false ], "40", "22616", "31", "634", "16" ]
, [ "row-mgs2-desj.c2f6", "00000000-0000-0000-B9C8-C1626969D1C3", 0, 1657730154, null, 1657730159, null, "{ }", "30165", "E", "H.W. Library (Outer Loop)", "Harold Washington Library-State/Van Buren", "Harold Washington Library-State/Van Buren (Brown, Orange, Purple & Pink lines)", "40850", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.876862", "-87.628196", null, false ], "48", "14913", "38", "92", "10" ]
, [ "row-yxqz-nar7~hsew", "00000000-0000-0000-CEDB-4CAF51EC8FB4", 0, 1657730154, null, 1657730159, null, "{ }", "30016", "N", "Sheridan (Howard-bound)", "Sheridan", "Sheridan (Red Line)", "40080", false, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.953775", "-87.654929", null, false ], "38", "21186", "57", "83", "39" ]
, [ "row-vp4t.pz2c~kwmv", "00000000-0000-0000-472F-ED3E39530D81", 0, 1657730154, null, 1657730159, null, "{ }", "30001", "E", "Austin (O'Hare-bound)", "Austin", "Austin (Blue Line)", "40010", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.870851", "-87.776812", null, false ], null, "26618", null, null, null ]
, [ "row-mk25.jmyj.h8cp", "00000000-0000-0000-5234-39D3CE6C9F26", 0, 1657730154, null, 1657730159, null, "{ }", "30107", "N", "Irving Park (O'Hare Branch) (O'Hare-bound)", "Irving Park", "Irving Park (Blue Line)", "40550", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.952925", "-87.729229", null, false ], "28", "22618", "16", "295", "50" ]
, [ "row-zvy8.2xa2.kfg6", "00000000-0000-0000-8645-FEBA74255860", 0, 1657730154, null, 1657730159, null, "{ }", "30072", "N", "Washington (O'Hare-bound)", "Washington", "Washington (Blue Line)", "40370", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.883164", "-87.62944", null, false ], "22", "14310", "38", "92", "36" ]
, [ "row-2cw8.dh8y~ay3i", "00000000-0000-0000-02DF-74302C3C3C0F", 0, 1657730154, null, 1657730159, null, "{ }", "30055", "W", "Central (Harlem-bound)", "Central", "Central (Green Line)", "40280", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.887389", "-87.76565", null, false ], "52", "22216", "26", "672", "7" ]
, [ "row-wgae-7vpg~u9zx", "00000000-0000-0000-7492-D51FB6727D45", 0, 1657730154, null, 1657730159, null, "{ }", "30048", "E", "Kedzie-Homan (O'Hare-bound)", "Kedzie-Homan", "Kedzie-Homan (Blue Line)", "40250", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.874341", "-87.70604", null, false ], "36", "21572", "28", "765", "14" ]
, [ "row-t8wn-n4qu_ppzb", "00000000-0000-0000-C86C-626EE8328000", 0, 1657730154, null, 1657730159, null, "{ }", "30385", "S", "Wilson (Loop-bound)", "Wilson", "Wilson (Red & Purple lines)", "40540", true, false, false, false, false, false, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.964273", "-87.657588", null, false ], "37", "22616", "31", "241", "39" ]
, [ "row-6a3h_59si~d2n7", "00000000-0000-0000-3F9D-BA8BB5A2EF7D", 0, 1657730154, null, 1657730159, null, "{ }", "30177", "N", "63rd (Howard-bound)", "63rd", "63rd (Red Line)", "40910", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.780536", "-87.630952", null, false ], "53", "21559", "66", "166", "4" ]
, [ "row-jrsm-ntts_rjej", "00000000-0000-0000-BFB1-25699CDEF65B", 0, 1657730154, null, 1657730159, null, "{ }", "30166", "W", "H.W. Library (Inner Loop)", "Harold Washington Library-State/Van Buren", "Harold Washington Library-State/Van Buren (Brown, Orange, Purple & Pink lines)", "40850", true, false, false, false, false, false, true, false, true, true, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.876862", "-87.628196", null, false ], "48", "14913", "38", "92", "10" ]
, [ "row-rcce~7d66-5bva", "00000000-0000-0000-153D-171C6D3997C4", 0, 1657730154, null, 1657730159, null, "{ }", "30219", "N", "Kedzie (Loop-bound)", "Kedzie", "Kedzie (Orange Line)", "41150", true, false, false, false, false, false, false, false, false, true, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.804236", "-87.704406", null, false ], "49", "22248", "55", "776", "8" ]
, [ "row-nmkv~ssur.vifx", "00000000-0000-0000-5562-2A8405B1EAA5", 0, 1657730154, null, 1657730159, null, "{ }", "30135", "E", "Laramie (63rd-bound)", "Laramie", "Laramie (Green Line)", "40700", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.887163", "-87.754986", null, false ], "11", "22216", "26", "696", "23" ]
, [ "row-wqx3.k8re-pd5i", "00000000-0000-0000-3B9D-A701FF487A00", 0, 1657730154, null, 1657730159, null, "{ }", "30276", "S", "87th (95th-bound)", "87th", "87th (Red Line)", "41430", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.735372", "-87.624717", null, false ], "18", "21554", "40", "1", "13" ]
, [ "row-26ua.hvti-bcvc", "00000000-0000-0000-F250-CD12909A7D72", 0, 1657730154, null, 1657730159, null, "{ }", "30002", "W", "Austin (Forest Pk-bound)", "Austin", "Austin (Blue Line)", "40010", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.870851", "-87.776812", null, false ], null, "26618", null, null, null ]
, [ "row-xstd_4ycx~zniu", "00000000-0000-0000-EFE9-6D0F536DF4DA", 0, 1657730154, null, 1657730159, null, "{ }", "30043", "W", "Western (Forest Pk Branch) (Forest Pk-bound)", "Western", "Western (Blue Line - Forest Park Branch)", "40220", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.875478", "-87.688436", null, false ], "48", "21184", "29", "756", "23" ]
, [ "row-ejpu_w4ea_2je8", "00000000-0000-0000-2203-D70518841E14", 0, 1657730154, null, 1657730159, null, "{ }", "30283", "N", "Western (Kimball-bound)", "Western", "Western (Brown Line)", "41480", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.966163", "-87.688502", null, false ], "13", "21849", "6", "665", "18" ]
, [ "row-w5g5-qgvs.rf9a", "00000000-0000-0000-D0BC-8FACF96EDFD4", 0, 1657730154, null, 1657730159, null, "{ }", "30111", "N", "California (O'Hare-bound)", "California", "California (Blue Line)", "40570", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.921939", "-87.69689", null, false ], "24", "22535", "23", "294", "41" ]
, [ "row-xse4-2uri.ekm2", "00000000-0000-0000-80ED-C24CD445D651", 0, 1657730154, null, 1657730159, null, "{ }", "30076", "E", "Forest Park (O'Hare-bound)", "Forest Park", "Forest Park (Blue Line)", "40390", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.874257", "-87.817318", null, false ], null, "15606", null, null, null ]
, [ "row-xvbd-wa5k-7rj4", "00000000-0000-0000-1E77-E264F6BDF00C", 0, 1657730154, null, 1657730159, null, "{ }", "30383", "N", "Washington/Wabash (Outer Loop)", "Washington/Wabash", "Washington/Wabash (Brown, Green, Orange, Purple & Pink lines)", "41700", true, false, false, true, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.88322", "-87.626189", null, false ], "22", "14310", "38", "580", "36" ]
, [ "row-pw7n~hugs-gwa4", "00000000-0000-0000-5D38-37ED6C3352EB", 0, 1657730154, null, 1657730159, null, "{ }", "30053", "S", "Main (Howard-Loop-bound)", "Main", "Main (Purple Line)", "40270", false, false, false, false, false, true, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.033456", "-87.679538", null, false ], null, "26609", null, null, null ]
, [ "row-phv8-wmks~wi2b", "00000000-0000-0000-AC7B-2BCC9D061CBD", 0, 1657730154, null, 1657730159, null, "{ }", "30159", "N", "Rosemont (O'Hare-bound)", "Rosemont", "Rosemont (Blue Line)", "40820", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.983507", "-87.859388", null, false ], null, "16197", null, null, null ]
, [ "row-myp4.dieb~h3k9", "00000000-0000-0000-A7B8-49EE01E16593", 0, 1657730154, null, 1657730159, null, "{ }", "30132", "S", "Adams/Wabash (Inner Loop)", "Adams/Wabash", "Adams/Wabash (Brown, Green, Orange, Pink & Purple lines)", "40680", false, false, false, true, false, false, true, false, true, true, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.879507", "-87.626037", null, false ], "22", "14912", "38", "367", "36" ]
, [ "row-f3vj_p8zk_nh2h", "00000000-0000-0000-3CFC-CD7B095E7809", 0, 1657730154, null, 1657730159, null, "{ }", "30194", "S", "Cermak-Chinatown (95th-bound)", "Cermak-Chinatown", "Cermak-Chinatown (Red Line)", "41000", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.853206", "-87.630968", null, false ], "8", "21194", "35", "3", "26" ]
, [ "row-f7vv.2pxj~pjs7", "00000000-0000-0000-E548-E8B4DD9908CB", 0, 1657730154, null, 1657730159, null, "{ }", "30025", "S", "51st (63rd-bound)", "51st", "51st (Green Line)", "40130", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.80209", "-87.618487", null, false ], "12", "21192", "4", "449", "9" ]
, [ "row-u4wb.b328.zwxb", "00000000-0000-0000-FEEE-50F1867FFDB9", 0, 1657730154, null, 1657730159, null, "{ }", "30067", "S", "Berwyn (95th-bound)", "Berwyn", "Berwyn (Red Line)", "40340", false, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.977984", "-87.658668", null, false ], "40", "22616", "76", "160", "16" ]
, [ "row-8tdj-uqeu~vgx5", "00000000-0000-0000-B778-337E760511B5", 0, 1657730154, null, 1657730159, null, "{ }", "30145", "N", "Harlem (O'Hare Branch) (O'Hare-bound)", "Harlem", "Harlem (Blue Line - O'Hare Branch)", "40750", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.98227", "-87.8089", null, false ], "34", "4448", "36", "735", "29" ]
, [ "row-zi9j.5ric-g22m", "00000000-0000-0000-DB5C-D5772FC3B919", 0, 1657730154, null, 1657730159, null, "{ }", "30012", "N", "Belmont (O'Hare Branch) (O'Hare-bound)", "Belmont", "Belmont (Blue Line)", "40060", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.938132", "-87.712359", null, false ], "15", "21538", "22", "216", "12" ]
, [ "row-ki2w-jytj~u4y7", "00000000-0000-0000-D99C-C71BC2F0A0E0", 0, 1657730154, null, 1657730159, null, "{ }", "30199", "E", "Polk (Loop-bound)", "Polk", "Polk (Pink Line)", "41030", true, false, false, false, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.871551", "-87.66953", null, false ], "48", "21184", "29", "5", "46" ]
, [ "row-y7ds_qyer.dvit", "00000000-0000-0000-E038-84B300250553", 0, 1657730154, null, 1657730159, null, "{ }", "30049", "W", "Kedzie-Homan (Forest Pk-bound)", "Kedzie-Homan", "Kedzie-Homan (Blue Line)", "40250", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.874341", "-87.70604", null, false ], "36", "21572", "28", "765", "14" ]
, [ "row-m99h.mm6v~uzab", "00000000-0000-0000-2283-58E8CB736A6F", 0, 1657730154, null, 1657730159, null, "{ }", "30121", "N", "Clark/Division (Howard-bound)", "Clark/Division", "Clark/Division (Red Line)", "40630", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.90392", "-87.631412", null, false ], "22", "14926", "37", "17", "11" ]
, [ "row-254c_z7qm.5iy3", "00000000-0000-0000-E5A3-3A25AA2A3F3B", 0, 1657730154, null, 1657730159, null, "{ }", "30059", "S", "Indiana (63rd-bound)", "Indiana", "Indiana (Green Line)", "40300", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.821732", "-87.621371", null, false ], "12", "4301", "4", "163", "9" ]
, [ "row-3j44.esuz_pd52", "00000000-0000-0000-AFD7-382AD29D2A8F", 0, 1657730154, null, 1657730159, null, "{ }", "30117", "E", "Kostner (Loop-bound)", "Kostner", "Kostner (Pink Line)", "40600", true, false, false, false, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.853751", "-87.733258", null, false ], "36", "21569", "30", "753", "14" ]
, [ "row-yk3n-xwgi.qta9", "00000000-0000-0000-3E84-F3D61BE4FCB5", 0, 1657730154, null, 1657730159, null, "{ }", "30226", "S", "Kedzie (Loop-bound)", "Kedzie", "Kedzie (Brown Line)", "41180", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.965996", "-87.708821", null, false ], "2", "21849", "14", "118", "20" ]
, [ "row-6me8.p3y9~qwpp", "00000000-0000-0000-C6F3-E49CF59DE117", 0, 1657730154, null, 1657730159, null, "{ }", "30027", "S", "Dempster-Skokie (Howard-bound)", "Dempster-Skokie", "Dempster-Skokie  (Yellow Line)", "40140", true, false, false, false, false, false, false, true, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.038951", "-87.751919", null, false ], null, "9460", null, null, null ]
, [ "row-9k7v.ed2b-4zyq", "00000000-0000-0000-607A-D01592A1C298", 0, 1657730154, null, 1657730159, null, "{ }", "30296", "W", "Morgan (Harlem-54th/Cermak-bound)", "Morgan", "Morgan (Green & Pink lines)", "41510", true, false, false, true, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.885586", "-87.652193", null, false ], "41", "14917", "29", "63", "46" ]
, [ "row-aqhu-ikmh-49dy", "00000000-0000-0000-7253-6CB56799E3C0", 0, 1657730154, null, 1657730159, null, "{ }", "30170", "S", "Thorndale (95th-bound)", "Thorndale", "Thorndale (Red Line)", "40880", false, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.990259", "-87.659076", null, false ], "40", "4451", "76", "213", "16" ]
, [ "row-gtaa.mrsu_huu8", "00000000-0000-0000-E2A7-F09DA8ED54D4", 0, 1657730154, null, 1657730159, null, "{ }", "30187", "E", "Cicero (O'Hare-bound)", "Cicero", "Cicero (Blue Line)", "40970", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.871574", "-87.745154", null, false ], "36", "22216", "26", "61", "7" ]
, [ "row-zqfw_zjgw.t5t6", "00000000-0000-0000-EC53-E26DACF636F0", 0, 1657730154, null, 1657730159, null, "{ }", "30297", "N", "Oakton-Skokie (Dempster-Skokie-bound)", "Oakton-Skokie", "Oakton-Skokie (Yellow Line)", "41680", true, false, false, false, false, false, false, true, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.02624348", "-87.74722084", null, false ], null, "9460", null, null, null ]
, [ "row-gh6b.wd9s.jssk", "00000000-0000-0000-FCA9-72AF9B60659B", 0, 1657730154, null, 1657730159, null, "{ }", "30138", "S", "Chicago (Loop-bound)", "Chicago", "Chicago (Brown & Purple lines)", "40710", true, false, false, false, true, false, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.89681", "-87.635924", null, false ], "41", "14926", "37", "652", "46" ]
, [ "row-2a5h.8snv-6s27", "00000000-0000-0000-08B2-7CEA31BF4309", 0, 1657730154, null, 1657730159, null, "{ }", "30246", "S", "43rd (63rd-bound)", "43rd", "43rd (Green Line)", "41270", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.816462", "-87.619021", null, false ], "12", "4301", "4", "162", "9" ]
, [ "row-bveq.9mge.rjzq", "00000000-0000-0000-4CDD-C27201774D41", 0, 1657730154, null, 1657730159, null, "{ }", "30028", "E", "Pulaski (Loop-bound)", "Pulaski", "Pulaski (Pink Line)", "40150", true, false, false, false, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.853732", "-87.724311", null, false ], "36", "21569", "30", "752", "14" ]
, [ "row-6ku3-jsb2~8x8p", "00000000-0000-0000-D15C-C238F3EF72B8", 0, 1657730154, null, 1657730159, null, "{ }", "30033", "W", "Ashland (Harlem-54th/Cermak-bound)", "Ashland", "Ashland (Green & Pink lines)", "40170", true, false, false, true, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.885269", "-87.666969", null, false ], "41", "14917", "29", "579", "46" ]
, [ "row-xacf_ztre.473c", "00000000-0000-0000-9893-D3702BA42D46", 0, 1657730154, null, 1657730159, null, "{ }", "30140", "W", "Cottage Grove (Harlem-bound)", "Cottage Grove", "Cottage Grove (Green Line)", "40720", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.780309", "-87.605857", null, false ], "53", "22260", "9", "347", "4" ]
, [ "row-bvb9~6ccq~7r5j", "00000000-0000-0000-4A12-3A879A58A75E", 0, 1657730154, null, 1657730159, null, "{ }", "30037", "S", "Sox-35th (95th-bound)", "Sox-35th", "Sox-35th (Red Line)", "40190", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.831191", "-87.630636", null, false ], "26", "21194", "35", "376", "48" ]
, [ "row-rey4-8qva.zrgd", "00000000-0000-0000-853E-483DA2796F7F", 0, 1657730154, null, 1657730159, null, "{ }", "30182", "S", "Midway (Arrival)", "Midway", "Midway (Orange Line)", "40930", true, false, false, false, false, false, false, false, false, true, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.78661", "-87.737875", null, false ], "35", "21867", "53", "86", "15" ]
, [ "row-riyt-din6_xtru", "00000000-0000-0000-AFF7-D7DB12E8E3BC", 0, 1657730154, null, 1657730159, null, "{ }", "30116", "S", "Damen/Milwaukee (Forest Pk-bound)", "Damen", "Damen (Blue Line)", "40590", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.909744", "-87.677437", null, false ], "24", "21560", "25", "481", "41" ]
, [ "row-vjfj.t36u~7ztz", "00000000-0000-0000-4CFE-CF3927998F7D", 0, 1657730154, null, 1657730159, null, "{ }", "30215", "N", "Halsted (Loop-bound)", "Halsted", "Halsted (Orange Line)", "41130", true, false, false, false, false, false, false, false, false, true, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.84678", "-87.648088", null, false ], "26", "14920", "58", "59", "48" ]
, [ "row-iq7g-nxep~q5qk", "00000000-0000-0000-C918-E588D8ABA46A", 0, 1657730154, null, 1657730159, null, "{ }", "30212", "S", "Monroe (95th-bound)", "Monroe", "Monroe (Red Line)", "41090", false, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.880745", "-87.627696", null, false ], "22", "14311", "38", "367", "36" ]
, [ "row-g2ia_xfwi_6ucr", "00000000-0000-0000-931A-1232327A5B23", 0, 1657730154, null, 1657730159, null, "{ }", "30075", "W", "Clark/Lake (Outer Loop)", "Clark/Lake", "Clark/Lake (Blue, Brown, Green, Orange, Purple & Pink lines)", "40380", true, false, false, true, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.885737", "-87.630886", null, false ], "22", "14309", "38", "92", "36" ]
, [ "row-pft7_ejes~k7zp", "00000000-0000-0000-2653-964389321E2E", 0, 1657730154, null, 1657730159, null, "{ }", "30241", "N", "Central (Linden-bound)", "Central", "Central (Purple Line)", "41250", false, false, false, false, false, true, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.063987", "-87.685617", null, false ], null, "26293", null, null, null ]
, [ "row-cprn-3uzb_6mfd", "00000000-0000-0000-2634-0A9A6F3CC481", 0, 1657730154, null, 1657730159, null, "{ }", "30005", "E", "Pulaski (63rd-bound)", "Pulaski", "Pulaski (Green Line)", "40030", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.885412", "-87.725404", null, false ], "11", "21572", "27", "658", "23" ]
, [ "row-ahf5-jmhm-xfp2", "00000000-0000-0000-3335-8A4D8217A0DC", 0, 1657730154, null, 1657730159, null, "{ }", "30120", "W", "Ridgeland (Harlem-bound)", "Ridgeland", "Ridgeland (Green Line)", "40610", false, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.887159", "-87.783661", null, false ], null, "26615", null, null, null ]
, [ "row-v4g8-mkcm.usum", "00000000-0000-0000-44C5-3B7C896DA5E8", 0, 1657730154, null, 1657730159, null, "{ }", "30176", "S", "Howard (Terminal arrival)", "Howard", "Howard (Red, Purple & Yellow lines)", "40900", true, false, false, false, false, true, true, true, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.019063", "-87.672892", null, false ], "3", "21853", "10", "489", "5" ]
, [ "row-z3rx~ggxf~6ijp", "00000000-0000-0000-9077-353A7B85FB0C", 0, 1657730154, null, 1657730159, null, "{ }", "30204", "S", "Linden (Howard-Loop-bound)", "Linden", "Linden (Purple Line)", "41050", true, false, false, false, false, true, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.073153", "-87.69073", null, false ], null, "9857", null, null, null ]
, [ "row-uq5p-dy9i.xry9", "00000000-0000-0000-8E1C-452CC13C6CDE", 0, 1657730154, null, 1657730159, null, "{ }", "30010", "N", "Davis (Linden-bound)", "Davis", "Davis (Purple Line)", "40050", true, false, false, false, false, true, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.04771", "-87.683543", null, false ], null, "26293", null, null, null ]
, [ "row-8rjj.q2e2-yafc", "00000000-0000-0000-F231-A25E55B8CAC0", 0, 1657730154, null, 1657730159, null, "{ }", "30223", "N", "Garfield (Howard-bound)", "Garfield", "Garfield (Red Line)", "41170", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.79542", "-87.631157", null, false ], "12", "14924", "3", "224", "9" ]
, [ "row-nvxg~r7fx_xt59", "00000000-0000-0000-E0CC-3F9D05252DB3", 0, 1657730154, null, 1657730159, null, "{ }", "30073", "S", "Washington (Forest Pk-bound)", "Washington", "Washington (Blue Line)", "40370", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.883164", "-87.62944", null, false ], "22", "14310", "38", "92", "36" ]
, [ "row-t89y-3edy~tfiw", "00000000-0000-0000-8B96-6B5A9FC3E2FC", 0, 1657730154, null, 1657730159, null, "{ }", "30126", "S", "North/Clybourn (95th-bound)", "North/Clybourn", "North/Clybourn (Red Line)", "40650", false, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.910655", "-87.649177", null, false ], "51", "22620", "37", "108", "11" ]
, [ "row-rrc2-a8kf_wb8b", "00000000-0000-0000-FE33-F374B8B7EE07", 0, 1657730154, null, 1657730159, null, "{ }", "30065", "S", "Grand/State (95th-bound)", "Grand", "Grand (Red Line)", "40330", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.891665", "-87.628021", null, false ], "22", "21182", "37", "626", "36" ]
, [ "row-8uja-wpid~7q94", "00000000-0000-0000-FD4F-00BA06C23501", 0, 1657730154, null, 1657730159, null, "{ }", "30105", "N", "Wilson (Howard-bound)", "Wilson", "Wilson (Red & Purple lines)", "40540", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.964273", "-87.657588", null, false ], "37", "22616", "31", "241", "39" ]
, [ "row-tdhi.u9n9-vgjn", "00000000-0000-0000-9DCE-14B4A48A026D", 0, 1657730154, null, 1657730159, null, "{ }", "30035", "W", "Oak Park (Forest Pk-bound)", "Oak Park", "Oak Park (Blue Line)", "40180", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.872108", "-87.791602", null, false ], null, "26618", null, null, null ]
, [ "row-f58e_rs4m~yikx", "00000000-0000-0000-7B2C-D6706FC2761B", 0, 1657730154, null, 1657730159, null, "{ }", "30023", "S", "35th/Archer (Midway-bound)", "35th/Archer", "35th/Archer (Orange Line)", "40120", true, false, false, false, false, false, false, false, false, true, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.829353", "-87.680622", null, false ], "26", "14924", "56", "719", "1" ]
, [ "row-72vj.ej4k.cknn", "00000000-0000-0000-137C-E9767EB03C60", 0, 1657730154, null, 1657730159, null, "{ }", "30163", "N", "South Blvd (Linden-bound)", "South Boulevard", "South Boulevard (Purple Line)", "40840", false, false, false, false, false, true, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.027612", "-87.678329", null, false ], null, "26609", null, null, null ]
, [ "row-xzab~m4ym.cwdr", "00000000-0000-0000-1709-E69AB3D21ADA", 0, 1657730154, null, 1657730159, null, "{ }", "30006", "W", "Pulaski (Harlem-bound)", "Pulaski", "Pulaski (Green Line)", "40030", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.885412", "-87.725404", null, false ], "11", "21572", "27", "658", "23" ]
, [ "row-4ivt_rvyt.kcjb", "00000000-0000-0000-D490-0B2814D1E900", 0, 1657730154, null, 1657730159, null, "{ }", "30188", "W", "Cicero (Forest Pk-bound)", "Cicero", "Cicero (Blue Line)", "40970", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.871574", "-87.745154", null, false ], "36", "22216", "26", "61", "7" ]
, [ "row-tp7n-3t9j~t3pt", "00000000-0000-0000-A93E-9B8D40F3E513", 0, 1657730154, null, 1657730159, null, "{ }", "30109", "N", "Jackson/State (Howard-bound)", "Jackson", "Jackson (Red Line)", "40560", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.878153", "-87.627596", null, false ], "48", "14912", "38", "367", "10" ]
, [ "row-ksh5_6bd4~iexi", "00000000-0000-0000-F67D-717045CEBD12", 0, 1657730154, null, 1657730159, null, "{ }", "30230", "S", "Argyle (95th-bound)", "Argyle", "Argyle (Red Line)", "41200", false, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.973453", "-87.65853", null, false ], "40", "22616", "31", "634", "16" ]
, [ "row-jk9e.5c3f-wkg4", "00000000-0000-0000-E1D5-91F1FD3F86AC", 0, 1657730154, null, 1657730159, null, "{ }", "30281", "N", "Irving Park (Kimball-bound)", "Irving Park", "Irving Park (Brown Line)", "41460", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.954521", "-87.674868", null, false ], "13", "21186", "46", "622", "18" ]
, [ "row-h42v_sjfa~dvf5", "00000000-0000-0000-BA34-BB1F9A61C822", 0, 1657730154, null, 1657730159, null, "{ }", "30080", "N", "Roosevelt (Loop-Harlem-bound)", "Roosevelt", "Roosevelt (Red, Orange & Green lines)", "41400", true, false, false, true, false, false, false, false, false, true, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.867405", "-87.62659", null, false ], "48", "14913", "34", "374", "9" ]
, [ "row-wj8y~du93.b223", "00000000-0000-0000-4D7E-C4D3DCBA2F43", 0, 1657730154, null, 1657730159, null, "{ }", "30181", "N", "Midway (Loop-bound)", "Midway", "Midway (Orange Line)", "40930", true, false, false, false, false, false, false, false, false, true, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.78661", "-87.737875", null, false ], "35", "21867", "53", "86", "15" ]
, [ "row-sse3_veu2~zehy", "00000000-0000-0000-D5B1-4BCA6082F86E", 0, 1657730154, null, 1657730159, null, "{ }", "30026", "N", "Dempster-Skokie (Arrival)", "Dempster-Skokie", "Dempster-Skokie  (Yellow Line)", "40140", true, false, false, false, false, false, false, true, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.038951", "-87.751919", null, false ], null, "9460", null, null, null ]
, [ "row-6zih.sj89-pcxx", "00000000-0000-0000-CB65-197EDA6A46F6", 0, 1657730154, null, 1657730159, null, "{ }", "30167", "N", "Francisco (Kimball-bound)", "Francisco", "Francisco (Brown Line)", "40870", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.966046", "-87.701644", null, false ], "2", "21849", "14", "258", "20" ]
, [ "row-2w6c~ew6s~2343", "00000000-0000-0000-B839-4BB87507D319", 0, 1657730154, null, 1657730159, null, "{ }", "30030", "E", "LaSalle/Van Buren (Outer Loop)", "LaSalle/Van Buren", "LaSalle/Van Buren (Brown, Orange, Purple & Pink lines)", "40160", false, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.8768", "-87.631739", null, false ], "48", "14913", "38", "92", "10" ]
, [ "row-w98r~ps6g-g27x", "00000000-0000-0000-3A36-46D408B22B0E", 0, 1657730154, null, 1657730159, null, "{ }", "30146", "S", "Harlem (O'Hare Branch) (Forest Pk-bound)", "Harlem", "Harlem (Blue Line - O'Hare Branch)", "40750", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.98227", "-87.8089", null, false ], "34", "4448", "36", "735", "29" ]
, [ "row-u2hi~pcj2~mnmj", "00000000-0000-0000-DDF6-7144618B2B45", 0, 1657730154, null, 1657730159, null, "{ }", "30013", "S", "Belmont (O'Hare Branch) (Forest Pk-bound)", "Belmont", "Belmont (Blue Line)", "40060", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.938132", "-87.712359", null, false ], "15", "21538", "22", "216", "12" ]
, [ "row-85ds.6ryw_y9sm", "00000000-0000-0000-FC12-8758A4355DFF", 0, 1657730154, null, 1657730159, null, "{ }", "30086", "E", "California (Loop-bound)", "California", "California (Pink Line)", "40440", true, false, false, false, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.854109", "-87.694774", null, false ], "11", "14920", "32", "203", "1" ]
, [ "row-w4m9_yqez~g89e", "00000000-0000-0000-B3F5-04B269E9EF5D", 0, 1657730154, null, 1657730159, null, "{ }", "30143", "E", "Western (Loop-bound)", "Western", "Western (Pink Line)", "40740", true, false, false, false, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.854225", "-87.685129", null, false ], "8", "14920", "33", "4", "26" ]
, [ "row-9zqj-viue_hkv6", "00000000-0000-0000-D268-AE96D60892B5", 0, 1657730154, null, 1657730159, null, "{ }", "30192", "S", "69th (95th-bound)", "69th", "69th (Red Line)", "40990", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.768367", "-87.625724", null, false ], "31", "21559", "67", "513", "32" ]
, [ "row-y7ci_kf8t.fv3x", "00000000-0000-0000-59CE-61A1D7F5C8D9", 0, 1657730154, null, 1657730159, null, "{ }", "30141", "N", "Washington/Wells (Inner Loop)", "Washington/Wells", "Washington/Wells (Brown, Orange, Purple & Pink lines)", "40730", true, false, false, false, false, false, true, false, true, true, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.882695", "-87.63378", null, false ], "22", "14310", "38", "92", "36" ]
, [ "row-uj7j.pq7z-4yjv", "00000000-0000-0000-B6C6-24C908B258D9", 0, 1657730154, null, 1657730159, null, "{ }", "30286", "S", "Harrison (95th-bound)", "Harrison", "Harrison (Red Line)", "41490", false, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.874039", "-87.627479", null, false ], "48", "14913", "38", "368", "10" ]
, [ "row-6tp8_c8fd_cuh4", "00000000-0000-0000-6523-A285569A5501", 0, 1657730154, null, 1657730159, null, "{ }", "30221", "E", "Clinton (Loop-63rd-bound)", "Clinton", "Clinton (Green & Pink lines)", "41160", true, false, false, true, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.885678", "-87.641782", null, false ], "22", "4452", "29", "784", "36" ]
, [ "row-aqwz-k69y.jzm5", "00000000-0000-0000-6EA3-F5A99D3DD284", 0, 1657730154, null, 1657730159, null, "{ }", "30294", "S", "Sheridan (Loop-bound)", "Sheridan", "Sheridan (Red Line)", "40080", false, false, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.953775", "-87.654929", null, false ], "38", "21186", "57", "83", "39" ]
, [ "row-itmw-w5eh_jjmf", "00000000-0000-0000-C8FE-9F6768D90FF9", 0, 1657730154, null, 1657730159, null, "{ }", "30258", "S", "Belmont (Loop-bound)", "Belmont", "Belmont (Red, Brown & Purple lines)", "41320", true, false, false, false, true, false, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.939751", "-87.65338", null, false ], "38", "4449", "57", "681", "25" ]
, [ "row-8ku4.xitm_juws", "00000000-0000-0000-6E38-C2740A77C9FB", 0, 1657730154, null, 1657730159, null, "{ }", "30242", "S", "Central (Howard-Loop-bound)", "Central", "Central (Purple Line)", "41250", false, false, false, false, false, true, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.063987", "-87.685617", null, false ], null, "26293", null, null, null ]
, [ "row-n9za~cz94.ayjk", "00000000-0000-0000-D1ED-DD92997E0B4D", 0, 1657730154, null, 1657730159, null, "{ }", "30203", "N", "Linden (Linden-bound)", "Linden", "Linden (Purple Line)", "41050", true, false, false, false, false, true, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.073153", "-87.69073", null, false ], null, "9857", null, null, null ]
, [ "row-hey4.pr56-tjiq", "00000000-0000-0000-900C-F8D3E02540ED", 0, 1657730154, null, 1657730159, null, "{ }", "30220", "S", "Kedzie (Midway-bound)", "Kedzie", "Kedzie (Orange Line)", "41150", true, false, false, false, false, false, false, false, false, true, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.804236", "-87.704406", null, false ], "49", "22248", "55", "776", "8" ]
, [ "row-cqu6.36je.s6tf", "00000000-0000-0000-943C-7877DA3C43A6", 0, 1657730154, null, 1657730159, null, "{ }", "30250", "S", "Kimball (Loop-bound)", "Kimball", "Kimball (Brown Line)", "41290", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.967901", "-87.713065", null, false ], "2", "21849", "14", "118", "20" ]
, [ "row-pj9r_nrzp_f938", "00000000-0000-0000-E6CE-B13CFB5A2464", 0, 1657730154, null, 1657730159, null, "{ }", "30178", "S", "63rd (95th-bound)", "63rd", "63rd (Red Line)", "40910", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.780536", "-87.630952", null, false ], "53", "21559", "66", "166", "4" ]
, [ "row-b5cp~hzp8_tsm2", "00000000-0000-0000-F974-EA78B3EADE41", 0, 1657730154, null, 1657730159, null, "{ }", "30234", "S", "Fullerton (95th-bound)", "Fullerton", "Fullerton (Red, Brown & Purple lines)", "41220", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.925051", "-87.652866", null, false ], "51", "21190", "68", "744", "34" ]
, [ "row-3aw6~mjwk~ywki", "00000000-0000-0000-BB84-0F0C0C1238D0", 0, 1657730154, null, 1657730159, null, "{ }", "30278", "S", "Addison (Loop-bound)", "Addison", "Addison (Brown Line)", "41440", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.947028", "-87.674642", null, false ], "13", "21186", "46", "644", "18" ]
, [ "row-6k3z.ekk3~3qvm", "00000000-0000-0000-4BF9-2472E25F64FA", 0, 1657730154, null, 1657730159, null, "{ }", "30174", "S", "Howard (95th-Bound)", "Howard", "Howard (Red, Purple & Yellow lines)", "40900", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.019063", "-87.672892", null, false ], "3", "21853", "10", "489", "5" ]
, [ "row-mzpy~xr3i.tgr7", "00000000-0000-0000-1DEE-E368233C74EE", 0, 1657730154, null, 1657730159, null, "{ }", "30238", "S", "47th (95th-bound)", "47th", "47th (Red Line)", "41230", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.810318", "-87.63094", null, false ], "12", "14924", "3", "189", "9" ]
, [ "row-q3cx.wdbh-gcj3", "00000000-0000-0000-31D8-A59AF6AA2F5E", 0, 1657730154, null, 1657730159, null, "{ }", "30382", "S", "Cermak-McCormick Place (63rd-bound)", "Cermak-McCormick Place", "Cermak-McCormick Place (Green Line)", "41690", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.853115", "-87.626402", null, false ], "12", "21194", "34", "374", "9" ]
, [ "row-a8w3_bjv7_7x29", "00000000-0000-0000-1B46-AE1D7A392ABF", 0, 1657730154, null, 1657730159, null, "{ }", "30208", "W", "Kedzie (Harlem-bound)", "Kedzie", "Kedzie (Green Line)", "41070", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.884321", "-87.706155", null, false ], "41", "21184", "28", "50", "46" ]
, [ "row-cb96_n6yz~5rm5", "00000000-0000-0000-1C2C-37D6E5AEB5E3", 0, 1657730154, null, 1657730159, null, "{ }", "30189", "E", "Harlem (Forest Pk Branch) (O'Hare-bound)", "Harlem", "Harlem (Blue Line - Forest Park Branch)", "40980", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.87349", "-87.806961", null, false ], null, "15606", null, null, null ]
, [ "row-2sig_mjwz~pp39", "00000000-0000-0000-84A6-1A056B4EBDCF", 0, 1657730154, null, 1657730159, null, "{ }", "30056", "E", "Ashland/63rd (Harlem-bound)", "Ashland/63rd", "Ashland/63rd (Green Line)", "40290", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.77886", "-87.663766", null, false ], "19", "22257", "65", "279", "2" ]
, [ "row-8wcb~4zuy-hneh", "00000000-0000-0000-EE14-4F58C3DBF80F", 0, 1657730154, null, 1657730159, null, "{ }", "30119", "E", "Ridgeland (63rd-bound)", "Ridgeland", "Ridgeland (Green Line)", "40610", false, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.887159", "-87.783661", null, false ], null, "26615", null, null, null ]
, [ "row-88fj-jv8w-yru4", "00000000-0000-0000-135E-5EE3280AD7C0", 0, 1657730154, null, 1657730159, null, "{ }", "30298", "S", "Oakton-Skokie (Howard-bound)", "Oakton-Skokie", "Oakton-Skokie (Yellow Line)", "41680", true, false, false, false, false, false, false, true, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.02624348", "-87.74722084", null, false ], null, "9460", null, null, null ]
, [ "row-t75f-2bbs-gvqp", "00000000-0000-0000-36E7-DF93E5A1B539", 0, 1657730154, null, 1657730159, null, "{ }", "30139", "E", "Cottage Grove (Terminal arrival)", "Cottage Grove", "Cottage Grove (Green Line)", "40720", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.780309", "-87.605857", null, false ], "53", "22260", "9", "347", "4" ]
, [ "row-hrv6~hk2m.9xij", "00000000-0000-0000-37F9-49BD76604D18", 0, 1657730154, null, 1657730159, null, "{ }", "30122", "S", "Clark/Division (95th-bound)", "Clark/Division", "Clark/Division (Red Line)", "40630", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.90392", "-87.631412", null, false ], "22", "14926", "37", "17", "11" ]
, [ "row-xxcv~iqpf~y4ew", "00000000-0000-0000-DBB0-974D4C586EC3", 0, 1657730154, null, 1657730159, null, "{ }", "30251", "N", "Loyola (Howard-bound)", "Loyola", "Loyola (Red Line)", "41300", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.001073", "-87.661061", null, false ], "3", "21853", "10", "48", "5" ]
, [ "row-9q56.srb3-shne", "00000000-0000-0000-E6AB-42986AE9838A", 0, 1657730154, null, 1657730159, null, "{ }", "30295", "E", "Morgan (Loop-63rd-bound)", "Morgan", "Morgan (Green & Pink lines)", "41510", true, false, false, true, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.885586", "-87.652193", null, false ], "41", "14917", "29", "63", "46" ]
, [ "row-8fmg-jczw~z4wb", "00000000-0000-0000-06CC-05D13968D4C6", 0, 1657730154, null, 1657730159, null, "{ }", "30019", "S", "Damen (Loop-bound)", "Damen", "Damen (Brown Line)", "40090", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.966286", "-87.678639", null, false ], "13", "21849", "6", "225", "18" ]
, [ "row-6ihc_3dgy~3a5f", "00000000-0000-0000-AA70-4513BCD5F267", 0, 1657730154, null, 1657730159, null, "{ }", "30205", "N", "Ashland (Loop-bound)", "Ashland", "Ashland (Orange Line)", "41060", true, false, false, false, false, false, false, false, false, true, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.839234", "-87.665317", null, false ], "26", "14920", "33", "126", "26" ]
, [ "row-8zhd-qbxw~u48f", "00000000-0000-0000-26B0-C7BB22AE0E87", 0, 1657730154, null, 1657730159, null, "{ }", "30131", "N", "Adams/Wabash (Outer Loop)", "Adams/Wabash", "Adams/Wabash (Brown, Green, Orange, Pink & Purple lines)", "40680", false, false, false, true, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.879507", "-87.626037", null, false ], "22", "14912", "38", "367", "36" ]
, [ "row-5x9r_kmbs.cyak", "00000000-0000-0000-10B8-393E102BDAAE", 0, 1657730154, null, 1657730159, null, "{ }", "30160", "S", "Rosemont (Forest Pk-bound)", "Rosemont", "Rosemont (Blue Line)", "40820", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.983507", "-87.859388", null, false ], null, "16197", null, null, null ]
, [ "row-yrbw~3czr-gpzq", "00000000-0000-0000-FADF-CA9CDCB98139", 0, 1657730154, null, 1657730159, null, "{ }", "30058", "N", "Indiana (Harlem-bound)", "Indiana", "Indiana (Green Line)", "40300", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.821732", "-87.621371", null, false ], "12", "4301", "4", "163", "9" ]
, [ "row-tjzf~ym7y-is2b", "00000000-0000-0000-0C3B-777FD82D2C0E", 0, 1657730154, null, 1657730159, null, "{ }", "30118", "W", "Kostner (54th/Cermak-bound)", "Kostner", "Kostner (Pink Line)", "40600", true, false, false, false, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.853751", "-87.733258", null, false ], "36", "21569", "30", "753", "14" ]
, [ "row-g7hs.edt3_w5rc", "00000000-0000-0000-C5BB-EE786C2A78DE", 0, 1657730154, null, 1657730159, null, "{ }", "30066", "N", "Berwyn (Howard-bound)", "Berwyn", "Berwyn (Red Line)", "40340", false, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.977984", "-87.658668", null, false ], "40", "22616", "76", "160", "16" ]
, [ "row-ex76~n96d-zrvp", "00000000-0000-0000-88FD-5B88C65CA653", 0, 1657730154, null, 1657730159, null, "{ }", "30103", "N", "Diversey (Kimball-Linden-bound)", "Diversey", "Diversey (Brown & Purple lines)", "40530", true, false, false, false, true, false, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.932732", "-87.653131", null, false ], "38", "21190", "57", "681", "25" ]
, [ "row-j3r4~rk4c_y3pc", "00000000-0000-0000-54AF-6BC0174510CE", 0, 1657730154, null, 1657730159, null, "{ }", "30247", "N", "Jefferson Park (O'Hare-bound)", "Jefferson Park", "Jefferson Park (Blue Line)", "41280", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.970634", "-87.760892", null, false ], "20", "21869", "11", "129", "50" ]
, [ "row-85ks-p5dx_5wey", "00000000-0000-0000-1219-0D570F91231F", 0, 1657730154, null, 1657730159, null, "{ }", "30183", "E", "Halsted/63rd (Harlem-bound)", "Halsted", "Halsted (Green Line)", "40940", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.778943", "-87.644244", null, false ], "53", "21559", "66", "435", "4" ]
, [ "row-xde7_hcxu_qckf", "00000000-0000-0000-B8CD-DD7FA6B2241C", 0, 1657730154, null, 1657730159, null, "{ }", "30275", "N", "87th (Howard-bound)", "87th", "87th (Red Line)", "41430", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.735372", "-87.624717", null, false ], "18", "21554", "40", "1", "13" ]
, [ "row-wgbz.zcer_zzdr", "00000000-0000-0000-8EAC-AFAF21BE9614", 0, 1657730154, null, 1657730159, null, "{ }", "30210", "S", "47th (63rd-bound)", "47th", "47th (Green Line)", "41080", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.809209", "-87.618826", null, false ], "12", "21192", "4", "448", "9" ]
, [ "row-k38w.9i7n.uvdc", "00000000-0000-0000-0B7C-6CD96E522B50", 0, 1657730154, null, 1657730159, null, "{ }", "30271", "N", "Chicago (O'Hare-bound)", "Chicago", "Chicago (Blue Line)", "41410", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.896075", "-87.655214", null, false ], "41", "22620", "25", "522", "46" ]
, [ "row-zifz.ep5y-654p", "00000000-0000-0000-BCA6-918E23B2B4A5", 0, 1657730154, null, 1657730159, null, "{ }", "30284", "S", "Western (Loop-bound)", "Western", "Western (Brown Line)", "41480", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.966163", "-87.688502", null, false ], "13", "21849", "6", "665", "18" ]
, [ "row-5fi8~xjyv~ih96", "00000000-0000-0000-83F1-45B0EA565E5F", 0, 1657730154, null, 1657730159, null, "{ }", "30077", "W", "Forest Park (Terminal Arrival)", "Forest Park", "Forest Park (Blue Line)", "40390", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.874257", "-87.817318", null, false ], null, "15606", null, null, null ]
, [ "row-bumk_u8wp~ehbg", "00000000-0000-0000-7FB4-FEB1C3810B16", 0, 1657730154, null, 1657730159, null, "{ }", "30112", "S", "California (Forest Pk-bound)", "California", "California  (Blue Line)", "40570", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.921939", "-87.69689", null, false ], "24", "22535", "23", "294", "41" ]
, [ "row-yxsd~75di~4upd", "00000000-0000-0000-2818-5779BFE59BD9", 0, 1657730154, null, 1657730159, null, "{ }", "30254", "S", "Paulina (Loop-bound)", "Paulina", "Paulina (Brown Line)", "41310", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.943623", "-87.670907", null, false ], "16", "4449", "57", "239", "18" ]
, [ "row-xnz3.vqqx-vuaa", "00000000-0000-0000-1F48-3D76B16001A3", 0, 1657730154, null, 1657730159, null, "{ }", "30007", "N", "Quincy/Wells (Inner Loop)", "Quincy/Wells", "Quincy/Wells (Brown, Orange, Purple & Pink lines)", "40040", true, false, false, false, false, false, true, false, true, true, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.878723", "-87.63374", null, false ], "22", "14912", "38", "92", "36" ]
, [ "row-gah3-u2vs~5h76", "00000000-0000-0000-8DBD-EF70A2BA2208", 0, 1657730154, null, 1657730159, null, "{ }", "30091", "S", "Merchandise Mart (Loop-bound)", "Merchandise Mart", "Merchandise Mart (Brown & Purple lines)", "40460", true, false, false, false, true, false, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.888969", "-87.633924", null, false ], "22", "4446", "37", "670", "36" ]
, [ "row-979z~ujqk.u394", "00000000-0000-0000-D8FD-10219C46AD22", 0, 1657730154, null, 1657730159, null, "{ }", "30051", "W", "State/Lake (Outer Loop)", "State/Lake", "State/Lake (Brown, Green, Orange, Pink & Purple lines)", "40260", false, false, false, true, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.88574", "-87.627835", null, false ], "22", "14309", "38", "580", "36" ]
, [ "row-af2e~ebma_nx22", "00000000-0000-0000-0C4D-44659D8370FC", 0, 1657730154, null, 1657730159, null, "{ }", "30094", "E", "Cicero (63rd-bound)", "Cicero", "Cicero (Green Line)", "40480", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.886519", "-87.744698", null, false ], "11", "22216", "26", "696", "23" ]
, [ "row-eizs-n9pj_kfm3", "00000000-0000-0000-4AF1-C1184361727F", 0, 1657730154, null, 1657730159, null, "{ }", "30260", "S", "Montrose (Forest Pk-bound)", "Montrose", "Montrose (Blue Line)", "41330", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.961539", "-87.743574", null, false ], "20", "21869", "16", "362", "38" ]
, [ "row-5ekv_n5cv_tfen", "00000000-0000-0000-7BCC-9C8C6950F8AF", 0, 1657730154, null, 1657730159, null, "{ }", "30042", "E", "Western (Forest Pk Branch) (O'Hare-bound)", "Western", "Western (Blue Line - Forest Park Branch)", "40220", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.875478", "-87.688436", null, false ], "48", "21184", "29", "756", "23" ]
, [ "row-8mgu.renu_g86q", "00000000-0000-0000-EBBC-7E1CF8BF2641", 0, 1657730154, null, 1657730159, null, "{ }", "30285", "N", "Harrison (Howard-bound)", "Harrison", "Harrison (Red Line)", "41490", false, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.874039", "-87.627479", null, false ], "48", "14913", "38", "368", "10" ]
, [ "row-64ma-s7jh.3mah", "00000000-0000-0000-8528-ACC6AD9DAADC", 0, 1657730154, null, 1657730159, null, "{ }", "30127", "N", "Armitage (Kimball-Linden-bound)", "Armitage", "Armitage (Brown & Purple lines)", "40660", true, false, false, false, true, false, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.918217", "-87.652644", null, false ], "51", "21190", "68", "744", "34" ]
, [ "row-u5zm-4t8a_jtqu", "00000000-0000-0000-2028-156796664B51", 0, 1657730154, null, 1657730159, null, "{ }", "30227", "N", "Jarvis (Howard-bound)", "Jarvis", "Jarvis (Red Line)", "41190", false, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.015876", "-87.669092", null, false ], "3", "21853", "10", "357", "5" ]
, [ "row-mvyc_b95a~c6ed", "00000000-0000-0000-8B7D-6A0725BE25E8", 0, 1657730154, null, 1657730159, null, "{ }", "30017", "S", "Sheridan (95th-bound)", "Sheridan", "Sheridan (Red Line)", "40080", false, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.953775", "-87.654929", null, false ], "38", "21186", "57", "83", "39" ]
, [ "row-ddmh~ki5h~b2w8", "00000000-0000-0000-CD34-7049AB2D020E", 0, 1657730154, null, 1657730159, null, "{ }", "30003", "E", "Harlem (63rd-bound)", "Harlem/Lake", "Harlem/Lake (Green Line)", "40020", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.886848", "-87.803176", null, false ], null, "26611", null, null, null ]
, [ "row-g36q_4pas_ifhk", "00000000-0000-0000-3AE7-4A5B4CB46C56", 0, 1657730154, null, 1657730159, null, "{ }", "30277", "N", "Addison (Kimball-bound)", "Addison", "Addison (Brown Line)", "41440", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.947028", "-87.674642", null, false ], "13", "21186", "46", "644", "18" ]
, [ "row-mywc.t433-swh9", "00000000-0000-0000-28C8-200CA32F6CBC", 0, 1657730154, null, 1657730159, null, "{ }", "30255", "N", "Belmont (Howard-bound)", "Belmont", "Belmont (Red, Brown & Purple lines)", "41320", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.939751", "-87.65338", null, false ], "38", "4449", "57", "681", "25" ]
, [ "row-qrt9~w874-fbc4", "00000000-0000-0000-86EA-6996B96D360F", 0, 1657730154, null, 1657730159, null, "{ }", "30136", "W", "Laramie (Harlem-bound)", "Laramie", "Laramie (Green Line)", "40700", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.887163", "-87.754986", null, false ], "11", "22216", "26", "696", "23" ]
, [ "row-cqq9.355h~3dvz", "00000000-0000-0000-0784-34ACF20025F8", 0, 1657730154, null, 1657730159, null, "{ }", "30249", "N", "Kimball (Terminal arrival)", "Kimball", "Kimball (Brown Line)", "41290", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.967901", "-87.713065", null, false ], "2", "21849", "14", "118", "20" ]
, [ "row-tbqp.yfrq.bew9", "00000000-0000-0000-41F9-200B28EB2198", 0, 1657730154, null, 1657730159, null, "{ }", "30191", "N", "69th (Howard-bound)", "69th", "69th (Red Line)", "40990", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.768367", "-87.625724", null, false ], "31", "21559", "67", "513", "32" ]
, [ "row-5qcq~wjih~27gh", "00000000-0000-0000-EFCF-6ABAC397542C", 0, 1657730154, null, 1657730159, null, "{ }", "30050", "E", "State/Lake (Inner Loop)", "State/Lake", "State/Lake (Brown, Green, Orange, Pink & Purple lines)", "40260", false, false, false, true, false, false, true, false, true, true, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.88574", "-87.627835", null, false ], "22", "14309", "38", "580", "36" ]
, [ "row-y2f4~sv4a.dqff", "00000000-0000-0000-2F44-A5BCC67BDB69", 0, 1657730154, null, 1657730159, null, "{ }", "30153", "N", "Monroe (O'Hare-bound)", "Monroe", "Monroe (Blue Line)", "40790", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.880703", "-87.629378", null, false ], "22", "14311", "38", "92", "36" ]
, [ "row-ikbi_v2ua_ug95", "00000000-0000-0000-26F8-B7DDD01676D6", 0, 1657730154, null, 1657730159, null, "{ }", "30040", "E", "Damen (Loop-bound)", "Damen", "Damen (Pink Line)", "40210", true, false, false, false, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.854517", "-87.675975", null, false ], "8", "14920", "33", "366", "26" ]
, [ "row-nuju~32vp_866d", "00000000-0000-0000-A9F5-8B7D91C32129", 0, 1657730154, null, 1657730159, null, "{ }", "30179", "E", "Pulaski (O'Hare-bound)", "Pulaski", "Pulaski (Blue Line)", "40920", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.873797", "-87.725663", null, false ], "36", "21572", "27", "675", "14" ]
, [ "row-gq55-d63v~3w5u", "00000000-0000-0000-2D31-B4AAE140595D", 0, 1657730154, null, 1657730159, null, "{ }", "30186", "S", "Pulaski (Midway-bound)", "Pulaski", "Pulaski (Orange Line)", "40960", true, false, false, false, false, false, false, false, false, true, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.799756", "-87.724493", null, false ], "35", "22248", "60", "793", "6" ]
, [ "row-uc84-e6zq-bbzk", "00000000-0000-0000-286D-8AAC9C23EF7C", 0, 1657730154, null, 1657730159, null, "{ }", "30213", "N", "35-Bronzeville-IIT (Harlem-bound)", "35th-Bronzeville-IIT", "35th-Bronzeville-IIT (Green Line)", "41120", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.831677", "-87.625826", null, false ], "12", "21194", "1", "25", "9" ]
, [ "row-w2kk-adgx_vnxa", "00000000-0000-0000-0E64-54315CFBF9E8", 0, 1657730154, null, 1657730159, null, "{ }", "30144", "W", "Western (54th/Cermak-bound)", "Western", "Western (Pink Line)", "40740", true, false, false, false, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.854225", "-87.685129", null, false ], "8", "14920", "33", "4", "26" ]
, [ "row-pq44~cjai_reiu", "00000000-0000-0000-B85F-BCA6B2F22585", 0, 1657730154, null, 1657730159, null, "{ }", "30235", "N", "Fullerton (Kimball-Linden-bound)", "Fullerton", "Fullerton (Red, Brown & Purple lines)", "41220", true, false, false, false, true, false, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.925051", "-87.652866", null, false ], "51", "21190", "68", "744", "34" ]
, [ "row-id2z.55w7_6ngz", "00000000-0000-0000-EDA0-DC24D811B21D", 0, 1657730154, null, 1657730159, null, "{ }", "30148", "S", "Granville (95th-bound)", "Granville", "Granville (Red Line)", "40760", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.993664", "-87.659202", null, false ], "40", "4451", "76", "46", "16" ]
, [ "row-ma52.zirx_2k8z", "00000000-0000-0000-3437-5D54D35904B2", 0, 1657730154, null, 1657730159, null, "{ }", "30071", "S", "Southport (Loop-bound)", "Southport", "Southport (Brown Line)", "40360", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.943744", "-87.663619", null, false ], "38", "4449", "57", "729", "25" ]
, [ "row-uvru_rz4r.6u5g", "00000000-0000-0000-628D-F0781078CC38", 0, 1657730154, null, 1657730159, null, "{ }", "30280", "S", "Chicago (95th-bound)", "Chicago", "Chicago (Red Line)", "41450", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.896671", "-87.628176", null, false ], "22", "21182", "37", "626", "36" ]
, [ "row-ym38-5vxx-55iu", "00000000-0000-0000-C5EE-056B918C55AA", 0, 1657730154, null, 1657730159, null, "{ }", "30031", "W", "LaSalle/Van Buren (Inner Loop)", "LaSalle/Van Buren", "LaSalle/Van Buren (Brown, Orange, Purple & Pink lines)", "40160", false, false, false, false, false, false, true, false, true, true, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.8768", "-87.631739", null, false ], "48", "14913", "38", "92", "10" ]
, [ "row-ahrm_3uzr.ykft", "00000000-0000-0000-40D8-758DA3854689", 0, 1657730154, null, 1657730159, null, "{ }", "30222", "W", "Clinton (Harlem-54th/Cermak-bound)", "Clinton", "Clinton (Green & Pink lines)", "41160", true, false, false, true, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.885678", "-87.641782", null, false ], "22", "4452", "29", "784", "36" ]
, [ "row-kkxy-qaey_36q7", "00000000-0000-0000-4BD5-64432E1CDC05", 0, 1657730154, null, 1657730159, null, "{ }", "30142", "S", "Washington/Wells (Outer Loop)", "Washington/Wells", "Washington/Wells (Brown, Orange, Purple & Pink lines)", "40730", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.882695", "-87.63378", null, false ], "22", "14310", "38", "92", "36" ]
, [ "row-wj4z~2nke.gtiy", "00000000-0000-0000-4450-FE585CD2244D", 0, 1657730154, null, 1657730159, null, "{ }", "30224", "S", "Garfield (95th-bound)", "Garfield", "Garfield (Red Line)", "41170", true, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.79542", "-87.631157", null, false ], "12", "14924", "3", "224", "9" ]
, [ "row-vfbc~92fb~k6c4", "00000000-0000-0000-3F6F-BCF160AB5719", 0, 1657730154, null, 1657730159, null, "{ }", "30244", "W", "Austin (Harlem-bound)", "Austin", "Austin (Green Line)", "41260", false, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.887293", "-87.774135", null, false ], "52", "22216", "26", "672", "7" ]
, [ "row-qsf8~f829_bk76", "00000000-0000-0000-7E48-A30ACAC4CB3D", 0, 1657730154, null, 1657730159, null, "{ }", "30113", "E", "54th/Cermak (Loop-bound)", "54th/Cermak", "54th/Cermak (Pink Line)", "40580", true, false, false, false, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.85177331", "-87.75669201", null, false ], null, "4458", null, null, null ]
, [ "row-nivn~3nje.jgg9", "00000000-0000-0000-9CDC-2C85979177D9", 0, 1657730154, null, 1657730159, null, "{ }", "30282", "S", "Irving Park (Loop-bound)", "Irving Park", "Irving Park (Brown Line)", "41460", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.954521", "-87.674868", null, false ], "13", "21186", "46", "622", "18" ]
, [ "row-hxj7_cwsj~wppq", "00000000-0000-0000-DE07-3F491E396A32", 0, 1657730154, null, 1657730159, null, "{ }", "30197", "N", "Logan Square (O'Hare-bound)", "Logan Square", "Logan Square (Blue Line)", "41020", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.929728", "-87.708541", null, false ], "15", "22535", "23", "72", "12" ]
, [ "row-cdm2.imkg~stt9", "00000000-0000-0000-7183-B2659DCEF49F", 0, 1657730154, null, 1657730159, null, "{ }", "30152", "W", "Central Park (54th/Cermak-bound)", "Central Park", "Central Park (Pink Line)", "40780", true, false, false, false, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.853839", "-87.714842", null, false ], "36", "21569", "30", "157", "14" ]
, [ "row-z965~8d4y_yrnq", "00000000-0000-0000-2D65-BBCEC8597F27", 0, 1657730154, null, 1657730159, null, "{ }", "30087", "W", "California (54th/Cermak-bound)", "California", "California (Pink Line)", "40440", true, false, false, false, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.854109", "-87.694774", null, false ], "11", "14920", "32", "203", "1" ]
, [ "row-y46x~u3fr-wu5p", "00000000-0000-0000-A7F2-F57CC777E05A", 0, 1657730154, null, 1657730159, null, "{ }", "30201", "E", "Kedzie (Loop-bound)", "Kedzie", "Kedzie (Pink Line)", "41040", true, false, false, false, false, false, false, false, true, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.853964", "-87.705408", null, false ], "36", "21569", "30", "202", "14" ]
, [ "row-2gay-5i87_jwdd", "00000000-0000-0000-8F34-FEBCE0801931", 0, 1657730154, null, 1657730159, null, "{ }", "30069", "W", "UIC-Halsted (Forest Pk-bound)", "UIC-Halsted", "UIC-Halsted (Blue Line)", "40350", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.875474", "-87.649707", null, false ], "48", "14917", "29", "97", "26" ]
, [ "row-xr78.5jwf.5fs8", "00000000-0000-0000-272A-89E5D20F258F", 0, 1657730154, null, 1657730159, null, "{ }", "30074", "E", "Clark/Lake (Inner Loop)", "Clark/Lake", "Clark/Lake (Blue, Brown, Green, Orange, Purple & Pink lines)", "40380", true, false, false, true, false, false, true, false, true, true, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.885737", "-87.630886", null, false ], "22", "14309", "38", "92", "36" ]
, [ "row-mpi4~fu4g~t8yr", "00000000-0000-0000-42CB-E2AFA0070667", 0, 1657730154, null, 1657730159, null, "{ }", "30133", "N", "Dempster (Linden-bound)", "Dempster", "Dempster (Purple Line)", "40690", false, false, false, false, false, true, true, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "42.041655", "-87.681602", null, false ], null, "26293", null, null, null ]
, [ "row-zfdg_939i~ixu8", "00000000-0000-0000-8264-CD07CEC9B986", 0, 1657730154, null, 1657730159, null, "{ }", "30081", "S", "Roosevelt (Midway-63rd-bound)", "Roosevelt", "Roosevelt (Red, Orange & Green lines)", "41400", true, false, false, true, false, false, false, false, false, true, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.867405", "-87.62659", null, false ], "48", "14913", "34", "374", "9" ]
, [ "row-thac-fbmp~wekw", "00000000-0000-0000-6330-76EFF4BCC7B0", 0, 1657730154, null, 1657730159, null, "{ }", "30034", "E", "Oak Park (O'Hare-bound)", "Oak Park", "Oak Park (Blue Line)", "40180", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.872108", "-87.791602", null, false ], null, "26618", null, null, null ]
, [ "row-kubi_nh6c.iesh", "00000000-0000-0000-A67A-2755EEC9C454", 0, 1657730154, null, 1657730159, null, "{ }", "30168", "S", "Francisco (Loop-bound)", "Francisco", "Francisco (Brown Line)", "40870", true, false, false, false, true, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.966046", "-87.701644", null, false ], "2", "21849", "14", "258", "20" ]
, [ "row-9xru-2774_ycpm", "00000000-0000-0000-3179-4705B37BDFD1", 0, 1657730154, null, 1657730159, null, "{ }", "30009", "W", "Cicero (Harlem-bound)", "Cicero", "Cicero (Green Line)", "40480", true, false, false, true, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.886519", "-87.744698", null, false ], "11", "22216", "26", "696", "23" ]
, [ "row-fzxq_75sg-vr5f", "00000000-0000-0000-BB1F-EA015C35EECE", 0, 1657730154, null, 1657730159, null, "{ }", "30259", "N", "Montrose (O'Hare-bound)", "Montrose", "Montrose (Blue Line)", "41330", false, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.961539", "-87.743574", null, false ], "20", "21869", "16", "362", "38" ]
, [ "row-mkbj_fqfh-jhgt", "00000000-0000-0000-4455-2BEF238A58A3", 0, 1657730154, null, 1657730159, null, "{ }", "30125", "N", "North/Clybourn (Howard-bound)", "North/Clybourn", "North/Clybourn (Red Line)", "40650", false, true, false, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.910655", "-87.649177", null, false ], "51", "22620", "37", "108", "11" ]
, [ "row-rgqf-9t7s_drwv", "00000000-0000-0000-2779-43E597E76AB3", 0, 1657730154, null, 1657730159, null, "{ }", "30172", "S", "O'Hare (Forest Pk-bound)", "O'Hare", "O'Hare (Blue Line)", "40890", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.97766526", "-87.90422307", null, false ], "34", "16197", "75", "668", "29" ]
, [ "row-qa5k~3g67.34tu", "00000000-0000-0000-D464-58DD5C190104", 0, 1657730154, null, 1657730159, null, "{ }", "30045", "S", "Cumberland (Forest Pk-bound)", "Cumberland", "Cumberland (Blue Line)", "40230", true, false, true, false, false, false, false, false, false, false, [ "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}", "41.984246", "-87.838028", null, false ], "34", "22243", "75", "64", "29" ]
 ]
}

const mapSingleDataItem = (datum: any):TrainStop => {
  const [sid, id, positionInList, createdAt, createdMeta, updatedAt, updatedMeta,
    meta, stopId, directionId, stopName, stationName, stationDescriptiveName, mapId, ada, red, blue, g, brn, p, pExp, y, pnk, o,
    location, computedRegion, zipCode, communityAreas, censusTracts, wards ] = datum
    
    const [friendlyAddress, lat, lng] = location as any

  return {
    id:id as string,
    stopName,
    stationName,
    lat: parseFloat(lat),
    lng: parseFloat(lng)
  }
}

export const trainLines: Array<TrainLine> = [
  {
    id: 'ada',
    friendlyName: 'Wheelchair Accessible',
    trainStops: [],
    color:'#004A97'
  },
  {
    id: 'red',
    friendlyName: 'Red',
    trainStops: [],
    color:'#C60C30'
  },
  {
    id: 'blue',
    friendlyName: 'Blue',
    trainStops: [],
    color:'#00A1DE'
  },
  {
    id: 'g',
    friendlyName: 'Green',
    trainStops: [],
    color:'#009B3A'
  },
  {
    id: 'brn',
    friendlyName: 'Brown',
    trainStops: [],
    color:'#62361B'
  },
  {
    id: 'p',
    friendlyName: 'Purple',
    trainStops: [],
    color:'#522398'
  },
  {
    id: 'pExp',
    friendlyName: 'Purple Express',
    trainStops: [],
    color:'#522398'
  },
  {
    id: 'y',
    friendlyName: 'Yellow',
    trainStops: [],
    color:'#F9E300'
  },
  {
    id: 'pnk',
    friendlyName: 'Pink',
    trainStops: [],
    color:'#E27EA6'
  },
  {
    id: 'o',
    friendlyName: 'Orange',
    trainStops: [],
    color:'#F9461C'
  }
]
export const getTrainsByLine = (line:string):Array<TrainStop> => {
  return rawTrainData.data.filter(datum=>{
    const [sid, id, positionInList, createdAt, createdMeta, updatedAt, updatedMeta,
      meta, stopId, directionId, stopName, stationName, stationDescriptiveName, mapId, ada, red, blue, g, brn, p, pExp, y, pnk, o,
      location, computedRegion, zipCode, communityAreas, censusTracts, wards ] = datum

    const curStationLines: {[key:string]:boolean} = {
      'ada': ada as boolean,
      'red': red as boolean,
      'blue': blue as boolean,
      'g': g as boolean,
      'brn': brn as boolean,
      'p': p as boolean,
      'pExp': pExp as boolean,
      'y': y as boolean,
      'pnk': pnk as boolean,
      'o': o as boolean
    }

    return curStationLines[line]
  }).map(mapSingleDataItem)
}


export const parseRawTrainData = ():Array<TrainStop> => {
  const processed = rawTrainData.data.map(mapSingleDataItem)
  processed.sort((a,b)=>a.stationName.localeCompare(b.stationName));
  return processed;
}


export const getSingleMappedItem = (givenId: string):TrainStop|undefined => {
  return trainStops.filter(trainStop => givenId == trainStop.id).pop()
}

export const mapTrainStopsToLines = () => {
  trainLines.forEach(trainLine =>{
    trainLine.trainStops = getTrainsByLine(trainLine.id)
  })
}

const trainStops:Array<TrainStop> = parseRawTrainData()
mapTrainStopsToLines()