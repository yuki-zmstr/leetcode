#include <iostream>
#include <bits/stdc++.h>
using namespace std;
vector<int> twoSum(vector<int> &nums, int target)
{
  vector<int> ans;
  vector<pair<int, int>> to_sort;
  for (int i = 0; i < nums.size(); i++)
  {
    to_sort.push_back(make_pair(nums[i], i));
  }
  sort(to_sort.begin(), to_sort.end());
  int start = 0;
  int end = nums.size() - 1;
  while (to_sort[start].first + to_sort[end].first != target)
  {
    if (to_sort[start].first + to_sort[end].first > target)
    {
      end--;
    }
    else
    {
      start++;
    }
  }
  ans.push_back(to_sort[start].second);
  ans.push_back(to_sort[end].second);
  // cout << "returning answer";
  return ans;
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