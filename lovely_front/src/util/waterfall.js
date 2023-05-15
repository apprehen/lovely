// 瀑布流布局
/*
  opt: 配置项
  opt:{
    el: 瀑布流容器
    column: 列数
    gap: 间隙
  }
*/
export const horizontalWaterfall = (opt) => {
  console.log(opt)
  const el = opt.el
  const column = opt.column || 3
  const gap = opt.gap || 5
  // 图片容器的宽度
  const width = el.offsetWidth
  // 计算出每个图片固定的宽度
  // const newWidth = (width - (column - 1) * gap) / column
}