window.jQuery = function (selectorOrArray) {
    let elements
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray)
    } else if (selectorOrArray instanceof Array) {
        //选择结果为多个时，会保存在一个数组此时调用数组对象
        elements = selectorOrArray
    }
    // 接受一个选择器，得到一些元素，返回一个对象，这个对象可以操作这个元素
    //let elements = document.querySelectorAll(selector)
    // api可以操作elements
    return {
        //闭包：函数访问外部变量。直接返回对象，不用新建api对象newApi
        //const api = -> return
        //oldApi: selectorOrArray.oldApi,
        beforeApi: selectorOrArray.oldApi,
        //定义一个beforeApi的属性是selectorOrArray.oldApi
        find(selector) {
            let array = []
            //创建一个临时素组来存储elements这个伪数组
            for (let i = 0; i < elements.length; i++) {
                const elements2 = Array.from(elements[i].querySelectorAll(selector))
                array = array.concat(elements2)
            }
            array.oldApi = this
            //oldApi2指向find操作前的对象
            return jQuery(array)

        },
        addClass(className) {
            //addClass : function(className)
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className)
            }
            return this
            //当前api
        },
        end() {
            return this.beforeApi
            //跳转回到操作前的api对象
        },
        each(fn) {
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i]
                fn.call(null, elements[i], i)
            }
            return this
            //当前api
        },
        parent() {
            const array = []
            this.each((node) => {
                if (array.indexOf(node.parentNode) === -1) {
                    array.push(node.parentNode)
                }
            })
            return jQuery(array)
        },
        children() {
            const array = []
            this.each((node) => {

                array.push(...node.children)
            //等价于array.push(node.children[0],node.children[1],node.children[2],node.children[3]...node.children[n])
            })
            return jQuery(array)
        },
        print() {
            console.log(elements)
        }

    }
    // 闭包，函数访问外部，elements
}
