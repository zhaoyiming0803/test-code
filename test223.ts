;(function () {

  type Sex = 'man' | 'woman'

  interface A {
    name: string
    age: number
    sex: Sex
  }

  interface B {
    props: Partial<A>
  }

  const b: B = {
    props: {
      name: 'zhangsan',
      age: 18,
      sex: 'man'
    }
  }

  console.log(b)

})();