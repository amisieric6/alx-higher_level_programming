#!/usr/bin/env python3

def remove_char_at(str, n):
    if n >= 0:
      return (str[:n] + str[n+1:])
    else:
      return (str)
print(remove_char_at("Best School", 3))
