// vite.config.ts
import { defineConfig } from "file:///D:/projects/js-design-plugin-starter/node_modules/.pnpm/vite@4.3.8_@types+node@20.4.8/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/projects/js-design-plugin-starter/node_modules/.pnpm/@vitejs+plugin-vue@4.2.3_vite@4.3.8_vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import UnoCSS from "file:///D:/projects/js-design-plugin-starter/node_modules/.pnpm/unocss@0.51.13_postcss@8.4.23_rollup@3.22.0_vite@4.3.8/node_modules/unocss/dist/vite.mjs";
import { viteSingleFile } from "file:///D:/projects/js-design-plugin-starter/node_modules/.pnpm/vite-plugin-singlefile@0.13.5_rollup@3.22.0_vite@4.3.8/node_modules/vite-plugin-singlefile/dist/esm/index.js";

// src/plugins/index.ts
import { exec } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { build as viteBuild } from "file:///D:/projects/js-design-plugin-starter/node_modules/.pnpm/vite@4.3.8_@types+node@20.4.8/node_modules/vite/dist/node/index.js";
function plugins_default() {
  return [
    {
      name: "vite-plugin-jsdesign",
      apply: "serve",
      configureServer(server) {
        var _a;
        (_a = server.httpServer) == null ? void 0 : _a.once("listening", () => {
          const buildOptions = server.config.inlineConfig;
          buildOptions.plugins ??= [];
          build(buildOptions);
        });
      }
    }
  ];
}
function build(buildOptions) {
  viteBuild(buildOptions).then(() => {
    exec("npx tsc src/code.ts --outDir dist");
    const { name, id, version: api } = JSON.parse(readFileSync("package.json", "utf8"));
    writeFileSync("dist/manifest.json", JSON.stringify({ name, id, api, main: "code.js", ui: "ui.html" }), "utf8");
  });
}

