import Pocketbase from "pocketbase";

export const pb = new Pocketbase(process.env.NEXT_POCKETBASE_URL);
pb.autoCancellation(false);
