/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "c5tovtq2jt2yi2o",
    "created": "2024-03-03 15:07:37.192Z",
    "updated": "2024-03-03 15:07:37.192Z",
    "name": "files",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jgvwnroj",
        "name": "file_name",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ls5ceclo",
        "name": "owner",
        "type": "relation",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "dy62ens8",
        "name": "size",
        "type": "number",
        "required": false,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "trpwtqck",
        "name": "file",
        "type": "file",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "mimeTypes": [
            "image/png",
            "image/vnd.mozilla.apng",
            "image/jpeg",
            "application/pdf",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "image/gif",
            "application/zip",
            "application/x-7z-compressed",
            "application/epub+zip",
            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "application/javascript",
            "application/json",
            "text/html"
          ],
          "thumbs": [],
          "maxSelect": 99,
          "maxSize": 5242880,
          "protected": true
        }
      },
      {
        "system": false,
        "id": "jyrefuzb",
        "name": "folder",
        "type": "relation",
        "required": false,
        "presentable": true,
        "unique": false,
        "options": {
          "collectionId": "ccegnwtwmma0ykx",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("c5tovtq2jt2yi2o");

  return dao.deleteCollection(collection);
})
