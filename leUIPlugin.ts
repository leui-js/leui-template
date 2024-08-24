const leUIPlugin = () => {
  return {
    name: 'le-ui-plugin',
    buildStart() {
    },

    generateBundle() {
    },

    writeBundle() {
    },

    // config(config) {
    //   console.log('config', config)
    // },

    // configResolved(resolvedConfig) {
    //   debugger
    //   console.log('Config has been resolved:', resolvedConfig)
    // },

    configureServer(server: any) {
      server.httpServer?.once('listening', () => {
        setTimeout(() => {
          server.config
            .logger
            .info(`\n【LeUI】如本地使用 whistle 代理，可访问 ${server.config.server.origin}${server.config.base} 进行调试\n`, {
              clear: true,

              // timestamp: true,
            })
        }, 0)
      })

      // server.middlewares.use('/', (req, res, next) => {
      //   debugger
      //   if (req.method === 'GET') {
      //     res.setHeader('Content-Type', 'application/json')
      //     res.end(JSON.stringify({ message: 'Hello from Vite!' }))
      //   }
      //   else {
      //     next()
      //   }
      // })
    },

    // 生产构建结束时调用
    closeBundle() {
      // debugger
      // console.log('Build is complete!')
    },
  }
}

export default leUIPlugin
