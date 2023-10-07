# 基本语法
## 包的定义与导出
```kotlin
package org.kotlin
import kotlin.test.*
//  ......
```
## 程序入口
Kotlin程序入口是main函数
```kotlin
fun main() {
    println("Hello world!")
}
```
支持自动推断
```kotlin
fun sum(a: Int, b: Int) = a + b
```
返回无意义的值，Unit可以省略
```kotlin
fun printSum(a: Int, b: Int): Unit {
    println("$a + $b is ${a + b}")
}
```
## 函数
```kotlin
fun sum(a: Int, b: Int): Int {
    return a + b
}
```
## 注释
```kotlin
// 单行注释
/* 多行
注释 */
```
## Kotlin变量
局部变量可以用关键字val定义，如果是可变的可以用var
```kotlin
val a: Int = 0
val b = 1
val c: Int
c = 2
```
```kotlin
var x = 5
x += 1
```
## 字符串模版
```kotlin
var a = 1
val s1 = "a is $a" 

a = 2
val s2 = "${s1.replace("is", "was")}, but now is $a"
```
## if条件语句
```kotlin
fun maxOf(a: Int, b: Int): Int {
    if (a > b) {
        return a
    } else {
        return b
    }
}
```
if表达式
```kotlin
fun maxOf(a: Int, b: Int) = if (a > b) a else b
```
## for循环
```kotlin
val nums = listOf("one", "two", "three")
for (num in nums) {
    println(num)
}
```
## while循环
```kotlin
val nums = listOf("one", "two", "three")
var index = 0
while (index < nums.size) {
    println("num at $index is ${nums[index]}")
    index++
}
```
## when表达式
```kotlin
fun describe(obj: Any): String =
    when (obj) {
        1          -> "One"
        "Hello"    -> "Greeting"
        is Long    -> "Long"
        !is String -> "Not a string"
        else       -> "Unknown"
    }
```
## range区间
```kotlin
val x = 10
val y = 9
if (x in 1..y+1) {
    println("fits in range")
}
```
## 集合
```kotlin
val nums = listOf("one", "two", "three")
for (num in nums) {
    println(num)
}
```

详细了解可通过 [Kotlin基本语法](https://kotlinlang.org/docs/basic-syntax.html)