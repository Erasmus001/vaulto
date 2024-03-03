/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ccegnwtwmma0ykx")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ccegnwtwmma0ykx")

  collection.viewRule = "@request.data.id = id"

  return dao.saveCollection(collection)
})
