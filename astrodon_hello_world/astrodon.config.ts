
import type { AppOptions } from "https://deno.land/x/astrodon@0.1.0-alpha.2/mod.ts";

export default <AppOptions> {
  name: "superapp",
  build: {
    entry: "./demo.ts",
    assets: "./renderer"
  },
};