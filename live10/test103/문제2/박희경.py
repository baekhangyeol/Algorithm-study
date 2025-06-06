"""
dp[0] = -1
dp[1] = -1
dp[2] = -1
dp[3] = 1
dp[4] = -1
dp[5] = 1
dp[6] = 2
dp[7] = -1
dp[8] = 1(5) + 1(3) = 2     // dp[5] + dp[3]
dp[9] = 3                   // dp[3] * 3
dp[10] = 2                  // dp[5] * 2
dp[11] = 1 + 2              // dp[5] + dp[6]
dp[12] = 4                  // dp[6] * 2
dp[13] =                    // dp[3] + dp[10]
dp[14]                      // dp[5] + dp[9]
dp[15] = 3                  // dp[5] * 3
dp[16] = -1                 // dp[5] + dp[11]
dp[17] = -1                 // dp[5] + dp[12]
dp[18] = 3 + 1 = 4          // dp[3] + dp[15]

"""

import sys

input = sys.stdin.readline

n = int(input())

dp = [-1] * 50001
dp[3] = 1
dp[5] = 1
dp[6] = 2

for i in range(8, n + 1):
    if dp[i - 3] != -1:
        dp[i] = dp[i - 3] + 1
    if dp[i - 5] != -1:
        dp[i] = dp[i - 5] + 1
    # 3, 5kg로 나눌 수 있다면
    if dp[i - 3] > 0 and dp[i - 5] > 0:
        dp[i] = min(dp[i - 3], dp[i - 5]) + 1

print(dp[n])
