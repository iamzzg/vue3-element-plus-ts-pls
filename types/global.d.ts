declare global{
   interface test{
    name:string
  }
}

// 必须导出一个东西，标记该模块为外部模块，扩大为全局范围
export {}