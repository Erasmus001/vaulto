/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c5tovtq2jt2yi2o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jgvwnroj",
    "name": "folder_id",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c5tovtq2jt2yi2o")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
