# 第三周学习笔记

    递归
    递归代码模板
    1、循环终止条件-recursion terminator
    2、处理当前层-process current level
    3、处理下一层-drill down
    4、必要情况下，清除当前层-clean current level status if needed

## 括号生成

    数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
    1、它为一个递归类的函数，定义存放结果的res，新定义一个函数，存放当前括号，左括号，右括号，根据题目知道，有效括号，左括号一定小于n，n是括号对数，那么左括号一定是大于右括号时，右括号才可以添加当前括号里面。这个就是最小公共递归部分。

## 子集

    给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
    说明：解集不能包含重复的子集。
    此方法考虑递归加上回溯法，递归四步法，
    1、定义存放终止结果数组res，临时存放数组t,采用dfs来写，参数为当前值，数组nums，在此函数中，先给出递归终止条件，然后处理当前层，考虑当前选择的位置，处理下一层，也就是对临时数组t进行回溯，然后在考虑不选择当前值,就直接调用dfs(cur + 1, nums);最后清除当前值。最后在此函数结束后调用dfs(0, nums),返回res.

## 多数元素

    给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
    你可以假设数组是非空的，并且给定的数组总是存在多数元素。
    结合栈来写，定义一个栈来存放结果元素，n是在nums中，在这个循环里面，定义栈的长度m，第一栈内元素与n相同或者栈空，则元素n进栈，否则，元素出栈。最后栈里面存在的就是数组中次数大于n/2向下取整的元素。

## 全排列

    给定一个 没有重复 数字的序列，返回其所有可能的全排列。
    定义一个存放结果的数组ans，定义一个回溯函数，1、在回溯函数里面判断如果当前构造的路径长度与原始数组长度一样时，也就是遍历结束，将当前构造的路径放入ans里，返回，这为终止条件。2、遍历数组中的每一个数值，采用set函数去重可以知道，要是set.has(i)为空，将该数值放入构造路径里面。且set函数添加该序号在函数中。3、遍历下一层trackback(path, set),4、清除当前值，path.pop(),且将set函数中的i删除，set.delete(i)
    在循环结束后，递归调用初始化trackback([], new Set());返回ans。

## 全排列 2

    给定一个可包含重复数字的序列，返回所有不重复的全排列.
    考虑到序列有重复数字，而且需要返回不重复的全排列，所以第一想到排序。也需要两个数组，一个存放结果，一个布尔型的数组标记是否访问过。
    最重要为两个数值相等时候，直接跳过，然后继续下一次遍历。
    定义存放结果数组ans，定义vis标记数组其中他的长度为原数组的长度，且初始化为false,vis = new Array(nums.length).fill(false)
    定义一个回溯函数，参数为位置序号idx，新排列好的数组perm，1、判断终止条件，待排列位置要是和原数组的长度相等时，则将新排列好的数组perm拷贝一份，然后存放在ans里面。2、遍历当前每一个数组值，先判断减枝条件vis[i] || (i >0 && nums[i]===nums[i-1] && !vis[i-1]),条件成立，则跳过，进行遍历下一个。遍历当前值，将当前值放入perm中，且该序号的vis[i]=true,3、遍历下一层循环，下一个值。4、清除该层标记值，vis[i] = false,且撤回当前值，perm.pop()
    在循环函数外面调用排序函数，采用升序。nums.sort((x,y) => x-y)
    最后调用回溯函数trackback(0, [])初始化调用。返回ans.

## 组合

    给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
    解读题目，1...n中任何数，组成个数为k的组合，输出所有情况。
    定义存放结果数组ans，一个回溯函数，参数：第一个数值start，构建路径path，函数里面1、终止递归条件设置，if构建Path的长度和k相等，则将构建好的路径存放在ans中，返回。2、遍历每一个数组值，首先当前数值存入path中。3、回溯下一层遍历helper(i+1,path),4、撤回当前遍历值，path.pop().
    循环遍历结束后，在回调初始化函数helper(1,[]),从1开始，存放路径最开始为空。返回ans.

## pow(x,n)

    注意：判断条件比较多，n=0,n<0,n为奇数，n为偶数，得出他们对应的表达式结果，可解。
    n=0,return 1
    n<0,return 1/pow(x, -n)
    n is add, return x*pow(x, -n)
    n is even, return pow(x*x, n/2)

## 电话号码组合

    给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
    给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
    首先该题目需要一个Map来存放数字和它对应的字母。
    考虑特殊情况，字符串长度为0，则返回空数组[].
    定义一个存放结果数组ans,map映射。一个dfs回溯函数，里面有两个参数，当前字符串curStr,当前遍历层数i
    1、终止条件，当前字符串与原始字符串相等，则遍历结束，，将当前字符串拷贝，存放在ans中。
    2、遍历当前数值，当前数字对应哪些字母，然后选择不同字母，也就是不同的递归，letters = map[digits[i]],for (const x of letters)
    3、遍历下一层，生成新字符串，dfs(curStr + x, i +1).
    循环遍历结束，递归调用初始化dfs('', 0),当前字符串最开始为'',层数为0.
    返回ans.

## 二叉树的最近公共祖先

    注意，明白什么叫做最近公共祖先？x若是该树的公共祖先，则它的深度尽可能大，注意一个结点也可能是他自己的祖先
    随意判断条件根为空，根结点等于两个结点中的一个，则返回当前根节点
    在分别判断下一层的左边右边子树的最近公共祖先。最后返回的是当左右子树公共祖先都存在，则返回他们的根结点，否则返回他们对应的左或者右结点存在的。

## 构造二叉树

    构造二叉树最关键的地方在于，找到根节点，以及左右结点的下标，且要构造树，最重要的序列要有中序序列，有了中序序列，再加上其他序列，则可以构造一棵二叉树。
    1、我们可以利用一个map来搜索遍历中序序列的各个值的下标位置。
    2、构造一个遍历函数，函数参数包括前序的起始位置，中序的起始位置，4个参数，找到根节点的值rootval,把根节点值放在新建的根root中，在map中获取根节点在inorder中的下标位置，由于为了去找到前序遍历中左子树对应的结束下标位置，所以我们在中序遍历中，可以计算左子树的值的个数leftNum，通过前序下标+中序的root的左子树个数，就得到前序左子树的结束结点下标位置。p_start+leftNum,接着，我们去处理下一层循环的左边和右边对应的前序中序结点位置，并将其一一放入root中，最后返回root。
    最后返回时候，需要调用初始化helper(0,preorder.length-1,0,inorder.length-1).
