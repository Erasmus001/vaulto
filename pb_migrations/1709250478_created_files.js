/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4wvazriah4svs8i",
    "created": "2024-02-29 23:47:58.662Z",
    "updated": "2024-02-29 23:47:58.662Z",
    "name": "files",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pm1yewqv",
        "name": "file",
        "type": "file",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "application/pdf",
            "application/vnd.ms-outlook",
            "application/vnd.ms-excel",
            "application/vnd.ms-publisher",
            "application/vnd.ms-powerpoint",
            "application/msword",
            "image/vnd.adobe.photoshop",
            "image/png",
            "image/vnd.mozilla.apng",
            "image/jpeg",
            "image/gif",
            "image/webp",
            "image/x-icon",
            "video/webm",
            "image/svg+xml",
            "text/csv"
          ],
          "thumbs": [],
          "maxSelect": 99,
          "maxSize": 5242880,
          "protected": true
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_6pfAkwg` ON `files` (`file`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": "@request.auth.id != ''",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4wvazriah4svs8i");

  return dao.deleteCollection(collection);
})
