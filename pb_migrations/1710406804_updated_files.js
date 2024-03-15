/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c5tovtq2jt2yi2o")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_b0URlmj` ON `files` (`folder_id`)",
    "CREATE INDEX `idx_nPihFwm` ON `files` (`folder`)"
  ]

  // remove
  collection.schema.removeField("ls5ceclo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i0r4wx69",
    "name": "owner_id",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": 5,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c5tovtq2jt2yi2o")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_b0URlmj` ON `files` (`folder_id`)",
    "CREATE UNIQUE INDEX `idx_ZIwiKIg` ON `files` (`owner`)",
    "CREATE INDEX `idx_nPihFwm` ON `files` (`folder`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("i0r4wx69")

  return dao.saveCollection(collection)
})
