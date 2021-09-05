const api = jQuery('.test')
// 不返回元素们，返回API对象
api
    .addClass('red')
    .addClass('blue') //链式操作
// 遍历获取的所有元素，然后添加.red

/*jQuery 会接受一个css选择器， 然后会获取到这个元素
 *但不会返回这个元素， 会返回一个对象， 对象里面有一些方法，
 *这些方法（ 函数） 可以操作这个元素。
 *
 *用闭包维持这个元素， 因为有函数要访问这个元素。
 *
 *按用户习惯操作是通过api对象来调用函数，所以直接返回this，
 *实现链式操作
 */

const t1 = jQuery('.test1').find('.child').addClass('red')
console.log(t1)
jQuery('.test2').find('.child').end().addClass('green')

const x = jQuery('.test')
x.each((div) => console.log(div))