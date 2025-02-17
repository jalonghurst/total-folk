// tailwind config is required for editor support
import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets" | "prefix"> = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../../packages/ui/components/**/*.{js,ts,jsx,tsx}", // Include UI package components
  ],
  presets: [sharedConfig],
};

export default config;
