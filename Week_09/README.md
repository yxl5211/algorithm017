# 学习笔记

## 递归复习

递归-函数自己调用自己

<!-- public void recur(int level, int param) {
    //terminator
    if(level > MAX_LEVEL) {
        //process result
        return;
    }
    //process current logic
    process(level, param);
    //drill down
    recur(level:level+1, newParam);
    //restore current status
} -->

## 分治复习

分治-分而治之，递归调用模型

<!-- def divide_conquer(problem, param1, param2, ...):
    #recursion terminator
    if problem is None:
        print_result
        return
    # prepare data
    data = prepare_data(problem)
    subproblems = split_problem(problem, data)
    # conquer subproblems
    subresult1 = self.divide_conquer(subproblems[0], p1, ...)
    subresult2 = self.divide_conquer(subproblems[1], p1, ...)
    subresult3 = self.divide_conquer(subproblems[2], p1, ...)
    ...
    #process and generate the final result
    result = process_result(subresult1, subresult2, subresult3, ...)
    #revert the current level states -->

感触：
1、人肉递归很累，低效
2、找到最近最简方法，将其拆解可重复解决的问题
3、数学归纳法思维
本质：寻找重复性（最大公约数）-计算机指令集（for, while,递归调用）

## 动态规划复习

1、将一个复杂的问题，分解成一个个简单的子问题
2、分治+最优子结构
3、顺推形式：动态递归（从下往上）
DP 顺推模板

<!-- function DP():
    dp = [][] #二维情况,将一个现实的问题定义一个数组
    for i = 0..M {
        for j = 0..N {
            dp[i][j] = _Function(dp[i`][j`]...)
        }
    }
    return dp[M][N] -->

关键点：
1、动态规划和递归或者分治没有根本的区别（关键看有无最优子结构）
拥有共性：找到重复子问题
差异性：最优子结构、中途可以淘汰次优解

### 爬楼梯问题

递归公式：
f(n) = f(n-1)+f(n-2), f(1)=1,f(0)=0

<!-- o(2^n)
def f(n):
    if n <= 1:return 1
    return f(n-1)+f(n-2)
o(n)
def f(n):
    if n <= 1: return 1
    if n not in mem:
        mem[n] = f(n-1) + f(n-2)
    return mem[n] -->

dp 方程：o(n)

<!-- def f(n):#顺推
    dp = [1] * (n+1)
    for i in range(2, n+1):
        dp[i] = dp[i-1]+dp[i-2]
    return dp[n] -->
<!-- def f(n):
    x, y = 1, 1
    for i in range(1, n):
        y, x = x+y, y
    return y  # o(n),o(1)-->

### 不同路径

递归公式：
f(x, y) = f(x-1, y) + f(x, y-1)
1、暴力递归 o(mn)

<!-- def f(x, y):
    if x <=0 or y <= 0: return 0
    if x == 1 and y == 1:return 1
    return f(x-1, y) + f(x, y-1) -->

2、加缓存

<!-- def f(x, y):
    if x<= 0 or y <= 0: return 0
    if x == 1 and y == 1: return 1
    if (x, y) not in mem:
        mem[(x, y)] = f(x-1, y) + f(x, y-1)
    return mem[(x, y)] -->

3、动态规划 dp 方程

<!-- def f(x, y):
    dp = [[0] *(m+1) for _ in range(n+1)]
    dp[1][1] = 1
    for i in range(1, y+1):
        for j in range(1, x+1):
            dp[i][j] = dp[i-1][j] + dp[j][i-1]
    return dp[y][x] -->

### 打家劫舍

dp[i]状态的定义： max $ of robbing A[0->i]
dp[i] = max(dp[i-2] + nums[i], dp[i-1])

dp[i][0]状态的定义：max $ of robbing A[0-> i] 且没偷 nums[i]
dp[i][1]状态的定义：max $ of robbing A[0-> i] 且偷了 nums[i]
dp[i][0] = max(dp[i-1][0],dp[i-1][1]);
dp[i][1] = dp[i-1][0]+nums[i];

### 最小路径和

dp[i][j]状态的定义： minPath(A[1->i][1->j])
dp[i][j] = min(dp[i-1][j], dp[i][j-1])+A[i][j]

### 股票买卖

dp[i][k][0 or 1] (0 <= i <= n-1, 1<= k <= K)
i 为天数
k 为最多交易次数
[0,1]为是否持有股票
总状态数：n * K *2
for o<= i <n :
for 1<=k <=K:
for s in {0,1}:
dp[i][k][s] = max(buy, sell, rest)

dp[i][k][0]= max(dp[i-1][k][0], dp[i-1][k][1]+prices[i])
解释：今天我没有持有股票，有两种可能：
我昨天就没有持有，然后今天选择 rest，所以今天我还是没有持有
我昨天持有股票，但是今天我 sell 了，所以我今天就没有持有股票了。

dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0]-prices[i])
解释：今天我持有股票，有两种可能：
我昨天就持有股票，今天选择 rest，所以我今天还持有股票
我昨天本没有持有股票，但今天选择 buy，所以今天我就持有股票了。

状态方程：
初始状态：
dp[-1][k][0] = dp[i][0][0] = 0
dp[-1][k][1] = dp[i][0][1] = -infinity

状态转移方程
dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1]+prices[i])
dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])
