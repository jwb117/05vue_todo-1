module.exports = {
    pwa: {
      name: 'MYTodo',
      themeColor: '#000',
      msTileColor: '#000000',
      workboxOptions: {
        exclude: [/\.map$/, /manifest\.json$/, 'index.html']
      }
    }
  }