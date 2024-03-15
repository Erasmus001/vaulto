/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c5tovtq2jt2yi2o")

  collection.listRule = "@request.auth.id != \"\" && @request.auth.id = owner_id"
  collection.viewRule = "@request.auth.id != \"\" && @request.auth.id = owner_id"
  collection.createRule = "@request.auth.id != \"\""
  collection.updateRule = "@request.auth.id != \"\" && @request.auth.id = owner_id"
  collection.deleteRule = "@request.auth.id != \"\" && @request.auth.id = owner_id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c5tovtq2jt2yi2o")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
})
