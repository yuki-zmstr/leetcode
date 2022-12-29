#include <iostream>
#include <bits/stdc++.h>
using namespace std;
string longestCommonPrefix(vector<string> &strs)
{
  int idx = 0;
  string ans;
  while (true)
  {
    char check = strs[0][idx];
    for (string word : strs)
    {
      if (idx >= word.size())
      {
        return ans;
      }
      if (word[idx] != check)
      {
        return ans;
      }
    }
    ans.push_back(strs[0][idx]);
    idx++;
  }
}

int main()
{
  freopen("in.in", "r", stdin);
  string line;
  vector<string> words;
  while (getline(cin, line))
  {
    words.push_back(line);
  }
  string ans = longestCommonPrefix(words);
  cout << ans;
  return 0;
}