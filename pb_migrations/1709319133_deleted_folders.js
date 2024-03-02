/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bstdvefje8kakxp");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "bstdvefje8kakxp",
    "created": "2024-02-29 23:51:43.371Z",
    "updated": "2024-02-29 23:51:53.001Z",
    "name": "folders",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5wjlknlm",
        "name": "owner",
        "type": "relation",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "o73jtiwu",
        "name": "folder_name",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 100,
          "pattern": ""
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
})
