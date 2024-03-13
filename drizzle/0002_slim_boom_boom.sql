CREATE TABLE `license_types` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `licenses` (
	`id` integer PRIMARY KEY NOT NULL,
	`license_type_id` integer NOT NULL,
	`name` text NOT NULL,
	FOREIGN KEY (`license_type_id`) REFERENCES `license_types`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `season_series` (
	`id` integer PRIMARY KEY NOT NULL,
	`season_id` integer NOT NULL,
	`series_id` integer NOT NULL,
	`license_id` integer NOT NULL,
	FOREIGN KEY (`season_id`) REFERENCES `seasons`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`series_id`) REFERENCES `series`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`license_id`) REFERENCES `licenses`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `season_weeks` (
	`id` integer PRIMARY KEY NOT NULL,
	`season_id` integer NOT NULL,
	`week_number` text NOT NULL,
	`start_date` text NOT NULL,
	FOREIGN KEY (`season_id`) REFERENCES `seasons`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `seasons` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`year` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `series` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `series_cars` (
	`id` integer PRIMARY KEY NOT NULL,
	`series_id` integer NOT NULL,
	`car_id` integer NOT NULL,
	FOREIGN KEY (`series_id`) REFERENCES `series`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `series_weeks` (
	`id` integer PRIMARY KEY NOT NULL,
	`series_id` integer NOT NULL,
	`track_configuration_id` integer NOT NULL,
	`season_week_id` integer NOT NULL,
	FOREIGN KEY (`series_id`) REFERENCES `series`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`track_configuration_id`) REFERENCES `track_configurations`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`season_week_id`) REFERENCES `season_weeks`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `track_configurations` (
	`id` integer PRIMARY KEY NOT NULL,
	`track_id` integer NOT NULL,
	`name` text NOT NULL,
	FOREIGN KEY (`track_id`) REFERENCES `tracks`(`id`) ON UPDATE no action ON DELETE no action
);
