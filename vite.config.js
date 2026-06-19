import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served at the root of the custom domain (edgethink.com.br) → base '/'.
export default defineConfig({
  plugins: [react()],
});
