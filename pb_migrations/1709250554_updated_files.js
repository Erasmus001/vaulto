/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4wvazriah4svs8i")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0jlnb4ma",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4wvazriah4svs8i")

  // remove
  collection.schema.removeField("0jlnb4ma")

  return dao.saveCollection(collection)
})
