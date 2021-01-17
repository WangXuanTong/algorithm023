## 学习笔记

本周主要是学习的是递归的思想。但对于分治和回溯的概念还是不太了解，听完就忘了，需要多听几遍。

对于递归来说，最重要是去取提取出重复问题，要注意递归的终止条件，执行过程，以及递归的下一次执行。
老师也给出了模板，按照自顶向下的编程方式进行，模板：

```
const recursion = (level, params) =>{
  // recursion terminator
  if(level > MAX_LEVEL){     
    process_result
    return
  }

  // process current level   
  process(level, params)

  // drill down
  recursion(level+1, params)

  // clean current level status if needed
}
```

我需要熟记模板，但更重要的是去拆解出递归的问题，这个目前对于我来说还需要更多的训练。
同时，对于分治和回溯也需要重复看几次视频
