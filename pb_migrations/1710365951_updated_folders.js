/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ccegnwtwmma0ykx")

  // remove
  collection.schema.removeField("mbkoszzo")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ccegnwtwmma0ykx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mbkoszzo",
    "name": "files",
    "type": "relation",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "collectionId": "c5tovtq2jt2yi2o",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
