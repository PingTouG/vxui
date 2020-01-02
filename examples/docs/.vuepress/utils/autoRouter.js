const fs = require('fs')
const path = require('path')
const readline = require('readline')

const resolve = dir => path.join(__dirname, dir)

module.exports = async path => {
  // 获取读取的绝对路径
  const staticPath = resolve(path)
  // 获取路由的基础路径 例如：path = ../../components 则基础路径为/components/
  const basicUrl = `/${path.replace(/\.\.\//g, '')}/`

  // 读取文件及目录
  const dirs = fs.readdirSync(staticPath)

  const router = []

  for (let dirIndex in dirs) {
    const dirItem = dirs[dirIndex]

    const route = {
      collapsable: false
    }

    // 获取当前目录或文件的绝对路径
    const itemStaticPath = `${staticPath}/${dirItem}`

    const itemStatus = fs.statSync(itemStaticPath)

    // 若为目录
    if (itemStatus.isDirectory()) {
      // 设置路由title
      route.title = dirItem
      route.children = []

      // 读取当前目录文件, 因为此项目的目录至多二级,则此处没用封装成递归调用
      const files = fs.readdirSync(itemStaticPath)
      for (let fileIndex in files) {
        const fileItem = files[fileIndex]
        // 设置文件的路由路径
        const fileRoutePath = `${basicUrl}${dirItem}/${fileItem.replace(
          '.md',
          ''
        )}`

        // 读取文件第一行作为左侧导航栏文字
        const fileStream = fs.createReadStream(`${itemStaticPath}/${fileItem}`)
        const rl = readline.createInterface({
          input: fileStream,
          crlfDelay: Infinity
        })

        for await (const line of rl) {
          const leftMenuText = line.replace('## ', '')
          route.children.push([fileRoutePath, leftMenuText])
          break
        }
      }
    }

    router.push(route)
  }

  return router
}
