/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c5tovtq2jt2yi2o")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_b0URlmj` ON `files` (`folder_id`)",
    "CREATE UNIQUE INDEX `idx_ZIwiKIg` ON `files` (`owner`)",
    "CREATE INDEX `idx_nPihFwm` ON `files` (`folder`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c5tovtq2jt2yi2o")

  collection.indexes = []

  return dao.saveCollection(collection)
})
