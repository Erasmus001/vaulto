/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ccegnwtwmma0ykx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ybqzcf0t",
    "name": "type",
    "type": "select",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Folder",
        "File",
        "Image"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ccegnwtwmma0ykx")

  // remove
  collection.schema.removeField("ybqzcf0t")

  return dao.saveCollection(collection)
})
