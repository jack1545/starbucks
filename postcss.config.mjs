/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {// Explicitly specify tailwind config path
      config: './tailwind.config.js',
    },
    autoprefixer: {},
  },
}

export default config 