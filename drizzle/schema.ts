import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const cars = sqliteTable("cars", {
  id: integer("id").notNull().primaryKey(),
  name: text("name").notNull(),
});

export const tracks = sqliteTable("tracks", {
  id: integer("id").notNull().primaryKey(),
  name: text("name").notNull(),
  short_name: text("short_name"),
});

export const track_configurations = sqliteTable("track_configurations", {
  id: integer("id").notNull().primaryKey(),
  track_id: integer("track_id")
    .notNull()
    .references(() => tracks.id),
  name: text("name").notNull(),
});

export const seasons = sqliteTable("seasons", {
  id: integer("id").notNull().primaryKey(),
  name: text("name").notNull(),
  year: text("year").notNull(),
});

export const series = sqliteTable("series", {
  id: integer("id").notNull().primaryKey(),
  name: text("name").notNull(),
  fixed: integer("fixed", { mode: "boolean" }),
});

export const license_types = sqliteTable("license_types", {
  id: integer("id").notNull().primaryKey(),
  name: text("name").notNull(),
});

export const licenses = sqliteTable("licenses", {
  id: integer("id").notNull().primaryKey(),
  license_type_id: integer("license_type_id")
    .notNull()
    .references(() => license_types.id),
  name: text("name").notNull(),
});

export const season_series = sqliteTable("season_series", {
  id: integer("id").notNull().primaryKey(),
  season_id: integer("season_id")
    .notNull()
    .references(() => seasons.id),
  series_id: integer("series_id")
    .notNull()
    .references(() => series.id),
  license_id: integer("license_id")
    .notNull()
    .references(() => licenses.id),
});

export const series_cars = sqliteTable("series_cars", {
  id: integer("id").notNull().primaryKey(),
  series_id: integer("series_id")
    .notNull()
    .references(() => series.id),
  car_id: integer("car_id")
    .notNull()
    .references(() => cars.id),
});

export const season_weeks = sqliteTable("season_weeks", {
  id: integer("id").notNull().primaryKey(),
  season_id: integer("season_id")
    .notNull()
    .references(() => seasons.id),
  week_number: text("week_number").notNull(),
  start_date: text("start_date").notNull(),
});
export const series_weeks = sqliteTable("series_weeks", {
  id: integer("id").notNull().primaryKey(),
  series_id: integer("series_id")
    .notNull()
    .references(() => series.id),
  track_configuration_id: integer("track_configuration_id")
    .notNull()
    .references(() => track_configurations.id),
  season_week_id: integer("season_week_id")
    .notNull()
    .references(() => season_weeks.id),
});
