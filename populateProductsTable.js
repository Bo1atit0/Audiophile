// import { mutation } from './convex/_generated/server'
// import { ConvexClient } from "./convex/browser";
import { ConvexHttpClient } from "convex/http";
import ProductsData from "./src/data/ProductsData.js";
import { api } from "./convex/_generated/api.js";
// import functions from "./convex/functions/addProducts.js";

const client = new ConvexHttpClient("http://127.0.0.1:8000");
async function populateTable() {
  try {
    await client.mutation(api.addProducts)(ProductsData);
    console.log("Products table populated successfully.");
  } catch (error) {
    console.error("Error populating products table", error);
  }
}

populateTable();
