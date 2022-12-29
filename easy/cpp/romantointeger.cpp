#include <iostream>
#include <bits/stdc++.h>
using namespace std;
int romantoInt(string s)
{
  bool I_trig = false, X_trig = false, C_trig = false;
  int ans = 0;
  for (char c : s)
  {
    // cout << c;
    if (c == 'I')
    {
      ans += 1;
      I_trig = true;
    }
    if (c == 'V')
    {
      if (I_trig)
      {
        ans += 3;
        I_trig = false;
      }
      else
      {
        ans += 5;
      }
    }
    if (c == 'X')
    {
      if (I_trig)
      {
        ans += 8;
        I_trig = false;
      }
      else
      {
        ans += 10;
        X_trig = true;
      }
    }
    if (c == 'L')
    {
      if (X_trig)
      {
        ans += 30;
        X_trig = false;
      }
      else
      {
        ans += 50;
      }
    }
    if (c == 'C')
    {
      if (X_trig)
      {
        ans += 80;
        X_trig = false;
      }
      else
      {
        ans += 100;
        C_trig = true;
      }
    }
    if (c == 'D')
    {
      if (C_trig)
      {
        ans += 300;
        C_trig = false;
      }
      else
      {
        ans += 500;
      }
    }
    if (c == 'M')
    {
      if (C_trig)
      {
        ans += 800;
        C_trig = false;
      }
      else
      {
        ans += 1000;
      }
    }
  }
  return ans;
  // unordered_map<string, int> m = {
  //   {"I",1},
  //   {"V",5},
  //   {"X",10},

  // }
}

int main()
{
  freopen("in.in", "r", stdin);
  string line;
  getline(cin, line);
  int ans = romantoInt(line);
  cout << ans;
  return ans;
}