import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const addProducts = mutation({
  args: {
    products: v.any(),
  },
  handler: async (ctx, args) => {
    const productsData = args.products;
    for (const category in productsData) {
      const products = productsData[category];
      for (const product of products) {
        await ctx.db.insert("productsTable", { ...product, category });
      }
    }
    console.log("Products added to the database.");
  },
});

export const getProducts = query({
  handler: async (ctx) => {
    return await ctx.db.query("productsTable").collect();
  },
});

export const getProductsbyName = query({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("productsTable")
      .filter((q) => q.eq(q.field("name"), args.name))
      .first();
  },
});

export const getProductsbyCategory = query({
  args: {
    category: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("productsTable")
      .filter((q) => q.eq(q.field("category"), args.category))
      .collect();
  },
});
