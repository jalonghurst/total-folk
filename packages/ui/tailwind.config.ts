import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "prefix" | "presets" | "content"> = {
  content: ["./src/**/*.tsx"],
  // Use prefix for styling in ui package to avoid conflicts with other styles
  // prefix: "",
  presets: [sharedConfig],
};

export default config;
