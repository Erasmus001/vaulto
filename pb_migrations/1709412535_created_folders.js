/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ccegnwtwmma0ykx",
    "created": "2024-03-02 20:48:55.562Z",
    "updated": "2024-03-02 20:48:55.562Z",
    "name": "folders",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "06jr3llk",
        "name": "folder_name",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": 30,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bfhorgea",
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
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_Ee12V8r` ON `folders` (`folder_name`)"
    ],
    "listRule": "@request.auth.id != ''",
    "viewRule": "@request.auth.id != ''",
    "createRule": "@request.auth.id != ''",
    "updateRule": "@request.auth.id != ''",
    "deleteRule": "@request.auth.id != ''",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ccegnwtwmma0ykx");

  return dao.deleteCollection(collection);
})