// vite.config.ts
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    viteSingleFile(),
    plugins_default(),
    {
      name: ":reload",
      handleHotUpdate({ server }) {
        server.restart();
        return [];
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        app: "./ui.html"
      }
    }
  },
  server: (() => {
    return {
      open: "/ui.html"
    };
  })()
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAic3JjL3BsdWdpbnMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFxqcy1kZXNpZ24tcGx1Z2luLXN0YXJ0ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2plY3RzXFxcXGpzLWRlc2lnbi1wbHVnaW4tc3RhcnRlclxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvamVjdHMvanMtZGVzaWduLXBsdWdpbi1zdGFydGVyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXHJcbmltcG9ydCB7IHZpdGVTaW5nbGVGaWxlIH0gZnJvbSAndml0ZS1wbHVnaW4tc2luZ2xlZmlsZSdcclxuaW1wb3J0IGpzZGVzaWduIGZyb20gJy4vc3JjL3BsdWdpbnMnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSgpLFxyXG4gICAgVW5vQ1NTKCksXHJcbiAgICB2aXRlU2luZ2xlRmlsZSgpLFxyXG4gICAganNkZXNpZ24oKSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJzpyZWxvYWQnLFxyXG4gICAgICBoYW5kbGVIb3RVcGRhdGUoeyBzZXJ2ZXIgfSkge1xyXG4gICAgICAgIHNlcnZlci5yZXN0YXJ0KClcclxuICAgICAgICByZXR1cm4gW11cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgXSxcclxuICBidWlsZDoge1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBpbnB1dDoge1xyXG4gICAgICAgIGFwcDogJy4vdWkuaHRtbCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VydmVyOiAoKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgb3BlbjogJy91aS5odG1sJyxcclxuICAgIH1cclxuICB9KSgpLFxyXG59KVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXHByb2plY3RzXFxcXGpzLWRlc2lnbi1wbHVnaW4tc3RhcnRlclxcXFxzcmNcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvamVjdHNcXFxcanMtZGVzaWduLXBsdWdpbi1zdGFydGVyXFxcXHNyY1xcXFxwbHVnaW5zXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9wcm9qZWN0cy9qcy1kZXNpZ24tcGx1Z2luLXN0YXJ0ZXIvc3JjL3BsdWdpbnMvaW5kZXgudHNcIjtpbXBvcnQgeyBleGVjIH0gZnJvbSAnbm9kZTpjaGlsZF9wcm9jZXNzJ1xyXG5pbXBvcnQgeyByZWFkRmlsZVN5bmMsIHdyaXRlRmlsZVN5bmMgfSBmcm9tICdub2RlOmZzJ1xyXG5pbXBvcnQgdHlwZSB7IElubGluZUNvbmZpZywgUGx1Z2luIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgYnVpbGQgYXMgdml0ZUJ1aWxkIH0gZnJvbSAndml0ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpOiBQbHVnaW5bXSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3ZpdGUtcGx1Z2luLWpzZGVzaWduJyxcclxuICAgICAgYXBwbHk6ICdzZXJ2ZScsXHJcbiAgICAgIGNvbmZpZ3VyZVNlcnZlcihzZXJ2ZXIpIHtcclxuICAgICAgICBzZXJ2ZXIuaHR0cFNlcnZlcj8ub25jZSgnbGlzdGVuaW5nJywgKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYnVpbGRPcHRpb25zID0gc2VydmVyLmNvbmZpZy5pbmxpbmVDb25maWdcclxuICAgICAgICAgIGJ1aWxkT3B0aW9ucy5wbHVnaW5zID8/PSBbXVxyXG4gICAgICAgICAgYnVpbGQoYnVpbGRPcHRpb25zKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF1cclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGQoYnVpbGRPcHRpb25zOiBJbmxpbmVDb25maWcpIHtcclxuICB2aXRlQnVpbGQoYnVpbGRPcHRpb25zKS50aGVuKCgpID0+IHtcclxuICAgIGV4ZWMoJ25weCB0c2Mgc3JjL2NvZGUudHMgLS1vdXREaXIgZGlzdCcpXHJcbiAgICBjb25zdCB7IG5hbWUsIGlkLCB2ZXJzaW9uOiBhcGkgfSA9IEpTT04ucGFyc2UocmVhZEZpbGVTeW5jKCdwYWNrYWdlLmpzb24nLCAndXRmOCcpKVxyXG4gICAgd3JpdGVGaWxlU3luYygnZGlzdC9tYW5pZmVzdC5qc29uJywgSlNPTi5zdHJpbmdpZnkoeyBuYW1lLCBpZCwgYXBpLCBtYWluOiAnY29kZS5qcycsIHVpOiAndWkuaHRtbCcgfSksICd1dGY4JylcclxuICB9KVxyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1MsU0FBUyxvQkFBb0I7QUFDalUsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixTQUFTLHNCQUFzQjs7O0FDSGlTLFNBQVMsWUFBWTtBQUNyVixTQUFTLGNBQWMscUJBQXFCO0FBRTVDLFNBQVMsU0FBUyxpQkFBaUI7QUFFcEIsU0FBUixrQkFBOEI7QUFDbkMsU0FBTztBQUFBLElBQ0w7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGdCQUFnQixRQUFRO0FBVjlCO0FBV1EscUJBQU8sZUFBUCxtQkFBbUIsS0FBSyxhQUFhLE1BQU07QUFDekMsZ0JBQU0sZUFBZSxPQUFPLE9BQU87QUFDbkMsdUJBQWEsWUFBWSxDQUFDO0FBQzFCLGdCQUFNLFlBQVk7QUFBQSxRQUNwQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRUEsU0FBUyxNQUFNLGNBQTRCO0FBQ3pDLFlBQVUsWUFBWSxFQUFFLEtBQUssTUFBTTtBQUNqQyxTQUFLLG1DQUFtQztBQUN4QyxVQUFNLEVBQUUsTUFBTSxJQUFJLFNBQVMsSUFBSSxJQUFJLEtBQUssTUFBTSxhQUFhLGdCQUFnQixNQUFNLENBQUM7QUFDbEYsa0JBQWMsc0JBQXNCLEtBQUssVUFBVSxFQUFFLE1BQU0sSUFBSSxLQUFLLE1BQU0sV0FBVyxJQUFJLFVBQVUsQ0FBQyxHQUFHLE1BQU07QUFBQSxFQUMvRyxDQUFDO0FBQ0g7OztBRHBCQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixnQkFBUztBQUFBLElBQ1Q7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGdCQUFnQixFQUFFLE9BQU8sR0FBRztBQUMxQixlQUFPLFFBQVE7QUFDZixlQUFPLENBQUM7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxRQUNMLEtBQUs7QUFBQSxNQUNQO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsTUFBTTtBQUNiLFdBQU87QUFBQSxNQUNMLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRixHQUFHO0FBQ0wsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
