const path = require('path')

const { Nuxt, Builder } = require('nuxt')

const {
  Interfaces: { Middleware },
} = require('@luasenvy/rapidfire')

class NuxtMiddleware extends Middleware {
  constructor() {
    super()
  }

  async init() {
    this.nuxt = new Nuxt({ telemetry: false, srcDir: path.join(this.$rapidfire.env.paths.root, 'src/nuxt') })

    await this.nuxt.ready()

    // Build only in dev mode
    if (this.isDev) {
      const builder = new Builder(this.nuxt)
      await builder.build()
    }
  }

  pipe(req, res, next) {
    this.nuxt.render(req, res, next)
  }
}

module.exports = NuxtMiddleware