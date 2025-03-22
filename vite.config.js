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
      maxParallelFileOps: 3, // 並列処理数を制限
      output: {
        manualChunks: undefined, // チャンクを分割しない
        assetFileNames: 'assets/[name].[hash].[ext]' // アセットファイル名を明示的に指定
      }
    },
    cssCodeSplit: false, // CSSを分割せず1つのファイルにまとめる
    minify: 'terser' // より強力なminify
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'  // JSファイルをJSXとして扱う
      }
    }
  }
}); 