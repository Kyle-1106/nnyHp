import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      include: '**/*.{jsx,js,tsx,ts}',  // JSファイルも含める
      jsxRuntime: 'automatic'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    assetsInlineLimit: 0, // 小さいアセットもインライン化しない
    rollupOptions: {
      maxParallelFileOps: 3 // 並列処理数を制限
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'  // JSファイルをJSXとして扱う
      }
    }
  }
}); 