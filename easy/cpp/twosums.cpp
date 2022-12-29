#include <iostream>
#include <bits/stdc++.h>
using namespace std;
vector<int> twoSum(vector<int> &nums, int target)
{
  vector<int> ans;
  for (int i = 0; i < sizeof(nums) - 1; i++)
  {
    ans.push_back(i);
    for (int j = i + 1; j < sizeof(nums); j++)
    {
      cout << j << '\n';
      if (nums[i] + nums[j] == target)
      {
        ans.push_back(j);
        return ans;
      }
    }
    // for (int i : ans)
    // {
    //   cout << i;
    // }
    ans.pop_back();
  }

  vector<int> nothing = {0, 0};
  return nothing;
}

int main()
{
  freopen("in.in", "r", stdin);
  string line;
  getline(cin, line);
  istringstream iss(line);
  vector<int> nums;
  int target;
  int number;
  while (iss >> number)
  {
    nums.push_back(number);
  }
  cin >> target;
  vector<int> answer = twoSum(nums, target);
  for (int i : answer)
  {
    cout << i;
  }
}