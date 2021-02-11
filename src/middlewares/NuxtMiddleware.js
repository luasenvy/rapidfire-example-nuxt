const path = require('path')

const { Nuxt, Builder } = require('nuxt')

const {
  Interfaces: { Middleware },
} = require('@luasenvy/rapidfire')

class NuxtMiddleware extends Middleware {
  constructor() {
    super()

    this.nuxt = null
  }

  async init() {
<<<<<<< HEAD
    const isDev = this.$rapidfire.options.isDev

    this.nuxt = new Nuxt({ telemetry: false, dev: isDev, srcDir: path.join(this.$rapidfire.env.paths.root, 'src/nuxt/') })
=======
    this.nuxt = new Nuxt({ telemetry: false, srcDir: path.join(this.$rapidfire.env.paths.root, 'src/nuxt') })
>>>>>>> 50c356c3afb61f6e5c5b49fa65b1d940d3bb70bd

    await this.nuxt.ready()

    // Build only in dev mode
<<<<<<< HEAD
    if (isDev) {
=======
    if (this.$rapidfire.options.isDev) {
>>>>>>> 50c356c3afb61f6e5c5b49fa65b1d940d3bb70bd
      const builder = new Builder(this.nuxt)
      await builder.build()
    }

    this.pipelines.push({ pipe: this.nuxt.render })
  }
}

module.exports = NuxtMiddleware
