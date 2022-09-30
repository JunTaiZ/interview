const result = []
function fn() {
  let index;
  for (index = 0; index < 3; index++) {
    result[index] = function () {
      console.log(index)
    }
  }
}
fn()
result[0]()
result[1]()
result[2]()
