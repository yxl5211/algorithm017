const canJump = (nums) => {
        let leftPos = nums.length - 1; //下标位置数
        for (let left = nums.length - 1; left >= 0; left--) {
            if (nums[left] + left >= leftPos) {
                leftPos = left;
            }
        }
        return leftPos === 0;
    }
    /**
     * 从后开始进行贪心
     * 1、leftPos指向：从后开始，能到达最后一个位置的最前指针
     * 2、从数组最后一位开始（最后一个肯定满足），
     * 3、只要当前的位置步长值+前面的元素个数 >=leftPos,则把leftPos指针向前移动
    举例：
    nums = [ 2, 1, 0, 3 ]
    从右至左遍历，leftPos = 3 。
    nums[2] = 0 ，到不了 nums[3] 。
    nums[1] = 1 ，到不了 nums[3] 。
    同理，nums[0] 。
    leftPos != 0 ，返回 false 。
    nums = [ 2, 3, 1, 4 ]
    从右至左遍历，leftPos = 3 。
    nums[2] = 1 ，能到达 nums[3] ，将 leftPos 设为 2 。
    nums[1] = 3 ，能到达 nums[2] ，将 leftPos 设为 1 。
    nums[0] = 2 ，能到达 nums[1] ，将 leftPos 设为 0 。
    leftPos = 0 ，返回 true 。
     */