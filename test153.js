;(function () {

  // mock vuex data struct

  const options = {
    state: {
      a: 1,
      b: 2
    },
    mutations: {
      CHANGE_A () {}
    },
    actions: {
      changeA () {}
    },
    modules: {
      hello: {
        namespaced: 'hello',
        state: {
          a: 1,
          b: 2
        },
        mutations: {
          CHANGE_A () {}
        },
        actions: {
          changeA () {}
        },
        modules: {
          hi: {
            state: {
              a: 1,
              b: 2
            },
            mutations: {
              CHANGE__A () {}
            },
            actions: {
              changeA () {}
            },
          }
        }
      },
      world: {
        namespaced: 'world',
        state: {
          a: 1,
          b: 2
        },
        mutations: {
          CHANGE_A () {}
        },
        actions: {
          changeA () {}
        },
      }
    }
  }

  function createStore (options) {
    const store = {}
    installModule(store, options, [])
    return store
  }

  function installModule (store, options, path) {
    const namespace = getNamespace(path)
    registerMutation(store, options, namespace, path)
  }

  function getNamespace (path) {
    return path.length
      ? path.reduce((namespace, key) => namespace ? (namespace + '/' + key) : key, '')
      : ''
  }

  function registerMutation (store, options, namespace, path) {
    forEachValue(store, namespace, options.state)
    forEachValue(store, namespace, options.mutations)
    forEachValue(store, namespace, options.actions)

    if (options.modules) {
      Object.keys(options.modules).forEach(key => {
        installModule(store, options.modules[key], path.concat(key))
      })
    }
  }

  function forEachValue (store, namespace, value) {
    if (!value) return 

    const obj = !namespace
      ? store
      : store[namespace] || (store[namespace] = {})

    Object.keys(value).forEach(key => {
      obj[key] = value[key]
    })
  }

  const store = createStore(options)
  console.log(store)

})();