import * as esbuild from "esbuild"

await esbuild.build({
  entryPoints: ["src/app.ts"],
  bundle: true,
  minify: true,
  legalComments: "none",
  platform: "node",
  target: "node22",
  external: [],
  outdir: "dist",
  format: "esm",
})
