(function () {
  // mock vuex data struct

  const options = {
    state: {
      a: 1,
      b: 2,
    },
    mutations: {
      CHANGE_A() {},
    },
    actions: {
      changeA() {},
    },
    modules: {
      hello: {
        namespaced: "hello",
        state: {
          a: 1,
          b: 2,
        },
        mutations: {
          CHANGE_A() {},
        },
        actions: {
          changeA() {},
        },
        modules: {
          hi: {
            state: {
              a: 1,
              b: 2,
            },
            mutations: {
              CHANGE__A() {},
            },
            actions: {
              changeA() {},
            },
          },
        },
      },
      world: {
        namespaced: "world",
        state: {
          a: 1,
          b: 2,
        },
        mutations: {
          CHANGE_A() {},
        },
        actions: {
          changeA() {},
        },
      },
    },
  };

  function createStore(options) {
    const store = {
      _mutations: Object.create(null),
      _actions: Object.create(null),
    };
    installModule(store, options, []);
    return store;
  }

  function installModule(store, options, path) {
    const namespace = getNamespace(path);
    registerStore(store, options, namespace, path);
  }

  function getNamespace(path) {
    return path.length
      ? path.reduce(
          (namespace, key) => (namespace ? namespace + "/" + key : key),
          ""
        )
      : "";
  }

  function registerStore(store, options, namespace, path) {
    forEachState(store, namespace, options.state);
    forEachMutation(store, namespace, options.mutations);
    forEachAction(store, namespace, options.actions);

    if (options.modules) {
      Object.keys(options.modules).forEach((key) => {
        installModule(store, options.modules[key], path.concat(key));
      });
    }
  }

  function forEachState(store, namespace, value) {
    if (!value) return;

    const obj = !namespace
      ? store
      : store[namespace] || (store[namespace] = {});

    Object.keys(value).forEach((key) => {
      obj[key] = value[key];
    });
  }

  function forEachMutation(store, namespace, value) {
    if (!value) return;

    if (namespace) {
      const list =
        store._mutations[namespace] || (store._mutations[namespace] = []);
      Object.keys(value).forEach((key) => {
        list.push(value[key]);
      });
    } else {
      const _mutations = store._mutations;
      Object.keys(value).forEach((key) => {
        _mutations[key] = value[key];
      });
    }
  }

  function forEachAction(store, namespace, value) {
    if (!value) return;

    if (namespace) {
      const list =
        store._actions[namespace] || (store._actions[namespace] = []);
      Object.keys(value).forEach((key) => {
        list.push(value[key]);
      });
    } else {
      const _actions = store._actions;
      Object.keys(value).forEach((key) => {
        _actions[key] = value[key];
      });
    }
  }

  const store = createStore(options);
  console.log(store);
  console.log(store._mutations["hello/hi"]);
})();
