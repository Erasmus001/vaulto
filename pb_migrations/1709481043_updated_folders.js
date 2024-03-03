/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ccegnwtwmma0ykx")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_Ee12V8r` ON `folders` (`folder_name`)",
    "CREATE INDEX `idx_LLphVpt` ON `folders` (`owner`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ccegnwtwmma0ykx")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_Ee12V8r` ON `folders` (`folder_name`)"
  ]

  return dao.saveCollection(collection)
})
