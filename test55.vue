<script scoped type="text/ecmascript-6">
  export default {
    data () {
      return {
        name: 'zymfe',
        age: 18,
        dom: {
          tag: 'div',
          children: [
            {
              tag: 'div',
              class: 'box box1',
              style: 'margin-bottom: 20px; background-color: red; color: white; font-size: 30px; font-weight: 600;',
              on: {
                click: () => {
                  alert('My name is zhaoyiming');
                }
              },
              children: [
                {
                  tag: 'span',
                  content: 'My name is ',
                  style: 'font-size: 50px; font-weight: 600'
                },
                {
                  tag: 'span',
                  content: 'zhaoyiming',
                  style: 'font-size: 50px; font-weight: 600'
                }
              ]
            },
            {
              tag: 'div',
              class: 'box box1',
              style: 'margin-bottom: 20px; background-color: blue; color: white;',
              children: [
                {
                  tag: 'p',
                  content: 'When a child node exists, the parent node content does not exist.',
                  style: 'font-size: 30px; font-weight: 600;',
                  on: {
                    click: () => {
                      alert(this.age);
                    }
                  },
                  children: [
                    {
                      tag: 'span',
                      content: 'I am 18 years old',
                      style: 'font-size: 50px; font-weight: 600',
                      on: {
                        click: () => {
                          alert('I am 18 years old');
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    },

    created () {
      
    },

    methods: {
      formatStyle (style) {
        const res = {};
        const styleArr = style
          .replace(/-([a-z])/g, ($0, $1) => $1.toUpperCase())
          .replace(/\s+/g, '')
          .split(';');
        styleArr.forEach(item => {
          const arr = item.split(':');
          res[arr[0]] = arr[1];
        });
        return res;
      },

      formatClass (classes) {
        return classes.split(' ');
      },

      formatDomTree (h, children) {
        let res = [];

        for (let i = 0, len = children.length; i < len; i += 1) {
          const cur = children[i];
          const props = {};
          for (let prop in cur) {
            if (prop === 'children') continue;
            if (prop === 'style') {
              props[prop] = this.formatStyle(cur.style);
              continue;
            }
            if (prop === 'class') {
              props[prop] = this.formatClass(cur.class);
              continue;
            }
            props[prop] = cur[prop];
          }
          let ele = null;
          if (Array.isArray(cur.children) && cur.children.length) {
            ele = h(cur.tag, props, this.formatDomTree(h, cur.children));
          } else {
            ele = h(cur.tag, props, cur.content);
          }
          res = res.concat(ele);
        }

        return res;
      }
    },

    render (h) {
      const res = this.formatDomTree(h, this.dom.children);
      return h(this.dom.tag, res);
      // return h('div', [
      //   h('div', [
      //     h('div', {}, 123),
      //     h('div', {}, 456)
      //   ])
      // ]);
    }
  }
</script>

<style lang="less" scoped>
  .box {
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 30px;
    color: red;
  }
  .box1 {
    border-radius: 50px;
    cursor: pointer;
  }
</style>
