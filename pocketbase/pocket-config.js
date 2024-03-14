import Pocketbase from "pocketbase";

let url;

if (process.env.NODE_ENV === "production") {
  url = process.env.POCKETBASE_URL;
} else {
  url = "http://127.0.0.1:8090";
}

export const pb = new Pocketbase(rul);
pb.autoCancellation(false);
