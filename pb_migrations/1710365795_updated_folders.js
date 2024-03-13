/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ccegnwtwmma0ykx")

  collection.listRule = "@request.auth.id != \"\" && @request.auth.id = owner_id"
  collection.viewRule = "@request.auth.id != \"\" && @request.auth.id = owner_id"
  collection.updateRule = "@request.auth.id != \"\" && @request.auth.id = owner_id"
  collection.deleteRule = "@request.auth.id != \"\" && @request.auth.id = owner_id"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_Ee12V8r` ON `folders` (`folder_name`)"
  ]

  // remove
  collection.schema.removeField("bfhorgea")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eyjjbnum",
    "name": "owner_id",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ccegnwtwmma0ykx")

  collection.listRule = "@request.auth.id != \"\" && @request.auth.id = owner.id"
  collection.viewRule = "@request.auth.id != \"\" && @request.auth.id = owner.id"
  collection.updateRule = "@request.auth.id != \"\" && @request.auth.id = owner.id"
  collection.deleteRule = "@request.auth.id != \"\" && @request.auth.id = owner.id"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_Ee12V8r` ON `folders` (`folder_name`)",
    "CREATE INDEX `idx_LLphVpt` ON `folders` (`owner`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("eyjjbnum")

  return dao.saveCollection(collection)
})
