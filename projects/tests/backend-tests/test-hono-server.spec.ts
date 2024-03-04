import { Hono } from 'hono'
import { remultHono } from '../../core/remult-hono.js'
import { serve } from '@hono/node-server'
import { createRemultServer } from '../../core/server/index.js'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { Task } from '../../test-servers/shared/Task.js'
import { RemultAsyncLocalStorage } from '../../core/src/context.js'
import { allServerTests } from './all-server-tests.js'
import { remult } from '../../core/index.js'

describe('test holo server', async () => {
  let destroy: () => Promise<void>
  let port = 3012

  beforeAll(async () => {
    const app = new Hono()
    const api = remultHono(app, {
      entities: [Task],
    })
    app.get('/api/test', api.withRemult, async (c) =>
      c.json({
        result: await remult.repo(Task).count(),
      }),
    )

    let connection = serve({ fetch: app.fetch, port })
    destroy = async () => {
      connection.close()
    }
  })
  allServerTests(port)
  afterAll(async () => {
    RemultAsyncLocalStorage.disable()
    return destroy()
  })
})
