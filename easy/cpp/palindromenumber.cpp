#include <iostream>
#include <bits/stdc++.h>
using namespace std;
bool isPalindrome(int x)
{
  string in;
  in = to_string(x);
  stringstream iss(in);
  vector<char> v;
  vector<char> v2;
  char c;
  while (iss >> c)
  {
    v.push_back(c);
    v2.push_back(c);
  }
  reverse(v2.begin(), v2.end());
  for (int i = 0; i < v.size(); i++)
  {
    if (v[i] != v2[i])
    {
      // cout << "false";
      return false;
    }
  }
  // cout << "true";
  return true;
}

int main()
{
  freopen("in.in", "r", stdin);
  int input;
  cin >> input;
  isPalindrome(input);
}