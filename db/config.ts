import { column, defineDb, defineTable } from "astro:db";

const Tracks = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    nick_name: column.text({ optional: true }),
  },
});

const Cars = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Tracks, Cars },
});
